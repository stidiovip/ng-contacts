import { Pipe, PipeTransform } from '@angular/core';

const _  = require('lodash');

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(contacts: any, terms: any): any {

    if ( _.isUndefined(terms)){
      return contacts;
    }

    return _.filter(contacts, function (contact){
      return _.includes(_.toLower(contact.firstname), _.toLower(terms)) ||_.includes(_.toLower(contact.lastname), _.toLower(terms));
    })
  }

}
