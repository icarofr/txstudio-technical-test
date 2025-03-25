// FinancialTable.jsx
import { classNames } from "../../utils";

export default function FinancialTable({ data }) {
    return (
        <div className="overflow-x-auto -mx-4 px-4">
            <div className="min-w-[600px]"> {/* Set a minimum width to prevent squishing */}
                {/* Table header */}
                <div className="mt-4 grid grid-cols-6 text-[11px] font-bold text-indigo-800">
                    <div className="pl-3 py-2 col-span-1">Tenor</div>
                    <div className="px-3 py-2 col-span-1">Market Place</div>
                    <div className="px-3 py-2 col-span-1">
                        <div className="whitespace-nowrap">Market Risk Free</div>
                        <div className="text-[10px] font-bold text-indigo-800">Date</div>
                    </div>
                    <div className="px-3 py-2 col-span-1">
                        <div className="whitespace-nowrap">Market Risk Free</div>
                        <div className="text-[10px] font-bold text-indigo-800">Premium</div>
                    </div>
                    <div className="px-3 py-2 col-span-1">Change %</div>
                    <div className="px-3 py-2 col-span-1">Variation</div>
                </div>

                {/* Table rows */}
                {data.map((row, index) => (
                    <div
                        key={index}
                        className={classNames(
                            "grid grid-cols-6 text-xs text-gray-400",
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        )}
                    >
                        <div className="px-3 py-2 col-span-1">{row.tenor}</div>
                        <div className="px-3 py-2 col-span-1">{row.marketPlace}</div>
                        <div className="px-3 py-2 col-span-1">{row.marketRiskFreeDate}</div>
                        <div className="px-3 py-2 col-span-1">{row.marketRiskFreePremium}</div>
                        <div className="px-3 py-2 col-span-1">{row.change}</div>
                        <div className="px-3 py-2 col-span-1">{row.variation}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
