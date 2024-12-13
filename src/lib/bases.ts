import { AxiosApiClient, HttpResponseError } from '@/lib/axios'
import { AuthStore } from '@/stores/auth'
import { WebConfig } from '@/lib/config'

export class BaseApi {
  protected client: AxiosApiClient
  protected authStore: AuthStore
  protected config: WebConfig

  constructor(authStore: AuthStore, config: WebConfig) {
    this.authStore = authStore
    this.config = config
    this.client = new AxiosApiClient(authStore, config)
  }

  static isHttpResponseError(e: unknown): e is HttpResponseError {
    return e instanceof HttpResponseError
  }
}
