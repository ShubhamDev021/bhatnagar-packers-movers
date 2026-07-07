import { Component } from '@angular/core';
import { faqs } from '../../data/business-info';

@Component({
  selector: 'app-faq-section',
  imports: [],
  templateUrl: './faq-section.component.html',
})
export class FaqSectionComponent {
  readonly faqs = faqs;
}
