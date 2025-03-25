import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function LinkWithArrow({ href, children, active = false }) {
    return (
        <Link
            href={href}
            className={`flex items-center font-medium ${active ? 'text-green-500' : 'text-gray-400'}`}
        >
            {children}
            <ArrowRightIcon className="h-5 w-5 ml-2" />
        </Link>
    );
}
