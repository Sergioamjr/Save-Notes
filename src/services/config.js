import axios from "axios";
const DEV = process.env.REACT_APP_BACKEND_DEV;
const PROD = process.env.REACT_APP_BACKEND_PROD;

const BACKEND = /localhost/.test(window.location.hostname) ? DEV : PROD;

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
