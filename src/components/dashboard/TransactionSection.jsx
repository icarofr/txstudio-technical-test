import { useState } from 'react';
import { classNames } from '../../utils';
import TransactionStatusCard from './TransactionStatusCard';
import TransactionAmountCard from './TransactionAmountCard';
import TransactionProgressCard from './TransactionProgressCard';
import TransactionTrophyCard from './TransactionTrophyCard';
import TransactionTable from './TransactionTable';
import { loanOverviewHeaders, loanData, loanDetailsHeaders, loanDetailsData } from '../../data/dashboardData';

export default function TransactionSection() {
    const [activeTab, setActiveTab] = useState('Actifs');

    return (
        <div>
            <h2 className="text-md font-semibold text-gray-900 mb-4">Transactions</h2>

            <div className="flex mb-4 rounded-md bg-white max-w-md">
                <button
                    className={classNames(
                        'px-3 sm:px-6 py-2 text-sm font-medium whitespace-nowrap flex-1',
                        activeTab === 'Actifs'
                            ? 'bg-green-500 text-white rounded-md'
                            : 'text-gray-500'
                    )}
                    onClick={() => setActiveTab('Actifs')}
                >
                    Actifs
                </button>
                <button
                    className={classNames(
                        'px-3 sm:px-6 py-2 text-sm font-medium whitespace-nowrap flex-1',
                        activeTab === 'En attente (1)'
                            ? 'bg-green-500 text-white rounded-md'
                            : 'text-gray-500'
                    )}
                    onClick={() => setActiveTab('En attente (1)')}
                >
                    En attente (1)
                </button>
                <button
                    className={classNames(
                        'px-3 sm:px-6 py-2 text-sm font-medium whitespace-nowrap flex-1',
                        activeTab === 'Clos'
                            ? 'bg-green-500 text-white rounded-md'
                            : 'text-gray-500'
                    )}
                    onClick={() => setActiveTab('Clos')}
                >
                    Clos
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
                <div className="sm:col-span-1 xl:col-span-1">
                    <TransactionStatusCard />
                </div>
                <div className="sm:col-span-1 xl:col-span-1">
                    <TransactionAmountCard />
                </div>

                <div className="sm:col-span-1 xl:col-span-1">
                    <TransactionProgressCard />
                </div>
                <div className="sm:col-span-1 xl:col-span-1">
                    <TransactionTrophyCard />
                </div>
            </div>

            <div className="mb-6">
                <TransactionTable
                    headers={loanOverviewHeaders}
                    data={loanData}
                    type="overview"
                />
            </div>

            <TransactionTable
                headers={loanDetailsHeaders}
                data={loanDetailsData}
                type="details"
            />
        </div>
    );
}
