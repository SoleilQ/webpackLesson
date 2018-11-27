import {
    sync
} from './components/sync/index.js';
import( /* webpackChunkName: "async-test" */ './components/async/index.js').then(_ => {
    _.default.init();
}); //魔法注释 magic comments
console.log('hello webpack');
sync();