export class Nom{
    constructor(private _nom:string,private _lien:string){}
    public get lien(): string {
        return this._lien;
    }
    public set lien(value: string) {
        this._lien = value;
    }
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
}