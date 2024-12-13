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

import config from '@/web-config.json'
export const getConfig = (): WebConfig => {
  return config as WebConfig
}
