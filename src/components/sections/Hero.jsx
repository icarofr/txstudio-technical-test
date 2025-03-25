import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <main className="relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center pt-10 md:pt-20 pb-16 mt-24">

                    {/* Left Content */}
                    <div className="pl-12 w-full md:w-1/2 md:pr-8 mb-10 md:mb-0">
                        <p className="text-xs text-blue-800 font-bold mb-2 uppercase tracking-wide">
                            FINANCEMENT PROFESSIONNEL À COURT TERME.
                        </p>

                        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
                            Notre intérêt,<br />
                            c'est le vôtre.
                        </h1>

                        <p className="text-gray-500 mb-16 text-md">
                            Simple, efficace et rapide. Profitez du service Liqtrade<br />
                            sans garantie personnelle.
                        </p>

                        <div className="flex flex-wrap items-center gap-6">
                            <Link href="/dashboard">
                                <button
                                    type="button"
                                    className="cursor-pointer rounded-md bg-green-500 px-6 py-1.5 text-base font-medium text-white hover:bg-green-600 transition-colors"
                                >
                                    Se connecter
                                </button>
                            </Link>

                            <div className="flex flex-col">
                                <div className="flex items-center text-green-500">
                                    <span className="text-base font-medium">S'inscrire</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 ml-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                                <div className="h-[1px] bg-green-500 w-full mt-1"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right side placeholder to maintain grid */}
                    <div className="hidden md:block md:w-1/2"></div>
                </div>
            </div>

            {/* Right Image with Coins - Using the original implementation */}
            <div className="md:absolute md:top-0 md:right-0 md:h-full md:w-1/2">
                <div className="relative h-[450px] w-full">
                    <Image
                        src="/assets/landing.png"
                        alt="Liqtrade application interface"
                        fill
                        style={{
                            objectFit: 'contain',
                            objectPosition: 'center right'
                        }}
                        priority
                        quality={100}
                    />

                    {/* Background decorative elements */}
                    <div className="absolute -z-10 top-10 right-10 w-40 h-40 rounded-full bg-blue-100 opacity-50"></div>
                    <div className="absolute -z-10 bottom-20 left-10 w-32 h-32 rounded-full bg-blue-100 opacity-50"></div>
                </div>
            </div>
        </main>
    );
}
