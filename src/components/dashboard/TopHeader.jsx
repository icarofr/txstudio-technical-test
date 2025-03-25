import { Bars3Icon } from '@heroicons/react/24/outline'
import { avatarUrl, userData } from '../../data/dashboardData'

export default function TopHeader({ setSidebarOpen }) {
    return (
        <div className="top-0 z-40 flex items-center justify-between px-6 py-4 lg:px-8">
            <div className="flex items-center gap-x-4 lg:hidden">
                <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700">
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="flex-1 lg:mt-5.5 ml-2">
                <h1 className="text-2xl font-semibold text-gray-900">Bonjour {userData.name.split(" ")[0]} !</h1>
            </div>
            <div>
                <img alt="Profile" src={avatarUrl} className="h-10 w-10 rounded-full" />
            </div>
        </div>
    )
}
