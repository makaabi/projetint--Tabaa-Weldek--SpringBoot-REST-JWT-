export class Commentaire{
    constructor(private _idc:number,private _description:string){}
    public get idc():number{
        return this._idc;
    }
    public set idc(idc:number){
        this._idc = idc;
    }
    public get description():string{
        return this._description;
    }
    public set description(description:string){
        this._description = description;
    }
    ngOnInit() {
    }
}