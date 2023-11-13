export interface IDatasets {
    label: Array<string>;
    dataset: Array<IData>;
    text: string;
}

export interface IData { 
    label: string;
    data: number | Array<number> | unknown;
    borderWidth: number;
}

export interface IOptions {
    
}