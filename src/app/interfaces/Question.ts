export class Question {
    constructor(private _id: string,private _question: string,private _proposition: string[],private _reponse: string){}

    public get reponse(): string {
        return this._reponse;
    }
    public set reponse(value: string) {
        this._reponse = value;
    }
    public get proposition(): string[] {
        return this._proposition;
    }
    public set proposition(value: string[]) {
        this._proposition = value;
    }
    public get question(): string {
        return this._question;
    }
    public set question(value: string) {
        this._question = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
}