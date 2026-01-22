import { ArrowRightIcon } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

export default function CallToActionSection() {
    return (
        <section className='flex flex-col items-center justify-center py-20'>
            <SectionTitle title='Try FakeAway for Free' description='FakeAway is a secure ticketing platform that prevents counterfeit tickets and ensures smooth, contactless event entry for your events.' />
            <a href='#' className='mt-4 flex items-center gap-2 rounded-full bg-gray-900 px-8 py-2.5 font-medium text-white transition hover:opacity-90'>
                Try now
                <ArrowRightIcon className='size-5' />
            </a>
        </section>
    );
}
