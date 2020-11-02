import { IRevitFunction } from './IRevitFunction';
export interface IResponse {
    error: string;
    content: IRevitFunction[];
}
