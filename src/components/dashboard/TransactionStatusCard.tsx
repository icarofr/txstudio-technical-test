import { loanTypes } from '../../data/dashboardData';
import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function TransactionStatusCard() {
    return (
        <div className="bg-white p-4 rounded-lg shadow-xs h-70">
            <h3 className="text-sm text-gray-700 mt-2">État</h3>
            <div className="space-y-2 mt-6">
                <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-500">{loanTypes.societe.name}</span>
                    <span className="text-green-800 text-sm pl-2 py-0.5 flex items-center">
                        {loanTypes.societe.status}
                        <CheckCircleIcon className="h-3.5 w-3.5 ml-1" />
                    </span>
                </div>
                
                {/* Progress bar for Prêt Société - green */}
                <div className="w-full bg-gray-200 rounded-full h-2 grow">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: loanTypes.societe.progress }}></div>
                </div>
                
                <div className="flex justify-between items-center mt-8">
                    <span className="text-sm font-bold text-gray-500">{loanTypes.hotDoggs.name}</span>
                    <span className="text-blue-900 text-sm pl-2 py-0.5 flex items-center">
                        {loanTypes.hotDoggs.status}
                        <ClockIcon className="h-3.5 w-3.5 ml-1" />
                    </span>
                </div>
                
                {/* Progress bar for Prêt HotDogges - blue */}
                <div className="w-full bg-gray-200 rounded-full h-2 grow">
                    <div className="bg-blue-900 h-2 rounded-full" style={{ width: loanTypes.hotDoggs.progress}}></div>
                </div>
                
                <div className="mt-8 w-full flex">
                    <a href="#" className="mx-auto underline text-center text-xs px-3 py-1.5 w-full text-gray-700 hover:bg-gray-50">
                        Créer un nouveau dossier
                    </a>
                </div>
            </div>
        </div>
    );
}
