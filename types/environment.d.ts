export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BUILDER_PUBLIC_KEY: string;
    }
  }
}