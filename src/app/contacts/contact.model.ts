/**
 * The contact class
 * This is a bean like class
 *
 * It only contains :
 *  - private attributs
 *  - default contructor
 *  - getters and setters
 */
const _ = require('lodash');

export class Contact {

    public id: number;
    public firstname: string;
    public lastname: string;
    public address: string;
    public email: string;
    public phone: string;

    /**
     * Default constructor
     */
    constructor( data ) {
        this.id = data.id || 0;
        this.firstname = data.firstname || "";
        this.lastname = data.lastname || "";
        this.address = data.address || "";
        this.email = data.email || "";
        this.phone = data.phone || "";
    }

    isCorrect (){
        return !(_.isEmpty(this.firstname) && _.isEmpty(this.lastname) && _.isEmpty(this.address) && _.isEmpty(this.email) && _.isEmpty(this.phone));
    }

}
