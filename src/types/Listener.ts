export interface Listener {
  event: string,
  callback: (...args: any[]) => void
}