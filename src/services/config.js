import { removeAuth, getAuth } from "./localStorage";
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
    removeAuth();
    window.location.replace("/");
  }
  throw error.response.data;
};

export const RequestFactory = async (endpoint, params = {}, method = "get") => {
  const { token } = getAuth();
  return axios[method](`${BACKEND}/${endpoint}`, {
    method: method.toUpperCase(),
    headers: {
      Authorization: `Bearer ${token}`,
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
  const { token } = getAuth();

  return axios
    .create({
      baseURL: `${BACKEND}/${baseURL}`,
      method,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })()
    .then(response => formatResponse(response))
    .catch(catchError);
};
