export class NotArrayError extends Error {
    constructor() {
        super('URLs should be an array');
        this.name = 'NotArrayError';
    }
}
