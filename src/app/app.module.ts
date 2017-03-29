import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsService } from './contacts/contacts.service';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { SearchPipe } from './contacts/search.pipe';

const appRoutes = [
    {
      path: '',
      redirectTo : 'contacts',
      pathMatch: 'full'
    },
    {
      path: 'contacts',
      component: ContactsComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactDetailsComponent,
    ContactComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
