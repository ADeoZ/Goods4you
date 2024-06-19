export const saveToLocalStorage = (key: string, state: unknown) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

export const loadFromLocalStorage = (key: string) => {
  try {
    const stateStr = window.localStorage.getItem(key);
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

export const removeFromLocalStorage = (key: string) => {
  window.localStorage.removeItem(key);
};

export const STORAGE_KEY_TOKEN = "token";
