import {expectType} from 'tsd-check';
import npmEmail from '.';

expectType<Promise<string>>(npmEmail('sindresorhus'));
