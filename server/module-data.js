const _ = require('lodash');

/**
 * This is the Contact class
 */
class Contact {

    /**
     * The constructor
     *
     * @param {number} id : the identifier
     * @param {string} address : the address
     * @param {string} phone : the phone
     */
    constructor ( id, name, address, phone ){
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
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
            new Contact(1, "Tidiane SIDIBE", "Nantes, France", "0000011111"),
            new Contact(2, "Jean-Brice BOUTIN", "Paris, France",  "0000011112"),
            new Contact(3, "Marianne POURRE", "Rennes, France", "0000011113")
        ];

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
        let addedContact = new Contact(++this.max, contact.name, contact.address, contact.phone);
        this._contacts.push( addedContact );
        return addedContact;
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