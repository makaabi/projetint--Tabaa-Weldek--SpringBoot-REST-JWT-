import { Nom } from './Nom';
import { Matiere } from './Matiere';
import { Branche } from './Branche';

export class Institut{
    constructor(private _id:string,private _institut:string,private _branches:Branche[]){}
    public get branches(): Branche[] {
        return this._branches;
    }
    public set branches(value: Branche[]) {
        this._branches = value;
    }
    public get institut(): string{
        return this._institut;
    }
    public set institut(value: string) {
        this._institut = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
}