import { Component } from '@angular/core';
import { businessInfo } from '../../data/business-info';

@Component({
  selector: 'app-quote-section',
  imports: [],
  templateUrl: './quote-section.component.html',
})
export class QuoteSectionComponent {
  readonly email = businessInfo.email;
}
