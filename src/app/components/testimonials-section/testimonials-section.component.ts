import { Component } from '@angular/core';
import { testimonials } from '../../data/business-info';

@Component({
  selector: 'app-testimonials-section',
  imports: [],
  templateUrl: './testimonials-section.component.html',
})
export class TestimonialsSectionComponent {
  readonly testimonials = testimonials;
}
