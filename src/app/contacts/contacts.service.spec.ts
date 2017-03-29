/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactsService } from './contacts.service';

describe('ContactsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactsService]
    });
  });

  it('should ...', inject([ContactsService], (service: ContactsService) => {
    expect(service).toBeTruthy();
  }));
});
