import { AuthStore } from '@/stores/auth'
import { WebConfig } from '@/lib/config'
import { BaseApi } from '@/lib/bases'

export type LoginResp = {
  username: string
  user_id: string
  token: string
}

export class UserApi extends BaseApi {
  constructor(authStore: AuthStore, config: WebConfig) {
    super(authStore, config)
  }
  async loginByCognitoOAuthCode(authCode: string): Promise<LoginResp> {
    this.authStore.setIsLoggingIn(true)
    const data = {
      type: 'oauth',
      client_type: 10,
      oauth_provider: 'cognito',
      oauth_client_id: this.config.cognito.client_id,
      oauth_callback_url: this.config.web_url + '/oauth/callback/cognito',
      auth_code: authCode,
    }
    try {
      const resp = await this.client.post<LoginResp>('/tokens', data)
      return resp.data
    } finally {
      this.authStore.setIsLoggingIn(false)
    }
  }
}
