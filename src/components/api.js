import { checkResponse } from "../utils/checkResponse";

const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-24",
  headers: {
    authorization: "d8924f35-962a-45f8-9e42-e25d9d1dfa42",
    "Content-Type": "application/json",
  },
};

function request(endpoint, options) {
  return fetch(`${config.baseUrl}${endpoint}`, options).then(checkResponse);
}

const promise1 = new Promise((resolve, reject) => {
  request(`/users/me`, {
    headers: config.headers,
  }).then((result) => {
    resolve(result);
  });
});

const promise2 = new Promise((resolve, reject) => {
  request(`/cards`, {
    headers: config.headers,
  }).then((result) => {
    resolve(result);
  });
});

export const getInitialData = (editProfile, initCards, userId) => {
  Promise.all([promise1, promise2]).then(([response1, response2]) => {
    editProfile(response1);
    initCards(response2);
  });
};

export const patchAvatar = (avatar) => {
  return request(`/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar,
    }),
  });
};

export const patchEditProfile = (name, about) => {
  return request(`/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name,
      about,
    }),
  });
};

export const postNewCard = (name, link) => {
  return request(`/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name,
      link,
    }),
  });
};

export const deleteCard = (cardId) => {
  return request(`/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  });
};

export const putLike = (card) => {
  return request(`/cards/likes/${card._id}`, {
    method: "PUT",
    headers: config.headers,
  });
};

export const deleteLike = (card) => {
  return request(`/cards/likes/${card._id}`, {
    method: "DELETE",
    headers: config.headers,
  });
};
