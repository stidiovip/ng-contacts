import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Contact} from "../contact.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  /**
   * The input of the component : the contact
   */
  @Input() oneContact: Contact

  /**
   * The Outputs of this component
   *  - The outputs are events thats go out from the component. They managed by the parent component.
   * @type {EventEmitter<Contact>}
   */
  @Output() onDetailsEvent = new EventEmitter<Contact>()
  @Output() onDeleteEvent = new EventEmitter<Contact>()

  constructor() { }

  ngOnInit() {
  }

  /**
   * This sends the details event
   */
  details (){
    this.onDetailsEvent.emit(this.oneContact);
  }

  /**
   * This sends the deletion event
   */
  delete (){
    this.onDeleteEvent.emit(this.oneContact);
  }

}
