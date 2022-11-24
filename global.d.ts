export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SOME_ENV_KEY: string
    }
  }
}
