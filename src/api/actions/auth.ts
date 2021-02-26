import ApiFetch from '../ApiFetch';
import cookies from '../../lib/cookies';

async function login(name: string, password: string): Promise<string | undefined> {
  const body = {
    name,
    password,
  };

  try {
    const response = await ApiFetch.post('/auth/login', { body });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
async function logout(name: string): Promise<any> {
  const body = {
    name,
  };

  try {
    const response = await ApiFetch.post('/auth/logout', { body });
    return response.json;
  } catch (error) {
    console.error(error);
  }
}

function setTokenDecorator(getToken: (name: string, password: string) => Promise<any>) {
  return async function (...rest: string[]) {
    let tokenResponse;
    if (rest.length === 2) {
      const [name, password] = rest;
      tokenResponse = await getToken(name, password);

      if (tokenResponse) {
        const token = tokenResponse;

        ApiFetch.token = token;
        cookies.set('token', token, 7);
      }
    }

    return tokenResponse;
  };
}

function removeTokenDecorator(removeToken: (name: string) => Promise<any>) {
  return async function (...rest: string[]) {
    try {
      await removeToken(rest[0]);
      ApiFetch.token = null;
      cookies.delete(rest[0]);
    } catch (error) {
      console.error(error);
    }
  };
}

const auth = {
  login: setTokenDecorator(login),
  logout: removeTokenDecorator(logout),
};

export default auth;
