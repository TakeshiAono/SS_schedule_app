export default abstract class Model {
    #private;
    initializationRowNumber: number;
    addableRowNumber: number;
    lastId: number;
    willNewId: number;
    constructor();
    create(record: [string, string]): void;
}
