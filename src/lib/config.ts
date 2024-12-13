import { useEffect, useState } from 'react'

export class WebConfig {
  api_server: string = ''
  web_url: string = ''
  token_header_name: string = ''
  cognito: CognitoConfig = { server: '', client_id: '' }
}

export interface CognitoConfig {
  server: string
  client_id: string
}

declare global {
  interface Window {
    __APP_CONFIG__: WebConfig
  }
}

export function useConfig() {
  const [config, setConfig] = useState<WebConfig | null>(null)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.__APP_CONFIG__) {
      setConfig(window.__APP_CONFIG__)
    }
  }, [])

  return config
}
