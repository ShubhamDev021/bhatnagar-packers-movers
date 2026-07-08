import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { businessInfo, services } from './data/business-info';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should keep business contact data available from the shared data file', () => {
    expect(businessInfo.phone).toEqual('9368145735');
    expect(businessInfo.email).toContain('@');
    expect(services.length).toBe(6);
  });

  it('should render the composed website sections and CTA links', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Bhatnagar Packers & Movers');
    expect(compiled.querySelector('app-services-section')).toBeTruthy();
    expect(compiled.querySelector('app-contact-section')).toBeTruthy();
    expect(compiled.querySelector('.hero-line')?.textContent).toContain('Aapka samaan');
    expect(compiled.querySelector('a[href^="tel:+919368145735"]')).toBeTruthy();
    expect(compiled.querySelector('a[href^="https://wa.me/919368145735"]')).toBeTruthy();
  });
});
