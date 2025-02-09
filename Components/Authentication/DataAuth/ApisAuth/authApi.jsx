// src/data/api/AuthApi.jsx

export const createUser = async (payload) => {
  const response = await fetch('https://api.wemotions.app/user/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return response.json();
};

export const sendEmailVerification = async (email) => {
  const response = await fetch('https://api.wemotions.app/user/send-email-verification', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  return response.json();
};

export const loginUser = async (payload) => {
  const response = await fetch('https://api.wemotions.app/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return response.json();
};
