// ArrayBuffer to Base64 encoding
function bufferToBase64(buffer: ArrayBuffer) {
    const byteArray = new Uint8Array(buffer);
    const byteString = byteArray.reduce((acc, byte) => acc + String.fromCharCode(byte), '');
    return btoa(byteString);
  }

export async function storeToken(token: string) {
    // Generate a random encryption key
    const key = await window.crypto.subtle.generateKey(
      {
        name: 'AES-GCM',
        length: 256,
      },
      true,
      ['encrypt', 'decrypt']
    );
  
    // Convert the token to a Uint8Array
    const tokenBytes = new TextEncoder().encode(token);
  
    // Encrypt the token using the encryption key
    const encryptedBytes = await window.crypto.subtle.encrypt(
      {
        name: 'AES-GCM',
        iv: window.crypto.getRandomValues(new Uint8Array(12)),
      },
      key,
      tokenBytes
    );
  
    // Convert the encrypted bytes to a base64-encoded string
    const encryptedToken = bufferToBase64(encryptedBytes);
  
    // Store the encrypted token in local storage
    localStorage.setItem('encryptedToken', encryptedToken);
  
    // Store the encryption key in session storage
    sessionStorage.setItem('encryptionKey', JSON.stringify(key));
  }


  export async function retrieveToken() {
    // Get the encrypted token from local storage
    const encryptedToken = localStorage.getItem('encryptedToken');
  
    // Get the encryption key from session storage
    const encryptionKeyString = sessionStorage.getItem('encryptionKey');

    if (encryptedToken && encryptionKeyString) {
        const key = JSON.parse(encryptionKeyString);
        // Convert the encrypted token from Base64 to ArrayBuffer
        const encryptedBytes = base64ToBuffer(encryptedToken);
  
        // Decrypt the token using the encryption key
        const decryptedBytes = await window.crypto.subtle.decrypt(
           {
             name: 'AES-GCM',
             iv: window.crypto.getRandomValues(new Uint8Array(12)),
           },
           key,
          encryptedBytes
        );
  
        // Convert the decrypted bytes back to a string
        const token = new TextDecoder().decode(decryptedBytes);
        return token;
    } else {
        throw new Error('Token or encryption key not found');
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
  