import SectionTitle from '../components/SectionTitle';
import { CheckIcon } from 'lucide-react';

export default function PriceSection() {
    const data = [
         {
            title: 'Small Event',
            description: 'Ideal for small workshops, meetups, or local gatherings',
            price: '₦7,500',
            buttonText: 'Get Started',
            features: ['Up to 100 tickets', 'QR code ticket verification', 'Basic analytics dashboard', 'Email-based support',
            ],
        },
        {
            title: 'Medium Event',
            description: 'Perfect for concerts, conferences, and larger community events',
            price: '₦25,000',
            
            buttonText: 'Upgrade Now',
            features: ['Up to 1,000 tickets', 'QR + NFC contactless entry', 'Real-time attendee tracking', 'Priority email & chat support', 'Detailed event analytics',
            ],
        },
        {
            title: 'Large Event / Enterprise',
            description: 'Best for festivals, stadium events, and multi-day conferences',
            price: '₦150,000',
            buttonText: 'Contact Sales',
            features: ['Unlimited tickets', 'Dedicated event manager', 'Advanced anti-counterfeit verification', 'Custom reporting & API integration', '24/7 priority support',
            ],
        },
    ];

    return (
        <section id='pricing' className='flex flex-col items-center justify-center'>
            <SectionTitle title='Price Categories' description='Choose the perfect category for your event. Whether it’s small, medium, or large. All plans include secure ticketing and fraud protection.' />
            <div className='mt-12 flex flex-wrap items-center justify-center gap-6'>
                {data.map((item, index) => (
                    <div key={index} className='group w-full max-w-80'>
                        <div className={`flex flex-col items-center justify-center rounded-xl border border-slate-200 p-6 text-center transition-all duration-300 group-hover:-translate-y-1 ${item.mostPopular ? 'bg-gray-800 text-white' : 'bg-white'}`}>
                            <h3 className='text-lg font-semibold'>{item.title}</h3>
                            <p className= 'text-gray-500'>{item.description}</p>
                            <p className='mt-4 text-2xl font-semibold'>
                                {item.price} 
                            </p>
                            <span className='text-sm font-normal  text-gray-500'></span>
                        </div>
                        <div className='mt-2 flex flex-col'>
                            {item.features.map((feature, index) => (
                                <div key={index} className='flex items-center gap-2 border-b border-gray-200 py-2.5 text-gray-800'>
                                    <div className='rounded-full bg-gray-800 p-1'>
                                        <CheckIcon className='size-3 text-white' strokeWidth={2.5} />
                                    </div>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
