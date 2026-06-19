import { Component } from '@angular/core';
import { services } from '../../data/business-info';

@Component({
  selector: 'app-services-section',
  imports: [],
  templateUrl: './services-section.component.html',
})
export class ServicesSectionComponent {
  readonly services = services;
}
