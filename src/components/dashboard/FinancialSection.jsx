// FinancialSection.jsx
import { useState } from 'react';
import { financialChartConfig, financialTableData, financialTabs } from '../../data/dashboardData';
import FinancialChart from './FinancialChart';
import FinancialTabs from './FinancialTabs';
import FinancialTable from './FinancialTable';

export default function FinancialSection() {
    const [selectedTab, setSelectedTab] = useState(financialTabs[0].name);

    return (
        <div className="mb-6">
            <h2 className="text-md font-semibold text-gray-900 mb-4">Informations financières</h2>

            <div className="grid grid-cols-1 xl:grid-cols-5 gap-3">
                {/* Chart section - narrower (2/5) on desktop only */}
                <div className="bg-white px-4 pt-4 pb-8 rounded-lg shadow-sm xl:col-span-2">
                    <FinancialChart chartConfig={financialChartConfig} />
                </div>

                {/* Financial data table - wider (3/5) on desktop only */}
                <div className="bg-white px-4 pb-8 shadow-sm rounded-lg xl:col-span-3">
                    {/* Tabs */}
                    <FinancialTabs
                        tabs={financialTabs}
                        selectedTab={selectedTab}
                        onTabChange={setSelectedTab}
                    />

                    {/* Table */}
                    <FinancialTable data={financialTableData} />
                </div>
            </div>
        </div>
    );
}
