// Navigation items
export const navigationItems = [
    { name: 'Tableau de bord', href: '#', icon: 'HomeIcon', current: true },
    { name: 'Équipe', href: '#', icon: 'UserGroupIcon', current: false },
    { name: 'Aide', href: '#', icon: 'QuestionMarkCircleIcon', current: false },
]

export const secondaryNavigation = [
    { name: 'Paramètres', href: '#', icon: 'Cog6ToothIcon', current: false },
    { name: 'Notifications', href: '#', icon: 'BellIcon', current: false },
    { name: 'Paiements', href: '#', icon: 'CreditCardIcon', current: false },
]

// User data
export const userData = {
    name: 'Paul Dumartin',
    company: 'DUMARTIN SARL',
    segment: 'RET',
    address: {
        street: '14 rue du Louvre',
        city: 'PARIS',
        postalCode: '75001'
    },
    loanAmount: "39 234€",
    closureDate: "13/06/2023",
    riskLevel: 'Risques faible',
    riskPercentage: 60,
    riskRating: 'B',
    riskScoreLabel: 'Lorem Ipsum',
    lastTransactionAmount: '80K'
}

export const financialChartConfig = {
    type: 'line',
    data: {
        labels: ['1', '5', '10', '15', '20', '25'],
        datasets: [
            {
                label: 'Lorem Ipsum',
                data: [10000, 22000, 15000, 29730, 42000, 55000],
                borderColor: '#22c55e',
                backgroundColor: 'rgba(34, 197, 94, 0.05)',
                tension: 0.4,
                fill: true,
                borderWidth: 2,
            },
            {
                label: 'Lorem Ipsum',
                data: [0, 10000, 15000, 20000, 25000, 35000],
                borderColor: '#22c1d6',
                backgroundColor: 'rgba(34, 193, 214, 0)',
                tension: 0.4,
                fill: false,
                borderWidth: 2,
            },
            {
                label: 'Lorem Ipsum',
                data: [2000, 5000, 11000, 7500, 25000, 31000],
                borderColor: '#f97316',
                backgroundColor: 'rgba(249, 115, 22, 0)',
                tension: 0.4,
                fill: false,
                borderWidth: 2,
            }
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false, // Disable default tooltip
            },
        },
        scales: {
            y: {
                min: 0,
                max: 60000,
                ticks: {
                    stepSize: 10000,
                    callback: function (value) {
                        if (value === 0) return '00K';
                        return `${value / 1000}K`;
                    },
                    font: {
                        size: 12,
                        family: 'Inter, system-ui, sans-serif',
                    },
                    color: '#9ca3af',
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                    drawBorder: false,
                },
                border: {
                    display: false,
                }
            },
            x: {
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 12,
                        family: 'Inter, system-ui, sans-serif',
                    },
                    color: '#9ca3af',
                }
            }
        },
        elements: {
            point: {
                radius: 0, // Hide all points by default
                hoverRadius: 0, // No hover radius for default points
            },
            line: {
                borderWidth: 2,
            }
        },
        hover: {
            mode: null, // Disable default hover mode
        },
        animation: false,
    }
};


// Financial tabs
export const financialTabs = [
    { name: 'Euribor1w', current: true },
    { name: 'Euribor2w', current: false },
    { name: 'Euribor3w', current: false },
    { name: 'Average Sector Spread', current: false },
]


// Financial table data
export const financialTableData = [
    { tenor: '7 DAYS', marketPlace: '0.0000', marketRiskFreeDate: '0', marketRiskFreePremium: '0.0000', change: '0.0000', variation: '1' },
    { tenor: '30 DAYS', marketPlace: '0.0000', marketRiskFreeDate: '0', marketRiskFreePremium: '0.0000', change: '0.0000', variation: '9' },
    { tenor: '90 DAYS', marketPlace: '0.0300', marketRiskFreeDate: '0.02345', marketRiskFreePremium: '0.0300', change: '0.0300', variation: '0.02345' },
    { tenor: '180 DAYS', marketPlace: '0.03500', marketRiskFreeDate: '0.03500', marketRiskFreePremium: '0.03500', change: '0.03500', variation: '0.03500' },
    { tenor: '360 DAYS', marketPlace: '0.004400', marketRiskFreeDate: '0.004400', marketRiskFreePremium: '0.004400', change: '0.004400', variation: '0.004400' },
]

// Transaction data
export const transactionData = [
    {
        contract: "CONT-2023-001",
        borrowerId: "BRW-123456",
        requestedAmount: "40 000€",
        loanAmount: "39 234€",
        merchandise: "Prêt Société",
        duration: "12 mois",
        fixedRate: "3.5%",
        commission: "1.2%",
        globalRate: "4.7%",
        requestDate: "01/01/2023",
        lastDueDate: "01/01/2024",
        status: "Validé"
    }
];

export const progressData = {
    openingAgreement: 25,
    requestAgreement: 12,
    riskAssessment: 20,
    payment: 0,
    pdfLink: "Dossier super important.pdf"
};

export const loanTypes = {
    societe: {
        name: "Prêt Société",
        status: "Validé",
        color: "green",
        progress: "100%",
    },
    hotDoggs: {
        name: "Prêt HotDoggs",
        status: "En attente",
        color: "blue",
        progress: "60%",
    }
};

export const closingData = {
    closureDate: "13/06/2022"
};

export const loanOverviewHeaders = [
    { key: 'contractNumber', label: 'Numéro de contrat' },
    { key: 'borrowerId', label: 'Identifiant emprunteur' },
    { key: 'amountRequested', label: 'Montant demandé' },
    { key: 'loanAmount', label: 'Montant du prêt' },
    { key: 'monthlyPayment', label: 'Mensualité' },
    { key: 'duration', label: 'Durée souhaitée' },
];

export const loanDetailsHeaders = [
    { key: 'interestRate', label: 'Taux d\'intérêt' },
    { key: 'commission', label: 'Commission' },
    { key: 'globalEffectRate', label: 'Taux Effet Global' },
    { key: 'requestDate', label: 'Date de la demande' },
    { key: 'dueDate', label: 'Date dernière échéance' },
    { key: 'status', label: 'Statut de la demande' },
];

export const loanData = [
    {
        type: 'Prêt Société',
        contractNumber: '13452789',
        borrowerId: 'UK567UI8',
        amountRequested: '39 234€',
        loanAmount: '39 234€',
        monthlyPayment: '700€',
        duration: '18 mois'
    },
    {
        type: 'Prêt HotDoggs',
        contractNumber: '67547800',
        borrowerId: 'UK567UI8',
        amountRequested: '12 300€',
        loanAmount: 'En attente',
        monthlyPayment: 'En attente',
        duration: '14 mois'
    }
];

export const loanDetailsData = [
    {
        type: 'Prêt Société',
        interestRate: '3%',
        commission: 'Lorem Ipsum',
        globalEffectRate: '3',
        requestDate: '01/11/2019',
        dueDate: '01/04/2022',
        status: 'Validé'
    },
    {
        type: 'Prêt HotDoggs',
        interestRate: '8%',
        commission: 'Lorem Ipsum',
        globalEffectRate: '5',
        requestDate: '04/09/2021',
        dueDate: 'En attente',
        status: 'En attente'
    }
];


export const avatarUrl = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
