use std::{
  fs::{metadata, rename, File},
  path::Path,
};

use chrono::{DateTime, Local, NaiveDateTime};
use simplelog::{
  Color, ColorChoice, CombinedLogger, ConfigBuilder, Level, LevelFilter,
  SharedLogger, TermLogger, TerminalMode, WriteLogger,
};

use clap::{value_parser, Arg, ArgAction, Command};

const LOG_FILE: &str = "latest.log";
const LOG_PATH: &str = "logs";

pub fn add_args(builder: Command) -> Command {
  builder
    .arg(
      Arg::new("trace")
        .long("trace")
        .num_args(0)
        .default_value("false")
        .value_parser(value_parser!(bool))
        .action(ArgAction::SetTrue)
        .conflicts_with_all(&["debug", "error", "warn", "info", "off"])
        .help("Sets the logging level to trace"),
    )
    .arg(
      Arg::new("debug")
        .long("debug")
        .num_args(0)
        .action(ArgAction::SetTrue)
        .conflicts_with_all(&["trace", "error", "warn", "info", "off"])
        .help("Sets the logging level to debug"),
    )
    .arg(
      Arg::new("error")
        .long("error")
        .num_args(0)
        .action(ArgAction::SetTrue)
        .conflicts_with_all(&["trace", "debug", "warn", "info", "off"])
        .help("Sets the logging level to error"),
    )
    .arg(
      Arg::new("warn")
        .long("warn")
        .num_args(0)
        .action(ArgAction::SetTrue)
        .conflicts_with_all(&["trace", "debug", "error", "info", "off"])
        .help("Sets the logging level to warn"),
    )
    .arg(
      Arg::new("info")
        .long("info")
        .num_args(0)
        .action(ArgAction::SetTrue)
        .conflicts_with_all(&["trace", "debug", "error", "warn", "off"])
        .help("Sets the logging level to info (default)"),
    )
    .arg(
      Arg::new("off")
        .long("off")
        .num_args(0)
        .action(ArgAction::SetTrue)
        .conflicts_with_all(&["trace", "debug", "error", "warn", "info"])
        .help("Sets the logging level to off"),
    )
    .arg(
      Arg::new("trace-file")
        .long("trace-file")
        .num_args(0)
        .action(ArgAction::SetTrue)
        .conflicts_with("disable-log")
        .help("Sets the logging level to trace for the log file"),
    )
    .arg(
      Arg::new("disable-log")
        .long("disable-log")
        .num_args(0)
        .action(ArgAction::SetTrue)
        .conflicts_with("trace-file")
        .help("Disables the log file"),
    )
}

pub fn get_level(matches: &clap::ArgMatches) -> LoggerSettings {
  let level: simplelog::LevelFilter;
  if matches.get_flag("trace") {
    level = simplelog::LevelFilter::Trace;
  } else if matches.get_flag("debug") {
    level = simplelog::LevelFilter::Debug;
  } else if matches.get_flag("warn") {
    level = simplelog::LevelFilter::Warn;
  } else if matches.get_flag("error") {
    level = simplelog::LevelFilter::Error;
  } else if matches.get_flag("off") {
    level = simplelog::LevelFilter::Off;
  } else {
    level = simplelog::LevelFilter::Info;
  }
  let file_level: simplelog::LevelFilter;
  if matches.get_flag("trace-file") {
    file_level = simplelog::LevelFilter::Trace;
  } else if matches.get_flag("disable-log") {
    file_level = simplelog::LevelFilter::Debug;
  } else {
    file_level = simplelog::LevelFilter::Info;
  }
  LoggerSettings {
    level,
    file_level,
  }
}

pub struct LoggerSettings {
  pub level: LevelFilter,
  pub file_level: LevelFilter,
}

pub fn init_logger(settings: LoggerSettings) -> () {
  let config = ConfigBuilder::new()
    .set_level_color(Level::Trace, Some(Color::Magenta))
    .set_level_color(Level::Debug, Some(Color::Cyan))
    .set_level_color(Level::Info, Some(Color::White))
    .set_level_color(Level::Warn, Some(Color::Yellow))
    .set_level_color(Level::Error, Some(Color::Red))
    .build();

  let writter: Option<Box<WriteLogger<File>>> =
    if settings.file_level != LevelFilter::Off {
      if !Path::new(&LOG_PATH).exists() {
        std::fs::create_dir(&LOG_PATH).ok();
      }

      let latest_log_path: String = format!("{}/{}", &LOG_PATH, &LOG_FILE);
      if Path::new(&latest_log_path).exists() {
        let metadata = metadata(&latest_log_path).unwrap();
        let created: DateTime<Local> = metadata.created().unwrap().into();
        let datetime: NaiveDateTime = created.naive_local();
        rename(
          &latest_log_path,
          format!(
            "{}/{}.log",
            &LOG_PATH,
            datetime.format("%Y-%m-%d-%H-%M-%S").to_string()
          ),
        )
        .unwrap();
        Some(WriteLogger::new(
          settings.file_level,
          config.to_owned(),
          File::create(&latest_log_path).unwrap(),
        ))
      } else {
        None
      }
    } else {
      None
    };

  let mut loggers: Vec<Box<dyn SharedLogger>> = vec![TermLogger::new(
    settings.level,
    config,
    TerminalMode::Mixed,
    ColorChoice::Auto,
  )];

  if let Some(writter) = writter {
    loggers.push(writter);
  }

  CombinedLogger::init(loggers).unwrap();
}
