import axios, {
  type AxiosInstance,
  type AxiosProgressEvent,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios'
import { AuthStore } from '@/stores/auth'
import { WebConfig } from '@/lib/config'

// ------------------------------------------------------------------
// *Warning*
//
// All functions / variables in this file can only be used for PoliClear API requests.
// The special axios instance has been configured to sent api token by default.
// You never want to send the token to any other host.
// ------------------------------------------------------------------

export class AxiosApiClient {
  private authStore: AuthStore
  private axios: AxiosInstance
  private config: WebConfig

  constructor(authStore: AuthStore, config: WebConfig) {
    this.authStore = authStore
    this.config = config
    this.axios = axios.create({
      baseURL: this.config.api_server,
      timeout: 30 * 1000,
    })

    this.setupTokenInterceptor()
    // this.setupErrorHandler()
  }

  /**
   * @param path the path of this request, starts from '/'
   * @param queryParams query parameters appended to the path
   * @throws HttpBaseError may be one of it's subclass
   */
  public async get<T>(
    path: string,
    queryParams: Record<string, unknown> | null = null,
  ): Promise<AxiosResponse<T>> {
    return this.axios.get<T>(path, {
      params: queryParams,
    })
  }

  public async delete<T>(path: string): Promise<AxiosResponse<T>> {
    return this.axios.delete<T>(path)
  }

  /**
   * POST an url with json data.
   *
   * @param path the path of this request, starts from '/'
   * @param data the data to fill the post body, it will be converted to json.
   * @throws HttpBaseError may be one of it's subclass
   */
  public async post<T>(path: string, data: Record<string, unknown>): Promise<AxiosResponse<T>> {
    return this.axios.post<T>(path, data)
  }

  public async patch<T>(path: string, data: Record<string, unknown>): Promise<AxiosResponse<T>> {
    return this.axios.patch<T>(path, data)
  }

  public async put<T>(path: string, data?: Record<string, unknown>): Promise<AxiosResponse<T>> {
    return this.axios.put<T>(path, data)
  }

  public async postFormData<T>(
    path: string,
    formData: FormData,
    onUploadProgress?: (e: AxiosProgressEvent) => void,
  ): Promise<AxiosResponse<T>> {
    const config = {
      onUploadProgress: onUploadProgress,
    }
    return this.axios.post(path, formData, config)
  }

  private setupTokenInterceptor(): void {
    this.axios.interceptors.request.use((config) => {
      if (config.baseURL != this.config.api_server) {
        // double-check, won't send the token to other host accidentally
        return config
      }
      if (this.authStore.apiToken) {
        // add token
        config.headers[this.config.token_header_name] = this.authStore.apiToken
      }
      return config
    })
  }
}

// ------------------------------------------------------------------
//  errors
// ------------------------------------------------------------------

export class HttpBaseError extends Error {
  constructor() {
    super()
    this.name = 'HttpBaseError'
  }
}

/**
 * The error represents the http request was canceled.
 */
export class HttpCanceledError extends HttpBaseError {
  constructor(message: string | undefined) {
    super()
    this.name = 'HttpCanceledError'
    if (message) {
      this.message = message
    }
  }
}

/**
 * Never got the response from sever. Usually due to network exception, or the server was down.
 */
export class HttpNetworkError extends HttpBaseError {
  request: AxiosRequestConfig<any>

  constructor(request: AxiosRequestConfig<any>, message: string | undefined) {
    super()
    this.request = request
    this.name = 'HttpNetworkError'
    if (message) this.message = message
  }
}

/**
 * Did receive the http response, but the status code != 2xx.
 */
export class HttpResponseError extends HttpBaseError {
  request: AxiosRequestConfig<any>
  response: AxiosResponse
  /** http status code */
  status: number
  /** API defined error code, 0 if not present */
  errorCode: number
  errorMessage: string | null = null

  constructor(request: AxiosRequestConfig, resp: AxiosResponse) {
    super()
    this.request = request
    this.response = resp
    this.status = resp.status
    if ('code' in resp.data && typeof resp.data.code === 'number') {
      this.errorCode = resp.data.code
    } else {
      this.errorCode = 0
    }
    this.name = 'HttpError'
    this.message = `Failed to ${request.method} ${request.url}, status_code=${this.errorCode}`
    if (resp.data && resp.data.message) {
      this.errorMessage = resp.data.message
      this.message += '; ' + resp.data.message
    }
  }
}
