import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly phone = '9368145735';
  readonly email = 'anubhatnagar15@gmail.com';
  readonly whatsappLink =
    'https://wa.me/919368145735?text=Namaste%20Bhatnagar%20Packers%20%26%20Movers%2C%20mujhe%20shifting%20quote%20chahiye.';

  readonly services = [
    'Household goods shifting',
    'Office shifting',
    'Vehicle transport',
    'Packing and unpacking',
    'Loading and unloading',
    'Safe and insured moving'
  ];

  readonly reasons = [
    'Experienced and trained team',
    'Secure packing material',
    'On-time delivery',
    'Transparent and fair pricing',
    'Customer satisfaction first'
  ];

  readonly testimonials = [
    {
      quote: 'Team ne packing bahut safely ki aur delivery time par ho gayi.',
      name: 'Amit Sharma'
    },
    {
      quote: 'Local shifting smooth rahi. Price clear tha aur staff cooperative tha.',
      name: 'Neha Gupta'
    },
    {
      quote: 'Bike transport aur ghar ka saman dono safely receive hua.',
      name: 'Rohit Verma'
    }
  ];
}
