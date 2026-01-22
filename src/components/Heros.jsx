import { ArrowRightIcon } from 'lucide-react';

export default function Heros() {
    return (
        <div className="flex w-full flex-wrap items-center justify-center bg-gradient-to-b from-orange-500 to-orange-600 py-2 text-center font-medium text-white">
            <p>Secure QR & NFC ticketing for modern events!</p>
            <a href="#" className="ml-3 flex items-center gap-1 rounded-md bg-white px-3 py-1 text-xs text-orange-600 transition hover:bg-slate-200 active:scale-95">
                Check it out
                <ArrowRightIcon className="size-3.5" />
            </a>
        </div>
    );
}
