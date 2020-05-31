export class Document{
  
    
    
    constructor(private _id: string,private _nom: string,private _ownerid: string,private _institut: string,private _branch: string,private _matiere: string,private _type: string,private _datec: Date,private _lien: string){}
    public get lien(): string {
        return this._lien;
    }
    public set lien(value: string) {
        this._lien = value;
    }
    
    public get datec(): Date {
        return this._datec;
    }
    
    public set datec(value: Date) {
        this._datec = value;
    }
    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }
    public get matiere(): string {
        return this._matiere;
    }
    public set matiere(value: string) {
        this._matiere = value;
    }
    public get branch(): string {
        return this._branch;
    }
    public set branch(value: string) {
        this._branch = value;
    }
    public get institut(): string {
        return this._institut;
    }
    public set institut(value: string) {
        this._institut = value;
    }
    public get ownerid(): string {
        return this._ownerid;
    }
    public set ownerid(value: string) {
        this._ownerid = value;
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