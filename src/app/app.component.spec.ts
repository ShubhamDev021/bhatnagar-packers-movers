import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

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

  it('should expose business contact details', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.phone).toEqual('9368145735');
    expect(app.email).toEqual('anubhatnagar15@gmail.com');
    expect(app.services.length).toBe(6);
  });

  it('should render the website hero and CTA links', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Bhatnagar Packers & Movers');
    expect(compiled.querySelector('.hero-line')?.textContent).toContain('Aapka samaan');
    expect(compiled.querySelector('a[href^="tel:+919368145735"]')).toBeTruthy();
    expect(compiled.querySelector('a[href^="https://wa.me/919368145735"]')).toBeTruthy();
  });
});
