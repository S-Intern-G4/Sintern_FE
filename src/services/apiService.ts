import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { axiosConfig } from '../configs/api/axios';

class ApiService {
  private _api: AxiosInstance;

  constructor() {
    this._api = axios.create(axiosConfig);
  }

  public get<ResponseDataType, Response = AxiosResponse<ResponseDataType>>(url: string, config?: AxiosRequestConfig): Promise<Response> {
    return this._api.get(url, config);
  }

  public post<ResponseDataType, BodyType, Response = AxiosResponse<ResponseDataType>>(url: string, data: BodyType, config?: AxiosRequestConfig): Promise<Response> {
    return this._api.post(url, data, config);
  }

  public put<ResponseDataType, BodyType, Response = AxiosResponse<ResponseDataType>>(url: string, data: BodyType, config?: AxiosRequestConfig): Promise<Response> {
    return this._api.put(url, data, config);
  }

  public uploadFile(url, data) {
    const config = {
      baseURL: 'http://localhost:8090',
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    axios.post(url, data, config);
  }

  public async getFile(url) {
    return axios({
      baseURL: 'http://localhost:8090',
      url: url,
      method: 'GET',
      responseType: 'blob'
    });
  }
}

export default new ApiService();
