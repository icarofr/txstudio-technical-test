import Link from 'next/link';

export default function NavLink({ href, children }) {
    return (
        <Link
            href={href}
            className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-800 hover:text-gray-600"
        >
            {children}
        </Link>
    );
}
