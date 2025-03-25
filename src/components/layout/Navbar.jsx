import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image"

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-white shadow-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between items-center">
                    <div className="flex items-center">
                        <div className="mr-2 -ml-2 flex items-center md:hidden">
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                            </DisclosureButton>
                        </div>
                        <div className="flex shrink-0 items-center">
                            <Image
                                alt="LiqTrade"
                                src="/assets/liqtrade-logo.png"
                                width={150}
                                height={50}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }} />
                        </div>
                        <div className="hidden md:ml-10 md:flex md:space-x-8">
                            <a
                                href="#"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-800 hover:text-gray-600"
                            >
                                Prêt
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-800 hover:text-gray-600"
                            >
                                Affacturage
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="hidden md:flex md:items-center md:space-x-6">
                            <a
                                href="#"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-800 hover:text-gray-600"
                            >
                                Simulateur
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-800 hover:text-gray-600"
                            >
                                Contact
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-800 hover:text-gray-600"
                            >
                                Publications
                            </a>
                            <div className="flex ml-6 space-x-2">
                                <button
                                    type="button"
                                    className="rounded-lg border border-green-400 bg-white px-7 py-1.5 text-sm font-medium text-green-500 hover:bg-green-50"
                                >
                                    S'inscrire
                                </button>
                                <button
                                    type="button"
                                    className="rounded-lg bg-green-500 px-7 py-1.5 text-sm font-medium text-white hover:bg-green-600"
                                >
                                    Se connecter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DisclosurePanel className="md:hidden">
                <div className="space-y-1 pt-2 pb-3">
                    <DisclosureButton
                        as="a"
                        href="#"
                        className="block py-2 px-4 text-base font-medium text-gray-800 hover:bg-gray-50"
                    >
                        Prêt
                    </DisclosureButton>
                    <DisclosureButton
                        as="a"
                        href="#"
                        className="block py-2 px-4 text-base font-medium text-gray-800 hover:bg-gray-50"
                    >
                        Affacturage
                    </DisclosureButton>
                    <DisclosureButton
                        as="a"
                        href="#"
                        className="block py-2 px-4 text-base font-medium text-gray-800 hover:bg-gray-50"
                    >
                        Simulateur
                    </DisclosureButton>
                    <DisclosureButton
                        as="a"
                        href="#"
                        className="block py-2 px-4 text-base font-medium text-gray-800 hover:bg-gray-50"
                    >
                        Contact
                    </DisclosureButton>
                    <DisclosureButton
                        as="a"
                        href="#"
                        className="block py-2 px-4 text-base font-medium text-gray-800 hover:bg-gray-50"
                    >
                        Publications
                    </DisclosureButton>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                    <div className="flex justify-center space-x-2 px-4">
                        <button
                            type="button"
                            className="rounded-md border border-green-400 bg-white px-5 py-1.5 text-sm font-medium text-green-500 hover:bg-green-50"
                        >
                            S'inscrire
                        </button>
                        <button
                            type="button"
                            className="rounded-md bg-green-500 px-5 py-1.5 text-sm font-medium text-white hover:bg-green-600"
                        >
                            Se connecter
                        </button>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
