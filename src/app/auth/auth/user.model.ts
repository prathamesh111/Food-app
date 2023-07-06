export class userModel{
    constructor(public email: String, public id : String , private _token: string, private _tokenexpirationDate: Date){}

    get token(){
        if(!this._tokenexpirationDate || new Date() > this._tokenexpirationDate){
            return null
        }
        return this._token
    }
}