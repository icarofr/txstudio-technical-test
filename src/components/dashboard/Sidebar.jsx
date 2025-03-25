import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image"
import Link from 'next/link';

import {
    HomeIcon,
    ArrowsRightLeftIcon,
    BellIcon,
    Cog6ToothIcon,
    LifebuoyIcon,
    UserIcon
} from '@heroicons/react/24/outline'
import { avatarUrl } from '../../data/dashboardData'
import { classNames } from '../../utils'

const navigationItems = [
    { name: 'Tableau de Bord', href: '#', icon: HomeIcon, current: true },
    { name: 'Mes transactions', href: '#', icon: ArrowsRightLeftIcon, current: false },
    { name: 'Mes clients', href: '#', icon: UserIcon, current: false },
    { name: 'Assistance', href: '#', icon: LifebuoyIcon, current: false },
]

const secondaryNavigation = [
    { name: 'Mes notifications (1)', href: '#', icon: BellIcon, current: false, hasNotification: true },
    { name: 'Réglages', href: '#', icon: Cog6ToothIcon, current: false },
]

export function MobileSidebar({ sidebarOpen, setSidebarOpen }) {
    return (
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
            <DialogBackdrop
                className="fixed inset-0 bg-gray-900/80"
            />
            <div className="fixed inset-0 flex">
                <DialogPanel
                    className="relative mr-16 flex w-full max-w-xs flex-1 flex-col bg-white"
                >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                            type="button"
                            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <span className="sr-only">Close sidebar</span>
                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-y-5 overflow-y-auto px-6 pb-2">
                        <div className="flex h-16 shrink-0 items-center justify-center pt-8 pb-6">
                            <Link href="/">
                                <Image
                                    alt="LiqTrade"
                                    className="cursor-pointer"
                                    src="/assets/liqtrade-logo.png"
                                    width={150}
                                    height={50}
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto"
                                    }} />
                            </Link>
                        </div>

                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="space-y-4">
                                        {navigationItems.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-blue-50 text-blue-800'
                                                            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700',
                                                        'group flex gap-x-3 rounded-md p-3 text-sm font-medium',
                                                    )}
                                                >
                                                    <item.icon
                                                        className={classNames(
                                                            item.current ? 'text-blue-800' : 'text-gray-400 group-hover:text-gray-500',
                                                            'h-6 w-6 shrink-0',
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li>
                                    <ul role="list" className="space-y-4">
                                        {secondaryNavigation.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-blue-50 text-blue-800'
                                                            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700',
                                                        'group flex gap-x-3 rounded-md p-3 text-sm font-medium',
                                                    )}
                                                >
                                                    <div className="relative">
                                                        <item.icon
                                                            className={classNames(
                                                                item.current ? 'text-blue-800' : 'text-gray-400 group-hover:text-gray-500',
                                                                'h-6 w-6 shrink-0',
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                        {item.hasNotification && (
                                                            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-green-500 ring-1 ring-white"></span>
                                                        )}
                                                    </div>
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="mt-auto">
                                    <div className="flex items-center gap-x-4 py-3 px-6 -mx-6 bg-white">
                                        <img
                                            className="h-12 w-12 rounded-full bg-gray-50"
                                            src={avatarUrl}
                                            alt=""
                                        />
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-sm font-medium text-gray-900">Paul Dumartin</p>
                                            <p className="text-xs text-gray-500 truncate">
                                                Statut Vérification KYC : <span className="text-green-500">Valide</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}

export function DesktopSidebar() {
    return (
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
            <div className="flex h-full flex-col bg-white">
                <div className="flex h-16 shrink-0 items-center justify-center pt-8 pb-6">
                    <div className="flex items-center mt-8">
                        <Link href="/">
                            <Image
                                alt="LiqTrade"
                                className="cursor-pointer"
                                src="/assets/liqtrade-logo.png"
                                width={150}
                                height={50}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }} />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-1 flex-col overflow-y-auto mt-7">
                    <nav className="flex-1 space-y-1 px-6 py-4">
                        {navigationItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current
                                        ? 'bg-blue-50 text-blue-800'
                                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700',
                                    'group flex items-center gap-x-3 rounded-md px-3 py-2 text-xs font-medium my-2',
                                )}
                            >
                                <item.icon
                                    className={classNames(
                                        item.current ? 'text-blue-800' : 'text-gray-400 group-hover:text-gray-500',
                                        'h-6 w-6 shrink-0',
                                    )}
                                    aria-hidden="true"
                                />
                                {item.name}
                            </a>
                        ))}

                        <div className="mt-12 space-y-1">
                            {secondaryNavigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? 'bg-blue-50 text-blue-800'
                                            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700',
                                        'group flex gap-x-3 rounded-md p-3 text-xs font-medium my-2',
                                    )}
                                >
                                    <div className="relative">
                                        <item.icon
                                            className={classNames(
                                                item.current ? 'text-blue-800' : 'text-gray-400 group-hover:text-gray-500',
                                                'h-6 w-6 shrink-0',
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.hasNotification && (
                                            <span className="absolute -top-1 -right-0.5 h-2 w-2 rounded-full bg-green-500 ring-1 ring-white"></span>
                                        )}
                                    </div>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </nav>
                </div>

                <div className="flex flex-shrink-0 p-4 m-4">
                    <div className="flex items-center gap-x-4">
                        <img
                            className="h-12 w-12 rounded-full bg-gray-50"
                            src={avatarUrl}
                            alt=""
                        />
                        <div className="min-w-0 flex-auto">
                            <p className="text-xs font-bold text-gray-900">Paul Dumartin</p>
                            <p className="text-[9px] text-gray-500 truncate">
                                Statut Vérification KYC : <span className="text-green-500">Valide</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
