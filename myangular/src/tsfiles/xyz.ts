
let msg='rohit';
let xyz=(<string>msg).endsWith('t');


interface String {    
    endsWith(searchString: string, endPosition?: number): boolean;
};

