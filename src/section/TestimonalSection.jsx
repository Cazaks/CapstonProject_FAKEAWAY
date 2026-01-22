import SectionTitle from '../components/SectionTitle';
import { StarIcon } from 'lucide-react';

export default function TestimonalSection() {
    const data = [
        {
        review: 'The QR ticket scanning is super fast and reliable. It saved us so much time at the gate!',
        name: 'Chinedu Okafor',
        date: '12 Jan 2025',
        rating: 5,
    },
    {
        review: 'No more fake tickets! The anti-counterfeit system works perfectly and gives peace of mind.',
        name: 'Aisha Bello',
        date: '15 Mar 2025',
        rating: 5,
    },
    {
        review: 'Monitoring attendees has never been easier. I can track entries and exits without stress.',
        name: 'Muhammad Sani',
        date: '20 Feb 2025',
        rating: 5,
    },
    {
        review: 'The contactless entry system is smooth and efficient. Everyone loved the experience at our event!',
        name: 'Ngozi Eze',
        date: '20 Sep 2025',
        rating: 5,
    },
    {
        review: 'This ticketing system is a game-changer. Simple to use, reliable, and fully secure.',
        name: 'Tunde Adeyemi',
        date: '04 Oct 2025',
        rating: 5,
    },
    {
        review: 'Organizing events has become much easier thanks to the automated ticket verification and tracking.',
        name: 'Bassey Okokon',
        date: '01 Nov 2025',
        rating: 5,
    },
    ];

    return (
        <section className='flex flex-col items-center justify-center'>
            <SectionTitle title='Our Testimonials' description='Hear from our satisfied customers about the benefits of using FakeAway. We love hearing from our customers.' />

            <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {data.map((item, index) => (
                    <div key={index} className='w-full max-w-88 space-y-4 rounded-md border border-gray-200 bg-white p-3 text-gray-500 transition-all duration-300 hover:-translate-y-1'>
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-1'>
                                {Array(item.rating)
                                    .fill('')
                                    .map((_, index) => <StarIcon key={index} className='size-4 fill-gray-800 text-gray-800' />)}
                            </div>
                            <p>{item.date}</p>
                        </div>
                        <p>“{item.review}”</p>
                        <div className='flex items-center gap-2 pt-3'>
                            <p className='font-medium text-gray-800'>{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
