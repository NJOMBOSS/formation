import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactDetailsComponent } from "./contact-details/contact-details.component";
import { Contact } from './models';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, ContactDetailsComponent]
})
export class AppComponent {
  myContacts: Contact = {
    id: 'abcd',
    lastName: 'Henri',
    firstName: 'Kokou',
    phoneNumber: '+22570000000'

  };
}
