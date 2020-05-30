import { Question } from './Question';
export class Qcm {

constructor(private _id: string,private _nom: string,private _questions: Question[],private _nbrq: number){}
public get nbrq(): number {
    return this._nbrq;
}
public set nbrq(value: number) {
    this._nbrq = value;
}
public get questions(): Question[] {
    return this._questions;
}
public set questions(value: Question[]) {
    this._questions = value;
}
public get nom(): string {
    return this._nom;
}
public set nom(value: string) {
    this._nom = value;
}
public get id(): string {
    return this._id;
}
public set id(value: string) {
    this._id = value;
}


}
