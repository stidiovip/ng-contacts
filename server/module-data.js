const _ = require('lodash');

/**
 * This is the Contact class
 */
class Contact {

    /**
     * T
     * @param data
     */
    constructor ( data ){
        this.id         = data.id || 0;
        this.firstname  = data.firstname || "";
        this.lastname   = data.lastname || "";
        this.address    = data.address || "";
        this.email      = data.email || "";
        this.phone      = data.phone || "";
    }

}

/**
 * This is Data Access Layer for contacts
 */
class ModuleData {

    /**
     * Default constructor
     */
    constructor (){

        this._contacts = [
            new Contact({id : 1, firstname: "Tidiane", lastname: "Sidibé", address : "Nantes, France", email : "stidio@yahoo.com", phone: "0000011111"}),
            new Contact({id : 2, firstname: "Jean-Brice", lastname: "Boutin", address : "Nantes, France", email : "jb1@yahoo.com", phone: "0000011112"}),
        ];

        // for counting the next contact id
        this.max = this._contacts.length;
    }

    /**
     * Gets contacts list
     * @return {Array}
     */
    get contacts (){
        return this._contacts;
    }

    /**
     * Adds a contact
     * @param {Contact} contact
     */
    addContact (contact){
        contact.id = ++this.max;
        this._contacts.push( contact );
        return contact;
    }

    /**
     * Finds a contact by id
     * @param id
     * @return {*}
     */
    findContactById (id){
        return _(this._contacts).find( (contact) =>{
            return contact.id == id;
        });
    }

    /**
     * Deletes a contact
     * @param {Contact} contact
     */
    deleteContact (contact){
        _.remove(this._contacts, function (_contact){
            return contact.id == _contact.id;
        });
    }
}

module.exports = Contact;
module.exports = ModuleData;