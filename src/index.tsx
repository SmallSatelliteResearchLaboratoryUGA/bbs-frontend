import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { storeToken } from './components/Security';
import { useAuth } from './AuthContext';
const backend_url = `http://localhost:8000`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

async function autoLogin() {
  const token = localStorage.getItem("encryptedToken");

  if (token) {
    const keyJson = sessionStorage.getItem("encryptionKey");
    const key = keyJson ? JSON.parse(keyJson) : null;
    console.log('Key JSON:', keyJson); // Add this line to debug the key JSON
    if (key) {
      try {
        const cryptoKey = await importEncryptionKey(key);
        console.log(cryptoKey)
        const decryptedToken = await decryptToken(cryptoKey, token);
        console.log("waiting fetch from autologinuser")

        console.log(decryptedToken)
        await autoLoginUser(decryptedToken);
      } catch (err: any) {
        console.error("Auto login error:", err, err.message);
        // TODO: Handle login error
      }
    }
  } else {
    console.log("no token! :-)");
  }
}

async function importEncryptionKey(key: JsonWebKey) {
  return await window.crypto.subtle.importKey(
    "jwk",
    key,
    { name: "AES-GCM" },
    false,
    ["decrypt"]
  );
}

async function decryptToken(cryptoKey: CryptoKey, token: string) {
  const encryptedBytes = base64ToBuffer(token);

  const decryptedBytes = await window.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: encryptedBytes.slice(0, 12),
    },
    cryptoKey,
    encryptedBytes.slice(12)
  );

  return new TextDecoder().decode(decryptedBytes);
}


async function autoLoginUser(token: string) {
  console.log("waiting fetch from autologinuser")
  const {login} = useAuth()
  console.log("waiting fetch from autologinuser")

  const response = await fetch(`${backend_url}/auto-login`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'credentials': 'include',
      'Authorization': `Bearer ${token}`,
    }
  });
  console.log("waiting fetch from autologinuser")
  if (response.ok) {
    console.log("Auto login successful");
    // TODO: Handle successful login
    storeToken(token);
    login(token)
  } else {
    console.log("Auto login failed");
    // TODO: Handle failed login
  }
}


// Base64 to ArrayBuffer decoding
function base64ToBuffer(base64: string) {
  const byteString = atob(base64);
  const byteArray = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    byteArray[i] = byteString.charCodeAt(i);
  }
  return byteArray.buffer;
}
console.log("should attempt auto log in");
autoLogin();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
