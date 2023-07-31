mod hello;
mod info;

use tauri::{generate_handler, Builder, Wry};

pub fn generate_all_handlers(builder: Builder<Wry>) -> Builder<Wry> {
  builder.invoke_handler(generate_handler![
    hello::greet,
    info::get_cmd_name,
    info::get_cmd_version,
    info::get_cmd_license,
    info::get_cmd_source,
    info::get_cmd_authors
  ])
}
