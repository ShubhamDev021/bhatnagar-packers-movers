export interface Testimonial {
  quote: string;
  name: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const businessInfo = {
  phone: '9368145735',
  email: 'anubhatnagar15@gmail.com',
  whatsappLink:
    'https://wa.me/919368145735?text=Namaste%20Bhatnagar%20Packers%20%26%20Movers%2C%20mujhe%20shifting%20quote%20chahiye.',
};

export const services = [
  'Household goods shifting',
  'Office shifting',
  'Vehicle transport',
  'Packing and unpacking',
  'Loading and unloading',
  'Safe and insured moving',
];

export const reasons = [
  'Experienced and trained team',
  'Secure packing material',
  'On-time delivery',
  'Transparent and fair pricing',
  'Customer satisfaction first',
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Team ne packing bahut safely ki aur delivery time par ho gayi.',
    name: 'Amit Sharma',
  },
  {
    quote: 'Local shifting smooth rahi. Price clear tha aur staff cooperative tha.',
    name: 'Neha Gupta',
  },
  {
    quote: 'Bike transport aur ghar ka saman dono safely receive hua.',
    name: 'Rohit Verma',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'Do you provide packers and movers service in Bijnor?',
    answer:
      'Yes. Bhatnagar Packers & Movers provides local shifting, household shifting, office shifting, packing, loading, unloading, and transport support in Bijnor.',
  },
  {
    question: 'Can you move goods outside Bijnor or across India?',
    answer:
      'Yes. We support local and all India moving requirements based on pickup location, delivery location, item list, and shifting date.',
  },
  {
    question: 'Do you provide vehicle transport for bike or car shifting?',
    answer:
      'Yes. Vehicle transport for bikes and cars is available with careful handling and route-based planning.',
  },
  {
    question: 'How can I get a moving quote?',
    answer:
      'You can call or WhatsApp us with pickup address, drop address, moving date, and item details. We will share a clear quote after reviewing the requirement.',
  },
];
