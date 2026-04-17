import { Link} from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

export default function Heros() {
    return (
        <div className="flex w-full flex-wrap items-center justify-center gap-5 bg-gradient-to-b from-orange-500 to-orange-600 py-2 text-center font-medium text-white">
            <p>Secure QR & NFC ticketing for modern events!</p>
            <Link
  to="/signup"
  className="hidden rounded-full bg-gray-900 px-4 py-2.5 font-medium text-white transition hover:opacity-90 md:inline-block"
>
  Check it out! <ArrowRightIcon className="inline-block size-4 ml-1" />
</Link>
        </div>
    );
}