// @flow
const AURIAH_KEY: string = "MY-NOTES";

export const getAuth = (key?: string = AURIAH_KEY) => {
  const credentials: ?string = localStorage.getItem(key);
  return JSON.parse(credentials || "{}");
};

export const setAuth = (
  object: {},
  key?: string = AURIAH_KEY
): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      localStorage.setItem(key, JSON.stringify(object));
      return resolve();
    } catch (error) {
      return reject(
        `Não foi possível gravar as informações do usuário ${error}`
      );
    }
  });
};

export const removeAuth = (): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      localStorage.clear();
      return resolve();
    } catch (error) {
      return reject(
        `Não foi possível apagar as informações do usuário ${error}`
      );
    }
  });
};
