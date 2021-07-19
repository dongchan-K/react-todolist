// node 환경에서 import/export 문법을 사용할 수 있도록 설정
require = require('esm')(module);
module.exports = require('./main.js');
