import { Component, OnInit } from '@angular/core';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { FloatingWhatsappComponent } from './components/floating-whatsapp/floating-whatsapp.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProofSectionComponent } from './components/proof-section/proof-section.component';
import { QuoteSectionComponent } from './components/quote-section/quote-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  imports: [
    SiteHeaderComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    ProofSectionComponent,
    TestimonialsSectionComponent,
    FaqSectionComponent,
    QuoteSectionComponent,
    ContactSectionComponent,
    FloatingWhatsappComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private readonly seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.applyHomeSeo();
  }
}
