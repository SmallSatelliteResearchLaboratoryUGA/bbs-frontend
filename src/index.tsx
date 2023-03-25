import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

async function autoLogin() {
  // Check for a stored token in local storage
  const token = localStorage.getItem('encryptedToken');

  if (token) {
    // Retrieve the encryption key from session storage
    const keyJson = sessionStorage.getItem('encryptionKey');
    const key = keyJson ? JSON.parse(keyJson) : null;

    if (key) {
      // Import the key back into a CryptoKey object
      const cryptoKey = await window.crypto.subtle.importKey(
        'jwk', // The format of the key
        key, // The key in JSON format
        { name: 'AES-GCM' }, // The algorithm options
        false, // Whether the key is extractable
        ['decrypt'] // The allowed key usages
      );

      // Decode and decrypt the token
      const encryptedBytes = base64ToBuffer(token);
      const decryptedBytes = await window.crypto.subtle.decrypt(
        {
          name: 'AES-GCM',
          iv: encryptedBytes.slice(0, 12),
        },
        cryptoKey,
        encryptedBytes.slice(12)
      );
      const decryptedToken = new TextDecoder().decode(decryptedBytes);

      // Attempt to log in using the token
      try {
        const response = await fetch(`http://localhost:8000/login/${decryptedToken}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: decryptedToken }),
        });

        if (response.ok) {
          console.log('Auto login successful');
          // TODO: Handle successful login
        } else {
          console.log('Auto login failed');
          // TODO: Handle failed login
        }
      } catch (err) {
        console.error('Auto login error:', err);
        // TODO: Handle login error
      }
    }
  } else {
    console.log("no token! :-)");
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
