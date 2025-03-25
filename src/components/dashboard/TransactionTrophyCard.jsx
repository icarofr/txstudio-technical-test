import Image from 'next/image';
import { closingData } from '../../data/dashboardData';

export default function TransactionTrophyCard() {
    return (
        <div className="bg-white p-4 rounded-lg shadow-xs h-70">
            <h3 className="text-sm text-gray-700 mt-2">Cloturé</h3>

            <div className="flex items-center justify-center -mt-8">
                <Image src="/assets/trophy.png" alt="trophy" width={120} height={120} />
            </div>

            <p className="text-xs/3 text-gray-900 mt-1.5 font-bold">Prêt Société</p>
            <p className="text-xs/4 text-gray-500 mt-1">Estimation de clôture du dossier au :</p>
            <p className="text-xs/3 text-gray-500 mt-1 font-bold">{closingData.closureDate}</p>
        </div>
    );
}