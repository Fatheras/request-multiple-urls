import AbortController from "abort-controller"
import axios from 'axios';

import REQUEST_TIMEOUT from './lib/constants.js';
import { checkUrls } from './lib/utils.js';

const abortController = new AbortController();

/**
 * Cancels requests if no responses have been received within 5 minutes
 */
const requestTimeout = setTimeout(
    () => {
        abortController.abort();
        console.log('No responses have been received within 5 minutes');
    },
    REQUEST_TIMEOUT
);

/**
 * Validate and fetch data from multiple URLs.
 *
 * @param {Array<string>} urls
 * @param {axios.AxiosRequestConfig<any>} config
 * @return {Promise<Array>} Array of promises to resolve at higher levels
 */
export default function requestMultipleUrls(urls, config) {
    checkUrls(urls);

    const responses = Promise.all(
        urls.map((url) => {
            return axios.get(url, { signal: abortController.signal, ...config })
                .then(clearTimeout(requestTimeout))
                .catch(err => {
                    clearTimeout(requestTimeout);

                    return err;
                });
        })
    );

    return responses;
};
