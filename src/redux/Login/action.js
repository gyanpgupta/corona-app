export const ON_AUTH_REQUEST = "ON_AUTH_REQUEST";
export const ON_AUTH_SUCCESS = "ON_AUTH_SUCCESS";
export const ON_AUTH_FAILURE = "ON_AUTH_FAILURE";

export const onAuthRequest = (payload) => ({
  type: ON_AUTH_REQUEST,
  payload,
});

export const onAuthSuccess = (payload) => ({
  type: ON_AUTH_SUCCESS,
  payload,
});

export const onAuthFailure = (payload) => ({
  type: ON_AUTH_FAILURE,
  payload,
});
