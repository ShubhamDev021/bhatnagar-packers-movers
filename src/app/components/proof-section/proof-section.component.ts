import { Component } from '@angular/core';
import { reasons } from '../../data/business-info';

@Component({
  selector: 'app-proof-section',
  imports: [],
  templateUrl: './proof-section.component.html',
})
export class ProofSectionComponent {
  readonly reasons = reasons;
}
