import { IRevitFunction } from './IRevitFunction';
export interface IResponse {
    Error: string;
    Content: IRevitFunction[];
}
