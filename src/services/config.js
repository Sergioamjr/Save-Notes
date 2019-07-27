import axios from "axios";
const BACKEND = process.env.REACT_APP_BACKEND;

function formatResponse(response = {}) {
  const { data } = response;
  return data || response;
}

const catchError = error => {
  const statusCode = JSON.stringify(error.response.status);
  const url = JSON.stringify(error.response.config.url);
  if ((statusCode === "401" || statusCode === "403") && !/Auth/.test(url)) {
    window.location.replace("/");
  }
  throw error.response.data;
};

export const RequestFactory = async (endpoint, params = {}, method = "get") => {
  return axios[method](`${BACKEND}/${endpoint}`, {
    method: method.toUpperCase(),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    params
  })
    .then(response => formatResponse(response))
    .catch(catchError);
};

export const RequestFactoryWithParams = (
  baseURL: string,
  data: any,
  method = "post"
) => {
  console.log("post", method);
  return axios
    .create({
      baseURL: `${BACKEND}/${baseURL}`,
      method: method.toUpperCase(),
      data,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })()
    .then(response => formatResponse(response))
    .catch(catchError);
};
