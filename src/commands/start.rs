use tauri::Runtime;

#[tauri::command]
pub async fn start<R: Runtime>(
  _: tauri::AppHandle<R>, _: tauri::Window<R>) -> Result<(), ()> {
  Ok(())
}
