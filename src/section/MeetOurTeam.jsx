import SectionTitle from '../components/SectionTitle';

export default function MeetOurTeamSection() {
    const data = [
        {
            name: 'Salako Hassan',
            title: 'Backend Developer',
            image: '/assets/team-user-1.png',
        },
        {
            name: 'Caleb Ezak',
            title: 'Full-Stack Developer',
            image: '/assets/team-user-2.png',
        },
        
    ];
    return (
        <section className='flex flex-col items-center justify-center'>
            <SectionTitle title='Meet Our Team' description='Meet our team and see how we secure your events.
We build next-generation tickets that are screenshot-proof, copy-proof, and scan-secure, using advanced QR code and NFC protection.' />
            <div className='mt-12 flex flex-wrap items-center justify-center gap-8'>
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col transition-all duration-300 hover:-translate-y-1'>
                        <img src={item.image} alt='User Image' className='h-64 w-52 object-cover' />
                        <h3 className='mt-2 text-base font-medium'>{item.name}</h3>
                        <p className='text-sm text-gray-500'>{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
