require('@vue/runtime-dom/dist/runtime-dom.cjs.js');
const { config } = require('@vue/test-utils');

config.global.stubs['transition'] = true;
config.global.stubs['transition-group'] = true;
