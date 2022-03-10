import crypto from 'crypto'
var name = 'braitsch';
var hash = crypto.createHash('sha256').update(name).digest('hex');
console.log(hash);