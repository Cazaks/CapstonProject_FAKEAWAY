import SectionTitle from '../components/SectionTitle';
import { QrCode, ShieldCheck, ScanLine, Nfc } from 'lucide-react';
export default function HowItWorksSection() {
    const data = [
        {
             title: 'Instant Ticket Verification',
        description: 'Scan QR codes in real-time to confirm tickets are genuine.',
        icon: QrCode,
        },
        {
            title: 'Secure Anti-Counterfeit System',
        description: 'Protect events from fake tickets using blockchain & unique codes.',
        icon: ShieldCheck,
        },
        {
            title: 'Monitor Event Entry',
        description: 'Track who enters and exits with seamless logging for security.',
        icon: ScanLine,

        },
        {
            title: 'Smart NFC Integration',
        description: 'Enable contactless entry with NFC-enabled devices for smooth access.',
        icon: Nfc,
        },
    ];
    return (
        <section className='flex flex-col items-center justify-center'>
            <SectionTitle title='How It Works' description='FakeAway is a secure ticketing platform that helps you create fraud-proof tickets using QR codes and NFC technology, making every ticket easy to verify and impossible to duplicate.'/>

            <div className='mt-20 flex flex-wrap items-center justify-center gap-10'>
                {data.map((item, index) => (
                    <div key={index} className='rounded-[14px] bg-gray-200/80 p-0.5 pt-4 transition-all duration-300 hover:-translate-y-1'>
                        <div className='relative flex max-w-80 flex-col items-center rounded-xl bg-white p-6 pb-10'>
                            <div className='absolute -top-6 rounded-full bg-gray-800 p-3'>
                                <item.icon className='size-6 text-white' />
                            </div>
                            <h3 className='mt-10 text-center text-base font-medium'>{item.title}</h3>
                            <p className='mt-6 text-center text-gray-500'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
