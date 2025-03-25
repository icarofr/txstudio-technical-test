import { classNames } from "../../utils";

export default function FinancialTabs({ tabs, selectedTab, onTabChange }) {
    return (
        <div className="mt-8 flex overflow-x-auto">
            {tabs.map((tab) => (
                <button
                    key={tab.name}
                    className={classNames(
                        'px-4 py-2 text-xs whitespace-nowrap flex-1 rounded-sm',
                        selectedTab === tab.name
                            ? 'bg-indigo-100 text-indigo-800 font-medium'
                            : 'text-gray-500 hover:bg-gray-50 bg-gray-50'
                    )}
                    onClick={() => onTabChange(tab.name)}
                >
                    {tab.name}
                </button>
            ))}
        </div>
    );
}
