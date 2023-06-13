export class Logger {

  static log(message: any) {
    console.log(`INTERNAL: ${message}`);
  }

  static error(err: unknown) {
    console.error(`ERROR: ${err}`)
  }
}
