export class EmptyArrayError extends Error {
    constructor() {
        super('URLs array should not be empty');
        this.name = 'EmptyArrayError';
    }
}
