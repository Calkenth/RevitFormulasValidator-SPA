export interface IRevitFunction {
    functionType: number;
    functionTypeName: string;
    arguments: string[];
    childFunctions: IRevitFunction[];
}
