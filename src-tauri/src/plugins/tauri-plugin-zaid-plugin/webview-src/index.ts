import { invoke } from '@tauri-apps/api/tauri'

export async function test(): Promise<string> {
  return await invoke("plugin:zaid-plugin|test");
}
