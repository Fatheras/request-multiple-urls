import axios from 'axios';
import MockAdapter from "axios-mock-adapter";

import urls from './mocks/urls.js'
import requestMultipleUrls from '../index.js'

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const ftseFsiMock = require('./mocks/ftse-fsi.json');
const gbpHkdeMock = require('./mocks/gbp-hkd.json');
const gbpUsdMock = require('./mocks/gbp-usd.json');

// no time to add test cases with mocked checkUrls function :(
describe('index.js', () => {
    let mock;

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    describe('requestMultipleUrls', () => {
        test('Should return jsons if urls are correct', async () => {
            // arrange
            const input = urls;
            const expectedResult = [ftseFsiMock, gbpHkdeMock, gbpUsdMock];

            mock.onGet(`${urls[0]}`).reply(200, expectedResult[0]);
            mock.onGet(`${urls[1]}`).reply(200, expectedResult[1]);
            mock.onGet(`${urls[2]}`).reply(200, expectedResult[2]);

            // act
            const result = await requestMultipleUrls(input);

            // assert
            expect(result[0].data).toStrictEqual(expectedResult[0]);
            expect(result[1].data).toStrictEqual(expectedResult[1]);
            expect(result[2].data).toStrictEqual(expectedResult[2]);
        });

        test('Should return axios errors if requests were failed', async () => {
            // arrange
            const input = urls;
            const expectedResult = [
                new Error('Network Error'),
                new Error('Network Error'),
                new Error('Network Error')
            ];

            mock.onGet().networkError();

            // act
            const result = await requestMultipleUrls(input);

            // assert
            expect(result).toStrictEqual(expectedResult);
        });
    });
});
