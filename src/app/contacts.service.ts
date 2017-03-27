import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ContactsService {

  constructor(private http: Http) { }

  /**
   * Gets contacts front the REST API
   *
   * GET /api/contact
   */
  getContacts (){
    return this.http
        .get('/api/contacts')
        .map( res => res.json());
  }
}
