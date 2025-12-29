/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TINA_CLIENT_ID?: string
  readonly VITE_TINA_TOKEN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

