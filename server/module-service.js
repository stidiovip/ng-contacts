const ModuleData = require('./module-data');

/**
 * This is a Business Access Layer for contacts
 */
class ModuleService {

    /**
     * The contructor
     * @param {ModuleData} mData : the data management module
     */
    constructor ( mData ){
        this.mData = mData;
    }

    /**
     * Get contacts
     * @return {Array}
     */
    getContacts (){
        return this.mData.contacts;
    }

    /**
     * Adds a contact
     * @param contact
     */
    addContact (contact){
        return this.mData.addContact(contact);
    }

    /**
     * Finds a contact by id
     * @param id
     * @return {*}
     */
    findContactById (id){
        return this.mData.findContactById(id);
    }

    /**
     * Deletes a contact
     * @param contact
     */
    deleteContact (contact){
        this.mData.deleteContact(contact);
    }
}

module.exports = ModuleService;