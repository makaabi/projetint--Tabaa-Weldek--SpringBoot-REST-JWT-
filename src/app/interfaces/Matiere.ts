import { Nom } from './Nom';

export class Matiere{
    constructor(private _matiere:string,private _noms:Nom[]){}
    public get matiere(): string {
        return this._matiere;
    }
    public set matiere(value: string) {
        this._matiere = value;
    }
    public get noms(): Nom[]{
        return this._noms;
    }
    public set noms(value: Nom[]) {
        this._noms = value;
    }
}