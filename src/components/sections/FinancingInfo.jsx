import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function FinancingInfo() {
    return (
        <section className="w-full bg-gray-100 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Mobile Nav - Only visible on mobile */}
                <div className="flex md:hidden mb-8 space-x-6 justify-center">
                    <Link href="#" className="flex items-center text-green-500 font-medium">
                        Prêts
                        <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </Link>
                    <Link href="#" className="flex items-center text-gray-400 font-medium">
                        Affacturage
                        <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row">
                    {/* Left Side - Links (desktop only) */}
                    <div className="hidden md:block w-full md:w-1/3 pl-12 pr-0 md:pr-12 mb-10 md:mb-0">
                        <div className="mb-8">
                            <Link href="#" className="flex items-center text-green-500 font-medium">
                                Prêts
                                <ArrowRightIcon className="h-5 w-5 ml-2" />
                            </Link>
                        </div>

                        <div>
                            <Link href="#" className="flex items-center text-gray-400 font-medium">
                                Affacturage
                                <ArrowRightIcon className="h-5 w-5 ml-2" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="w-full text-sm/3.5 md:w-7/12 px-8 md:px-0">
                        <p className="text-gray-800 mb-4">
                            Des taux compétitifs en quelques clics.
                        </p>
                        <p className="text-gray-800 mb-6">
                            Quel que soit votre projet, nous vous accompagnons de manière bienveillante avec les meilleurs
                            outils en ligne. Oubliez le parcours du combattant, à vous le financement professionnel à court
                            terme. Chez Liqtrade nous vous aidons à évoluer à travers des solutions de financement simples,
                            efficaces et compétitives en seulement quelques clics.
                        </p>

                        <p className="font-medium text-gray-800 mb-4">TPE/PME, comptez sur nous pour vous aider à :</p>

                        <ul className="text-gray-500">
                            <li className="mb-2">• Refinancer son entreprise</li>
                            <li className="mb-2">• Ouvrir une nouvelle agence</li>
                            <li className="mb-2">• Faire connaître son entreprise</li>
                            <li className="mb-2">• Se lancer à l'international</li>
                            <li className="mb-2">• Digitaliser son entreprise</li>
                            <li className="mb-2">• Acquérir une entreprise</li>
                            <li className="mb-2">• Transformer son entreprise</li>
                            <li className="mb-2">• Financer des projets de développements durables</li>
                        </ul>

                        <div className="mt-10 md:block flex justify-center">
                            <button
                                type="button"
                                className="rounded-md bg-gray-900 text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
                            >
                                Vidéo de présentation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
