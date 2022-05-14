export class InvalidURLFormatError extends Error {
    constructor(url) {
        super(`Input URL ${url} has invalid URL format`);
        this.name = 'InvalidURLFormatError';
    }
}
