import { Nom } from './Nom';
import { Matiere } from './Matiere';

export class Branche{
    constructor(private _branche:string,private _matieres:Matiere[]){}
    public get matieres(): Matiere[] {
        return this._matieres;
    }
    public set matieres(value: Matiere[]) {
        this._matieres = value;
    }
    public get branche(): string{
        return this._branche;
    }
    public set branche(value: string) {
        this._branche = value;
    }
}