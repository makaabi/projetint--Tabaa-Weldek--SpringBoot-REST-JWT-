import { Commentaire } from './Commentaire';

export class Publication{
    constructor(private _idp:number,private _titre : string,private _description : string,private _commentaires : Commentaire[]){}
    public get idp():number{
        return this._idp;
    }
    public set idp(idp:number){
        this._idp = idp;
    }
    public get titre():string{
        return this._titre;
    }
    public set titre(titre:string){
        this._titre = titre;
    }
    public get description():string{
        return this._description;
    }
    public set description(description:string){
        this._description = description;
    }
    public get commentaires():Commentaire[]{
        return this._commentaires;
    }
    ngOnInit() {
    }
}