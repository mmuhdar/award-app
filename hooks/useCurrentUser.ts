import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface IUSer {
  name: string;
  role: string;
  accessToken: string;
}

export const useCurrentUser = () => {
  const [user, setUser] = useState<IUSer | null>(null);

  useEffect(() => {
    const currentUser = Cookies.get('currentUser');
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);
  return user;
};
