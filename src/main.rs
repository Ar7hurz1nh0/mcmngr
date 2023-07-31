// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use clap::Command;
use mcmngr::{
  commands::generate_all_handlers,
  util::logging::{self, init_logger},
};

fn main() -> () {
  let before_help = format!(
    "{name} {version}\nLicense: {license}\nSource: {source}\nAuthors: {authors}",
    name = env!("CARGO_PKG_NAME"),
    version = env!("CARGO_PKG_VERSION"),
    license = env!("CARGO_PKG_LICENSE"),
    source = env!("CARGO_PKG_HOMEPAGE"),
    authors = env!("CARGO_PKG_AUTHORS").split(':').collect::<Vec<&str>>().join(", ")
  );

  let gui_cmd = Command::new("gui")
    .visible_alias("app")
    .alias("--enable-gui")
    .before_help(before_help.to_owned())
    .about("Starts the program with a interactive graphical interface");
  let gui_cmd = logging::add_args(gui_cmd);

  let main_cmd = Command::new(env!("CARGO_PKG_NAME"))
    .version(env!("CARGO_PKG_VERSION"))
    .author(env!("CARGO_PKG_AUTHORS"))
    .before_help(before_help)
    .name(env!("CARGO_PKG_NAME"))
    .about(env!("CARGO_PKG_DESCRIPTION"))
    .subcommands([&gui_cmd])
    .subcommand_required(true);

  let matches = logging::add_args(main_cmd).get_matches();

  if let Some(matches) = matches.subcommand_matches("gui") {
    let settings = logging::get_level(matches);
    init_logger(settings);
    generate_all_handlers(tauri::Builder::default())
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
  } else {
    let settings = logging::get_level(&matches);
    init_logger(settings);
  }
}
