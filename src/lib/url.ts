import { WebConfig } from '@/lib/config'

export function buildLoginUrl(webConfig: WebConfig): string {
  const queryParams = new URLSearchParams({
    response_type: 'code',
    client_id: webConfig.cognito.client_id,
    redirect_uri: webConfig.web_url + '/oauth/callback/cognito',
  })
  const url = new URL('/oauth2/authorize', webConfig.cognito.server)
  url.search = queryParams.toString()
  return url.toString()
}

/**
 * Build the cognito logout url that performs necessary operations. Cognito will redirect the user
 * back to us via `logout_uri` param.
 *
 * @param webConfig
 * @see https://docs.aws.amazon.com/cognito/latest/developerguide/logout-endpoint.html
 */
export function buildLogoutUrl(webConfig: WebConfig): string {
  const queryParams = new URLSearchParams({
    client_id: webConfig.cognito.client_id,
    // logout_uri must be registered in :
    // Cognito - User pool - App integration - App client - Hosted UI - Allowed sign-out URLs
    // Otherwise an error that missing required parameter `redirect_uri` will occur.
    logout_uri: webConfig.web_url,
  })
  const url = new URL('/logout', webConfig.cognito.server)
  url.search = queryParams.toString()
  return url.toString()
}
