import { checkUrls } from '../lib/utils.js';
import { EmptyArrayError, NotArrayError, InvalidURLFormatError } from '../lib/errors/index.js';
import urls from './mocks/urls.js'

describe('utils', () => {
    describe('checkUrls', () => {
        test('Should not throw an error if urls are correct', () => {
            // arrange
            const input = urls;
            const expectedResult = undefined;

            // act
            const result = checkUrls(input);

            // assert
            expect(result).toStrictEqual(expectedResult);
        });

        test('Should throw an NotArrayError if passed value is not an array', () => {
            // arrange
            const input = 1;
            const expectedResult = new NotArrayError();

            try {
                // act
                checkUrls(input);
            } catch (error) {
                // assert
                expect(error).toEqual(expectedResult);
            }
        });

        test('Should throw EmptyArrayError if the array is empty', () => {
            // arrange
            const input = [];
            const expectedResult = new EmptyArrayError();

            try {
                // act
                checkUrls(input);
            } catch (error) {
                // assert
                expect(error).toEqual(expectedResult);
            }
        });

        test('Should throw InvalidURLFormatError if the array contains an element with wrong URL format', () => {
            // arrange
            const input = ['dfgfdgdgsdgdfg'];
            const expectedResult = new InvalidURLFormatError(input[0]);

            try {
                // act
                checkUrls(input);
            } catch (error) {
                // assert
                expect(error).toEqual(expectedResult);
            }
        });
    });
})
