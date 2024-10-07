const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-24",
  headers: {
    authorization: "d8924f35-962a-45f8-9e42-e25d9d1dfa42",
    "Content-Type": "application/json",
  },
};

const promise1 = new Promise((resolve, reject) => {
  fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((result) => {
      resolve(result);
    });
});

const promise2 = new Promise((resolve, reject) => {
  fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((result) => {
      resolve(result);
    });
});

export const getInitialData = (profileEdit, initialCards) => {
  Promise.all([promise1, promise2])
    .then(([response1, response2]) => {
      profileEdit(response1);
      initialCards(response2);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const patchAvatar = async (avatar) => {
  const res = await fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar,
    }),
  });
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(`Ошибка: ${res.status}`);
};

export const patchEditProfile = async (name, about) => {
  const res = await fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name,
      about,
    }),
  });
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(`Ошибка: ${res.status}`);
};

export const postNewCard = async (name, link) => {
  const res = await fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name,
      link,
    }),
  });
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(`Ошибка: ${res.status}`);
};

export const deleteCard = async (cardId) => {
  const res = await fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  });
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(`Ошибка: ${res.status}`);
};

export const putLike = async (card) => {
  const res = await fetch(`${config.baseUrl}/cards/likes/${card._id}`, {
    method: "PUT",
    headers: config.headers,
  });
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(`Ошибка: ${res.status}`);
};

export const deleteLike = async (card) => {
  const res = await fetch(`${config.baseUrl}/cards/likes/${card._id}`, {
    method: "DELETE",
    headers: config.headers,
  });
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(`Ошибка: ${res.status}`);
};
