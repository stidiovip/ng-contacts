import {Input, Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: 'contact-details.component.html',
  styleUrls: ['contact-details.component.css']
})
export class ContactDetailsComponent{


  @Input() contact: Contact;

  @Output() onCloseEvent = new EventEmitter();
  constructor() { }

  close(){
    this.onCloseEvent.emit();
  }
}
