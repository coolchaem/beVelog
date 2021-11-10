import axios, { AxiosRequestConfig } from 'axios';
import { API_HOST } from '../constant';

type returnType = Promise<{
  isSuccess: boolean;
  data: any;
  resultCode: any;
  resultMessage: any;
}>;

export function callApi(requestConfig: AxiosRequestConfig): returnType {
  return axios({ ...requestConfig, baseURL: API_HOST }).then((response) => {
    const { resultCode, resultMessage } = response.data;
    if (resultCode < 0) {
      console.error(resultMessage);
    }
    console.log(response.data);
    return {
      isSuccess: resultCode.Success === ResultCode.Success,
      data: response.data.data,
      resultCode,
      resultMessage,
    };
  });
}

export const ResultCode = {
  Success: 0,
};
