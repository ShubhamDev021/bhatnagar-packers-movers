import { Component } from '@angular/core';
import { businessInfo } from '../../data/business-info';

@Component({
  selector: 'app-contact-section',
  imports: [],
  templateUrl: './contact-section.component.html',
})
export class ContactSectionComponent {
  readonly phone = businessInfo.phone;
  readonly email = businessInfo.email;
  readonly whatsappLink = businessInfo.whatsappLink;
}
