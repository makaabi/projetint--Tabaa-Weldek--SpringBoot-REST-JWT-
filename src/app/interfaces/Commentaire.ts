export class Commentaire{
    constructor(private _idc:string,private _description:string,private _ownerid: string){}
    public get idc():string{
        return this._idc;
    }
    public set idc(idc:string){
        this._idc = idc;
    }
    public get description():string{
        return this._description;
    }
    public set description(description:string){
        this._description = description;
    }
    public get ownerid(): string {
        return this._ownerid;
    }
    public set ownerid(value: string) {
        this._ownerid = value;
    }
    ngOnInit() {
    }
}