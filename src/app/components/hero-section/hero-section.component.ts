import { Component } from '@angular/core';
import { businessInfo } from '../../data/business-info';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  readonly phone = businessInfo.phone;
  readonly whatsappLink = businessInfo.whatsappLink;
}
