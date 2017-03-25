import { Component } from '@angular/core';
import { Contact } from './contact';

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

  public constructor (){
    this.contacts.push(new Contact(1, "Tidiane SIDIBE", "Nantes, France", "06000001"));
    this.contacts.push(new Contact(2, "Jean-Brice BOUTIN", "Nantes, France", "06000002"));
    this.contacts.push(new Contact(3, "Marianne POURRE", "Rennes, France", "06000003"));
  }

  /**
   * Adds a new contacts
   */
  public addContact(){

    // add, only if data are OK !
    if ( this.newContactInfo.name != "" && this.newContactInfo.address != "" && this.newContactInfo.phone != ""){
      this.contacts.push(new Contact(this.contacts.length + 1, this.newContactInfo.name,  this.newContactInfo.address,  this.newContactInfo.phone));

        // clean
        this.newContactInfo = {
            name: "",
            address: "",
            phone: ""
        };
    }
  }
}
