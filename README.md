# request-multiple-urls

An NPM package that allows developers to fetch data from multiple URLs with just one function.

## How to start

1. Unzip file
2. Create driver project with npm init
3. Import request-multiple-urls package by `npm install <PATH to request-multiple-urls package>`
4. Run the package

## Example of the driver code

```javascript
import requestMultipleUrls from 'request-multiple-urls';

const urls = [
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];

requestMultipleUrls(urls).then(urlContent => {
    console.log(urlContent);
}).catch(err => console.log(err));
```

## Running unit tests

Run `npm t` to execute the unit tests via [Jest](https://jestjs.io/).

## Error cases

There are two levels of error detection.

### checkURLs level

The first is the checkURLs function, which checks if the given input is an array of valid URLs.
If the input is invalid, an appropriate error will be thrown.

### Axios level

The second is the Axios layer, which checks that if any network error occurs, that error will be added to the result array. 

## Choice of dependencies


### [Axios](https://www.npmjs.com/package/axios)

Axios was chosen because it is a simple and powerful library for any kind of http requests, but if I had time I would choose something more lightweighted because the functionality of request-multiple-urls is quite simple.

### [valid-url](https://www.npmjs.com/package/valid-url) 

Just a simple library to check if url is valid or not.

### [abort-controller](https://www.npmjs.com/package/abort-controller) 

A library that implements the WHATWG AbortController interface, which allows us to cancel requests if they take too long time.

### [jest](https://www.npmjs.com/package/jest)

A library that simplifies writing tests

### [axios-mock-adapter](https://www.npmjs.com/package/axios-mock-adapter)

Axios adapter that allows to easily mock requests

## How to improve
- add types.d.ts file for TypeScript apps
- add support of old Node.js versions and CommonJS modules
- add additional configuration options to make the module's behavior more flexible
- add more validation
- improve test coverage
- improve code structure (move logic from index.js file etc.)
- change Axios module to something more lightweighted?
