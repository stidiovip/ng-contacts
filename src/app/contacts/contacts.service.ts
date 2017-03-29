import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Contact } from './contact.model';
import 'rxjs/add/operator/map';

const _ = require('lodash');

@Injectable()
export class ContactsService {

    private headers: Headers;
    private options: RequestOptions;

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    /**
     * Adds a new contact
     *
     * @param {Contact} contact : the contact to be added
     * @return {Observable<R>}
     */
    addContact (contact : Contact){
        return this.http.post('/api/contacts', JSON.stringify(contact), this.options).map( res => new Contact(res.json()));
    }

    /**
     * Gets the contacts
     * @return {Observable<R>}
     */
    getContacts() {
        return this.http.get('/api/contacts').map(res => {
            let contacts = _.map(res.json(), function ( contact ) {
                return new Contact( contact );
            });
            return contacts;
        });
    }

    /**
     * Deletes a contact
     * @param {Contact} contact : the contact to be deleted
     */
    deleteContact(contact : Contact){
        return this.http.delete('/api/contacts/' + contact.id, {});
    }
}
