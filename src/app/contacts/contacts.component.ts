import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Contact } from './contact.model';

const _ = require('lodash');

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

    // This is the list of all contacts
    private contacts = [];

    // This is the selected contact
    private contact: Contact;

    // Indicates if details are shown or hidden
    private showDetails: boolean = false;

    // For adding a new contact
    private newContactInfo = new Contact({});

    // The constructor
    constructor( private contactsService: ContactsService) {}

    /**
     * Reset the data for new
     */
    reset (){
        this.newContactInfo = new Contact({});
    }

    /**
     * Adds a new contacts
     */
    addContact(){

        // add, only if data are OK !
        if ( this.newContactInfo.isCorrect() ){

            // add
            this.contactsService.addContact(this.newContactInfo).subscribe(( contact ) => {
                this.contacts.push( contact );

                // clean
                this.reset();
            });
        }
    }

    ngOnInit() {
         // Get contacts from API
         this.contactsService.getContacts().subscribe( contacts => {
            this.contacts = contacts;
         });

         // reset inputs for news
        this.reset ();
    }

    /**
     * Show details of contact
     * @param contact
     */
    onDetails (contact: Contact){
        this.showDetails = true;
        this.contact = contact;
    }

    /**
     * Detele a contact
     * @param contact
     */
    onDelete (contact: Contact){
        // send deletion to back off

        this.contactsService.deleteContact (contact).subscribe( () => {
            // delete locally
            _.remove(this.contacts, function (_contact){
                return _contact.id == contact.id;
            });
        });
    }

    /**
     * Close the detail box
     */
    onCloseDetails(){
        this.showDetails = false;
    }
}
