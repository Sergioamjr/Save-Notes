const KEY: string = "MY-NOTES";

export const getAuth = (key = KEY) => {
  const credentials = localStorage.getItem(key);
  return JSON.parse(credentials || "{}");
};

export const setAuth = (object = {}, key = KEY) => {
  console.log(setAuth, key);
  localStorage.setItem(key, JSON.stringify(object));
};

export const removeAuth = () => {
  localStorage.clear();
};
