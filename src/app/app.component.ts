import { Component } from '@angular/core';
import { Contact } from './contacts/contact.model';
import {ContactsService} from "./contacts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private contacts = [];
  private newContactInfo = {
    name: "",
    address: "",
    phone: ""
  };

  public constructor (private contactsService: ContactsService){
    this.contactsService.getContacts().subscribe( contacts => {
      this.contacts = contacts
    });
  }

  /**
   * Adds a new contacts
   */
  public addContact(){

    // add, only if data are OK !
    if ( this.newContactInfo.name != "" && this.newContactInfo.address != "" && this.newContactInfo.phone != ""){
      this.contacts.push(new Contact(this.contacts.length + 1, this.newContactInfo.name,  this.newContactInfo.name,  this.newContactInfo.name));

        // clean
        this.newContactInfo = {
            name: "",
            address: "",
            phone: ""
        };
    }
  }
}
