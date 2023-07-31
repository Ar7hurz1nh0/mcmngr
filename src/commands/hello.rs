use tauri::Runtime;

#[tauri::command]
pub async fn greet<R: Runtime>(
  _: tauri::AppHandle<R>, _: tauri::Window<R>, name: &str,
) -> Result<String, String> {
  Ok(format!("Hello, {name}"))
}
