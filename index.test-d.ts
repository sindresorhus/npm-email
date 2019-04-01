import {expectType} from 'tsd';
import npmEmail = require('.');

expectType<Promise<string>>(npmEmail('sindresorhus'));
