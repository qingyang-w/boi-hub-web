import { AxiosApiClient, HttpResponseError } from '@/lib/axios'
import { AuthStore } from '@/stores/auth'

export class BaseApi {
  protected client: AxiosApiClient

  constructor(authStore: AuthStore) {
    this.client = new AxiosApiClient(authStore)
  }

  static isHttpResponseError(e: unknown): e is HttpResponseError {
    return e instanceof HttpResponseError
  }
}
