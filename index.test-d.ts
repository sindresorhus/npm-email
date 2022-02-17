import {expectType} from 'tsd';
import npmEmail from './index.js';

expectType<Promise<string | undefined>>(npmEmail('sindresorhus'));
