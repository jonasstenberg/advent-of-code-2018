const { readFileSync } = require('fs');

module.exports = file => readFileSync(file, 'utf8');
