import { userData } from '../../data/dashboardData'
import { PencilIcon } from '@heroicons/react/24/solid'
import RiskScore from './RiskScore'
import Image from 'next/image'

export default function AccountSection() {
    return (
        <div className="mb-8">
            <h2 className="text-md font-semibold text-gray-900 mb-4">Mon compte</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

                <div className="bg-white p-4 rounded-lg shadow-sm relative h-full flex flex-col justify-end">
                    <div className="absolute top-4 right-4">
                        <button className="bg-gray-100 p-1.5 rounded-md">
                            <PencilIcon className="h-4 w-4 text-gray-600" />
                        </button>
                    </div>
                    <div className="mt-auto">
                        <h3 className="text-sm font-semibold text-gray-900">{userData.name}</h3>
                        <p className="text-xs text-gray-500 mt-1">{userData.address.street}</p>
                        <p className="text-xs text-gray-500">{userData.address.city} {userData.address.postalCode}</p>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col">
                    <p className="text-xs text-gray-500">Segment</p>
                    <div className="flex-grow flex justify-end items-end">
                        <span className="text-2xl font-bold text-indigo-900">{userData.segment}</span>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col">
                    <div>
                        <p className="text-xs text-gray-500">Évaluation des risques</p>
                        <p className="text-xs text-green-500 font-medium">{userData.riskLevel}</p>
                    </div>
                    <div className="flex-grow flex justify-end items-end">
                        <span className="text-5xl font-bold text-green-500">{userData.riskRating}</span>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col">
                    <div className="mb-auto">
                        <p className="text-xs text-gray-500">Score risque</p>
                        <p className="text-sm font-semibold text-gray-900">{userData.riskScoreLabel}</p>
                    </div>
                    <div className="mt-4">
                        <RiskScore value={userData.riskPercentage} />
                    </div>
                </div>

                <div className="bg-white pt-5 pl-5 pr-1 rounded-lg shadow-sm flex flex-col">
                    <p className="text-xs text-gray-500">Montant dernière transaction</p>
                    <div className="flex-grow flex justify-between">
                        <span className="text-2xl font-bold text-indigo-900">{userData.lastTransactionAmount}</span>
                    </div>
                    <div className="relative h-12 w-12 mt-auto self-end">
                        <Image
                            src="/assets/coin.png"
                            alt="Currency"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
