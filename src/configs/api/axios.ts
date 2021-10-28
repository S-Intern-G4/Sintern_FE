import * as qs from 'qs';
import { PathLike } from 'fs';

export const axiosConfig = {
	returnRejectPromiseOnError: true,
	timeout: 30000,
	baseURL: window['env'].API_BASE_URL, 
	headers: {
		common: {
      'Cache-Control': 'no-cache, no-store',
      Pragma: 'no-cache',
      'Content-Type': 'application/json',
      Accept: 'application/json'
		}
	},
	paramsSerializer: (params: PathLike) => qs.stringify(params, { indices: false })
};
