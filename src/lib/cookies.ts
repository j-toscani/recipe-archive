export function setCooky(name: string, value: string, exdays: number) {
  const date = new Date();
  date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);

  const expires = 'expires=' + date.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
}

export function getCooky(name: string) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookyEntries = decodedCookie.split(';');

  for (let i = 0; i < cookyEntries.length; i++) {
    const cooky = cookyEntries[i].trim();
    const [cookyName, cookyValue] = cooky.split('=');
    if (cookyName === name) {
      return cookyValue;
    }
  }

  return '';
}

export function checkCooky(name: string) {
  const cookyValue = getCooky(name);
  if (cookyValue) {
    return cookyValue;
  }
}

export function deleteCooky(name: string) {
  const cookyValue = getCooky(name);
  setCooky(name, cookyValue, 0);
}

const cookies = {
  set: setCooky,
  get: getCooky,
  check: checkCooky,
  delete: deleteCooky,
};

export default cookies;
