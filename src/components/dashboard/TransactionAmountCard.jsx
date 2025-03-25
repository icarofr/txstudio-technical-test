import { userData } from '../../data/dashboardData';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function TransactionAmountCard() {
    return (
        <div className="bg-white p-4 rounded-lg shadow-xs h-70">
            <h3 className="text-sm text-gray-700 mt-2">Prêt Société</h3>
            <div className="text-5xl font-bold text-gray-800 mt-8 text-center">{userData.loanAmount}</div>
            <p className="text-sm text-gray-500 mt-4 text-center">Montant du prêt en cours</p>

            <div className="mt-8 flex items-center justify-center text-green-600 mx-auto flex-wrap text-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                <span className="text-sm">Prêt validé</span>
            </div>
        </div>
    );
}
