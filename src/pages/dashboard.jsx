import { useState } from 'react'
import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

import { MobileSidebar, DesktopSidebar } from '../components/dashboard/Sidebar'
import TopHeader from '../components/dashboard/TopHeader'
import ActionButtons from '../components/dashboard/ActionButtons'
import AccountSection from '../components/dashboard/AccountSection'
import FinancialSection from '../components/dashboard/FinancialSection'
import TransactionSection from '../components/dashboard/TransactionSection'

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="h-full bg-gray-100 lg:pr-18">
            <MobileSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <DesktopSidebar />

            <div className="lg:pl-72">
                <TopHeader setSidebarOpen={setSidebarOpen} />

                <main className="p-6">
                    <ActionButtons />
                    <AccountSection />
                    <FinancialSection />
                    <TransactionSection />
                </main>
            </div>
        </div>
    )
}
