import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { businessInfo, faqs, services } from '../data/business-info';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly pageTitle =
    'Bhatnagar Packers & Movers Bijnor | Safe Packing, Shifting & Moving Services';
  private readonly canonicalUrl = `${businessInfo.siteUrl}/`;
  private readonly imageUrl = `${businessInfo.siteUrl}${businessInfo.logoPath}`;
  private readonly keywords = [
    'packers and movers Bijnor',
    'Bhatnagar Packers and Movers',
    'house shifting Bijnor',
    'office shifting Bijnor',
    'vehicle transport Bijnor',
    'packing and moving Uttar Pradesh',
    'all India packers movers Bijnor',
  ].join(', ');

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  applyHomeSeo(): void {
    this.title.setTitle(this.pageTitle);

    this.meta.updateTag({ name: 'description', content: businessInfo.description });
    this.meta.updateTag({ name: 'keywords', content: this.keywords });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, max-image-preview:large' });
    this.meta.updateTag({ name: 'author', content: businessInfo.name });
    this.meta.updateTag({ name: 'geo.region', content: 'IN-UP' });
    this.meta.updateTag({ name: 'geo.placename', content: businessInfo.locality });
    this.meta.updateTag({ name: 'theme-color', content: '#061f4f' });

    this.updatePropertyTag('og:type', 'website');
    this.updatePropertyTag('og:site_name', businessInfo.name);
    this.updatePropertyTag('og:title', this.pageTitle);
    this.updatePropertyTag('og:description', businessInfo.description);
    this.updatePropertyTag('og:url', this.canonicalUrl);
    this.updatePropertyTag('og:image', this.imageUrl);
    this.updatePropertyTag('og:image:alt', `${businessInfo.name} logo`);
    this.updatePropertyTag('og:locale', 'en_IN');

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: this.pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: businessInfo.description });
    this.meta.updateTag({ name: 'twitter:image', content: this.imageUrl });

    this.setCanonicalLink();
    this.setJsonLd();
  }

  private updatePropertyTag(property: string, content: string): void {
    this.meta.updateTag({ property, content }, `property="${property}"`);
  }

  private setCanonicalLink(): void {
    const head = this.document.head;
    let canonicalLink = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonicalLink) {
      canonicalLink = this.document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute('href', this.canonicalUrl);
  }

  private setJsonLd(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'MovingCompany',
          '@id': `${this.canonicalUrl}#business`,
          name: businessInfo.name,
          legalName: businessInfo.legalName,
          url: this.canonicalUrl,
          description: businessInfo.description,
          image: this.imageUrl,
          logo: this.imageUrl,
          telephone: `+91${businessInfo.phone}`,
          email: businessInfo.email,
          priceRange: 'Affordable',
          slogan: 'Aapka samaan, hamari zimmedari',
          address: {
            '@type': 'PostalAddress',
            addressLocality: businessInfo.locality,
            addressRegion: businessInfo.region,
            addressCountry: businessInfo.country,
          },
          areaServed: [
            {
              '@type': 'City',
              name: businessInfo.locality,
            },
            {
              '@type': 'AdministrativeArea',
              name: businessInfo.region,
            },
            {
              '@type': 'Country',
              name: businessInfo.postalCountry,
            },
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: `+91${businessInfo.phone}`,
            contactType: 'customer service',
            areaServed: businessInfo.country,
            availableLanguage: ['en', 'hi'],
          },
          makesOffer: services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service,
              provider: {
                '@id': `${this.canonicalUrl}#business`,
              },
            },
          })),
        },
        {
          '@type': 'WebSite',
          '@id': `${this.canonicalUrl}#website`,
          url: this.canonicalUrl,
          name: businessInfo.name,
          description: businessInfo.description,
          publisher: {
            '@id': `${this.canonicalUrl}#business`,
          },
        },
        {
          '@type': 'FAQPage',
          '@id': `${this.canonicalUrl}#faq`,
          mainEntity: faqs.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        },
      ],
    };

    let schemaScript = this.document.getElementById('local-business-schema');

    if (!schemaScript) {
      schemaScript = this.document.createElement('script');
      schemaScript.id = 'local-business-schema';
      schemaScript.setAttribute('type', 'application/ld+json');
      this.document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify(schema);
  }
}
