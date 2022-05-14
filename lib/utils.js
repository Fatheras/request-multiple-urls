import { isUri } from 'valid-url';

import { NotArrayError, EmptyArrayError, InvalidURLFormatError } from './errors/index.js';

/**
 * Validates an array of URLs.
 *
 * @param {Array<string>} urls
 * @param {axios.AxiosRequestConfig<any>} config
 * @return {void} 
 */
 export const checkUrls = (urls) => {
    if (!Array.isArray(urls)) {
        throw new NotArrayError();
    }

    if (!urls.length) {
        throw new EmptyArrayError(); 
    }

    for (const url of urls) {
        if (!isUri(url)) {
            throw new InvalidURLFormatError(url); 
        }
    }
}

