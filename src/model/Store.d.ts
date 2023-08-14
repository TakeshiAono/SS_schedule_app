import type { InputData } from "../types/table";
export type TableName = "Field" | "MileStone" | "Project" | "Schedule" | "User" | "Work";
export declare class Store {
    #private;
    MODELS: string[];
    initializationRowNumber: number;
    constructor(parentModelName: TableName);
    insert(parentModelName: string, record: InputData): void;
    update(): void;
    delete(): void;
}
