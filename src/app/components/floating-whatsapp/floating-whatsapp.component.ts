import { Component } from '@angular/core';
import { businessInfo } from '../../data/business-info';

@Component({
  selector: 'app-floating-whatsapp',
  imports: [],
  templateUrl: './floating-whatsapp.component.html',
})
export class FloatingWhatsappComponent {
  readonly whatsappLink = businessInfo.whatsappLink;
}
