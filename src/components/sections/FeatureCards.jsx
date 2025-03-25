import React from 'react';
import {
    CheckIcon,
} from '@heroicons/react/24/solid';
import {
    CurrencyDollarIcon,
    QuestionMarkCircleIcon,
    ClockIcon,
} from '@heroicons/react/24/outline';
import FeatureCard from '../common/FeatureCard';

export default function FeatureCards() {
    const features = [
        {
            icon: <CheckIcon className="h-6 w-6 text-green-500" />,
            title: "Evaluation du profil de risque de votre client",
            description: "Plus de mauvaises surprises lors de la facturation de votre client. Chez Liqtrade, nous évaluons son risque débiteur afin de permettre la valorisation et l'acceptation rapide de votre facture. Notre approche se base sur le profil de risque de votre client et l'échéance de votre facture pour vous proposer le meilleur prix de cession de votre créance.",
            bgColor: "bg-green-100",
        },
        {
            icon: <CurrencyDollarIcon className="h-6 w-6 text-violet-300" />,
            title: "Meilleur prix de cession de votre créance",
            description: "Nos algorithmes trouvent pour vous la meilleure offre de financement en termes de prix et de taux de commission. En moyenne, nos clients perçoivent jusqu'à 97 % de la valeur nominale de leur facture.",
            bgColor: "bg-violet-100",
        },
        {
            icon: <ClockIcon className="h-6 w-6 text-cyan-500" />,
            title: "Paiement en un temps record pour vos factures",
            description: "Après validation et financement de votre facture, votre paiement est transféré en seulement quelques minutes. Grâce à notre plateforme de paiement, bénéficiez de nouvelles fonctionnalités de paiement instantané vous permettant un virement rapide vers la Banque de votre choix.",
            bgColor: "bg-cyan-100",
        },
        {
            icon: <QuestionMarkCircleIcon className="h-6 w-6 text-orange-500" />,
            title: "Financez vos besoins de trésorerie en temps réel",
            description: "Faites une demande de financement en ligne via l'envoi électronique de facture et obtenez plus rapidement vos fonds via un traitement automatisé de vos demandes. Vos factures sont ainsi valorisées, validées automatiquement et financées sur notre plateforme.",
            bgColor: "bg-orange-100",
        }
    ];

    return (
        <section className="w-full bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-12 md:pl-12 pr-12 md:pr-0">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            bgColor={feature.bgColor}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
