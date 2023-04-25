import axios, { AxiosInstance } from 'axios';

export class AuthService {
  protected readonly instance: AxiosInstance;
  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: 'Time out!',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      //   validateStatus: () => true,
    });
  }

  login = async (email: string) => {
    const data = this.instance
      .post('/login', { email })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error.response.data;
      });
    return data;
  };
}
