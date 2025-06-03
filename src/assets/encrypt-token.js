const crypto = require('crypto');

const token = 'ghp_xxxYourRealTokenHere';
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);  // 256-bit key
const iv = crypto.randomBytes(16);   // 128-bit IV

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(token, 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log('🔐 Encrypted Token:', encrypted);
console.log('🗝️ Key:', key.toString('hex'));
console.log('🌀 IV:', iv.toString('hex'));