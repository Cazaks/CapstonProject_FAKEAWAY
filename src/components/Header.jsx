import { MenuIcon, XIcon, ChevronDown, QrCode, Nfc, ShieldCheck, ScanLine, } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ showAutoSwitchButton = true }) {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const links = [
        { name: 'Home', href: '/' },
        {
            name: 'Products',
            subLinks: [
                { name: 'QR Ticketing', href: '/products/qr-tickets', icon: QrCode, description: 'Generate secure, non-copyable QR tickets' },
                { name: 'NFC Ticketing', href: '/products/nfc-tickets', icon: Nfc, description: 'Tap-to-verify NFC tickets for fast entry' },
                { name: 'Anti-Fraud Protection', href: '/products/anti-fraud-protection', icon: ShieldCheck, description: 'Block screenshots, sharing, and reuse' },
                { name: 'Real-Time Verification', href: '/products/real-time-verification', icon: ScanLine, description: 'Instant ticket validation at the gate' },
            ],
        },
        { name: 'Stories', href: '/stories' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Docs', href: '/docs' },
    ];

    return (
        <>
            <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-gray-200/70 bg-black/30 px-4 h-14 md:h-16 lg:h-16 backdrop-blur-md">

                <a
                    href="/"
                    className="inline-flex items-center gap-2"
                >
                    <img
                        src="/assets/logo.svg"
                        alt="logo"
                        className="h-9 w-9 shrink-0 md:h-12 md:w-12"
                    />

                    <span className="text-3xl md:text-4xl font-extrabold text-blue-469 whitespace-nowrap leading-none">
                        FAKEAWAY
                    </span>
                </a>



                <div className='hidden items-center space-x-6 text-white md:flex'>
                    {links.map((link) => link.subLinks ? (
                        <div key={link.name} className='group relative' onMouseEnter={() => setOpenDropdown(link.name)} onMouseLeave={() => setOpenDropdown(null)}>
                            <div className='flex cursor-pointer items-center gap-1 hover:text-black'>
                                {link.name}
                                <ChevronDown className={`mt-px size-4 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                            </div>

                            <div className={`absolute top-6 left-0 z-40 w-lg rounded-md border border-gray-100 bg-white p-3 shadow-lg transition-all duration-200 ease-in-out ${openDropdown === link.name ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'}`}>
                                <p>Explore our tools</p>
                                <div className='mt-3 grid grid-cols-2 gap-2'>
                                    {link.subLinks.map((sub) => (
                                        <a href={sub.href} key={sub.name} className='group/link flex items-center gap-2 rounded-md p-2 transition hover:bg-gray-100'>
                                            <div className='w-max gap-1 rounded-md bg-gray-800 p-2'>
                                                <sub.icon className='size-4.5 text-white transition duration-300 group-hover/link:scale-110' />
                                            </div>
                                            <div>
                                                <p className='font-medium'>{sub.name}</p>
                                                <p className='font-light text-gray-400'>{sub.description}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <a key={link.name} href={link.href} className='transition hover:text-black'>
                            {link.name}
                        </a>
                    ))}
                </div>

                {showAutoSwitchButton && (
                    <Link
                        to="/signup"
                        className="hidden md:inline-block mr-8 rounded-full bg-gray-900 px-4 py-1.5 font-medium text-white transition hover:opacity-90">
                        Sign Up
                    </Link>

                )}


                <button onClick={() => setIsOpen(true)} className='transition active:scale-90 md:hidden'>
                    <MenuIcon className='size-6.5' />
                </button>
            </nav>

            <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-white/20 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {links.map((link) => (
                    <div key={link.name} className='text-center'>
                        {link.subLinks ? (
                            <>
                                <button onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)} className='flex items-center justify-center gap-1 text-gray-800'>
                                    {link.name}
                                    <ChevronDown className={`size-4 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                                </button>
                                {openDropdown === link.name && (
                                    <div className='mt-2 flex flex-col gap-2 text-left text-sm'>
                                        {link.subLinks.map((sub) => (
                                            <a key={sub.name} href={sub.href} className='block text-gray-600 transition hover:text-black' onClick={() => setIsOpen(false)}>
                                                {sub.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <a href={link.href} className='block text-gray-800 transition hover:text-black' onClick={() => setIsOpen(false)}>
                                {link.name}
                            </a>
                        )}
                    </div>
                ))}

                <Link
                    to="/signup"
                    className="rounded-full bg-gray-900 px-4 py-1.5 font-medium text-white transition hover:opacity-90"
                    onClick={() => setIsOpen(false)}
                >
                    Sign Up
                </Link>


                <button onClick={() => setIsOpen(false)} className='rounded-md bg-gray-900 p-2 text-white ring-white active:ring-2'>
                    <XIcon />
                </button>
            </div>
        </>
    );
}
