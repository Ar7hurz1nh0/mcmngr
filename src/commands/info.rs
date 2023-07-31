// name = env!("CARGO_PKG_NAME"),
// version = env!("CARGO_PKG_VERSION"),
// license = env!("CARGO_PKG_LICENSE"),
// source = env!("CARGO_PKG_HOMEPAGE"),
// authors = env!("CARGO_PKG_AUTHORS").split(':').collect::<Vec<&str>>().join(", ")
use tauri::Runtime;

#[tauri::command]
pub async fn get_cmd_name<R: Runtime>(
  _app: tauri::AppHandle<R>, _window: tauri::Window<R>,
) -> Result<&'static str, String> {
  Ok(env!("CARGO_PKG_NAME"))
}

#[tauri::command]
pub async fn get_cmd_version<R: Runtime>(
  _app: tauri::AppHandle<R>, _window: tauri::Window<R>,
) -> Result<&'static str, String> {
  Ok(env!("CARGO_PKG_VERSION"))
}

#[tauri::command]
pub async fn get_cmd_license<R: Runtime>(
  _app: tauri::AppHandle<R>, _window: tauri::Window<R>,
) -> Result<&'static str, String> {
  Ok(env!("CARGO_PKG_LICENSE"))
}

#[tauri::command]
pub async fn get_cmd_source<R: Runtime>(
  _app: tauri::AppHandle<R>, _window: tauri::Window<R>,
) -> Result<&'static str, String> {
  Ok(env!("CARGO_PKG_HOMEPAGE"))
}

#[tauri::command]
pub async fn get_cmd_authors<R: Runtime>(
  _app: tauri::AppHandle<R>, _window: tauri::Window<R>,
) -> Result<Vec<String>, String> {
  Ok(
    env!("CARGO_PKG_AUTHORS")
      .to_owned()
      .split(':')
      .collect::<Vec<&str>>()
      .iter()
      .map(|s| s.to_owned().to_owned())
      .collect::<Vec<String>>(),
  )
}
