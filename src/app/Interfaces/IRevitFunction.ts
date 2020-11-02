export interface IRevitFunction {
    FunctionType: number;
    FunctionTypeName: string;
    Arguments: string[];
    ChildFunctions: IRevitFunction[];
}
