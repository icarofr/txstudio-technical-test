export default function ActionButtons() {
    return (
        <div className="ml-4 flex items-center justify-between mb-8">
            <div className="flex space-x-2">
                <button className="px-8 py-2 bg-blue-100 text-blue-900 rounded-md text-xs font-medium">
                    Mes prêts
                </button>
                <button className="px-8 py-2 bg-white text-gray-400 rounded-md text-xs font-medium">
                    Mes factures
                </button>
            </div>
            <button className="px-4 py-2 bg-blue-900 text-white rounded-md text-xs font-bold">
                Demander un financement
            </button>
        </div>
    )
}
