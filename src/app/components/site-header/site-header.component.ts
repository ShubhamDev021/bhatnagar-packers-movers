import { Component } from '@angular/core';
import { businessInfo } from '../../data/business-info';

@Component({
  selector: 'app-site-header',
  imports: [],
  templateUrl: './site-header.component.html',
})
export class SiteHeaderComponent {
  readonly phone = businessInfo.phone;
}
