import Cookies from 'js-cookie';
import { AuthService } from '../service';

const authService = new AuthService('http://localhost:3000');

export const useLogin = () => {
  const login = async (email: string): Promise<any> => {
    const data = await authService
      .login(email)
      .then((res) => {
        if (!res.data) {
          throw res;
        } else {
          Cookies.set('currentUser', JSON.stringify(res.data));
          return res;
        }
      })
      .catch((error) => {
        return error;
      });
    return data;
  };
  return { login };
};
