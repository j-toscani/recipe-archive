import ApiFetch from '../ApiFetch';
import cookies from '../../lib/cookies';
import useIsAuthenticated from '../../hooks/useIsAuthenticated';

async function login(username: string, password: string): Promise<string | undefined> {
  const body = {
    username,
    password,
  };

  try {
    const response = await ApiFetch.post('/login', { body });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
async function logout(username: string): Promise<string | undefined> {
  const body = {
    username,
  };

  try {
    const response = await ApiFetch.post('/logout', { body });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

function setTokenDecorator(getToken: (username: string, password: string) => Promise<any>) {
  return async function (...rest: string[]) {
    let tokenResponse;
    if (rest.length === 2) {
      const [username, password] = rest;
      tokenResponse = await getToken(username, password);

      if (tokenResponse) {
        const token = tokenResponse;

        ApiFetch.token = token;
        cookies.set('token', token, 7);
        useIsAuthenticated().setIsAuthenticated();
      }
    }

    return tokenResponse;
  };
}

function removeTokenDecorator(removeToken: (username: string) => Promise<any>) {
  return function (...rest: string[]) {
    removeToken(rest[0])
      .then((response: any) => {
        ApiFetch.token = null;
        cookies.delete(rest[0]);
        useIsAuthenticated().setIsAuthenticated();

        return response;
      })
      .catch((err: any) => console.error(err));
  };
}

const auth = {
  login: setTokenDecorator(login),
  logout: removeTokenDecorator(logout),
};

export default auth;
