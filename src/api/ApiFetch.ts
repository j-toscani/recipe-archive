import config from './config';

class _ApiFetch {
  baseUrl: string;
  token: string | null;
  _headers: { [key: string]: string };
  constructor() {
    this.baseUrl = config.baseUrl;
    this.token = null;
    this._headers = {};
  }
  private convertParams(paramsObject: any) {
    const params = [];
    for (const key in paramsObject) {
      if (Object.prototype.hasOwnProperty.call(paramsObject, key)) {
        let paramValue = paramsObject[key];

        if (!paramValue) {
          continue;
        }

        if (Array.isArray(paramValue) || typeof paramValue === 'object') {
          paramValue = JSON.stringify(paramValue);
        }

        const param = `${key}=${paramValue}`;
        params.push(param);
      }
    }
    return '?' + params.join('&');
  }

  private fetch(url: string, method: string, options: any) {
    return fetch(`${this.baseUrl}${url}`, { method, ...options });
  }
  set header(value: [string, string]) {
    this._headers[value[0]] = value[1];
  }
  get headers(): { [key: string]: any } {
    return this._headers;
  }

  get(url: string, options: { paramObject?: any | string } = {}) {
    let params = options?.paramObject;
    if (typeof params !== 'string') {
      params = this.convertParams(params);
    }
    return fetch(url + params ? params : '');
  }
  post(url: string, options: { body?: any } = {}) {
    let { body } = options;
    if (body) {
      body = JSON.stringify(options?.body);
    }
    return this.fetch(url, 'POST', { body });
  }
  put(url: string, options: { body?: any } = {}) {
    let { body } = options;
    if (body) {
      body = JSON.stringify(options.body);
    }
    return this.fetch(url, 'PUT', { body });
  }
  delete(url: string, options: { body?: any } = {}) {
    let { body } = options;
    if (body) {
      body = JSON.stringify(options.body);
    }
    return this.fetch(url, 'DELETE', { body });
  }
}

const ApiFetch = new _ApiFetch();
export default ApiFetch;
