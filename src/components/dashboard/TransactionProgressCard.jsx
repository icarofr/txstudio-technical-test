import { progressData } from '../../data/dashboardData';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

export default function TransactionProgressCard() {
    // Calculate the circumference of the circle
    const radius = 16;
    const circumference = 2 * Math.PI * radius;

    // Calculate stroke dash offsets
    const greenOffset = 0;
    const yellowOffset = (progressData.openingAgreement / 100) * circumference;
    const blueOffset = yellowOffset + (progressData.requestAgreement / 100) * circumference;

    // Colors from the financial chart config
    const greenColor = "#22c55e";  // First Lorem Ipsum color
    const cyanColor = "#22c1d6";   // Second Lorem Ipsum color
    const orangeColor = "#f97316"; // Third Lorem Ipsum color

    // Custom checkmark SVG path
    const checkmarkPath = "M3 6.5l2 2L9 4";

    return (
        <div className="bg-white p-4 rounded-lg shadow-xs h-70">
            <div className='flex justify-between'>
                <h3 className="text-sm text-gray-700 mt-2">En attente</h3>
                <h3 className="text-sm text-gray-400 font-bold mt-2">Prêt HotDoggs</h3>
            </div>
            <div className='grid grid-cols-2'>
                <div className="flex justify-center mb-4 overflow-visible">
                    {/* Circular progress chart using SVG */}
                    <div className="relative h-20 w-20 mt-6 overflow-visible -ml-3 grow-lg" style={{ transform: 'scale(1.2)' }}>
                        <svg viewBox="0 0 36 36" className="h-full w-full overflow-visible" style={{ transform: 'rotate(120deg)' }}>
                            {/* Background circle */}
                            <circle cx="18" cy="18" r="16" fill="none" stroke="#E5E7EB" strokeWidth="6" />

                            {/* Green segment */}
                            <circle
                                cx="18" cy="18" r="16"
                                fill="none"
                                stroke={greenColor}
                                strokeWidth="6"
                                strokeDasharray={`${(progressData.openingAgreement / 100) * circumference} ${circumference}`}
                                strokeDashoffset="0"
                                transform="rotate(0 18 18)"
                            />

                            {/* Orange segment */}
                            <circle
                                cx="18" cy="18" r="16"
                                fill="none"
                                stroke={orangeColor}
                                strokeWidth="6"
                                strokeDasharray={`${(progressData.requestAgreement / 100) * circumference} ${circumference}`}
                                strokeDashoffset={`${-yellowOffset}`}
                                transform="rotate(0 18 18)"
                            />

                            {/* Cyan segment */}
                            <circle
                                cx="18" cy="18" r="16"
                                fill="none"
                                stroke={cyanColor}
                                strokeWidth="6"
                                strokeDasharray={`${(progressData.riskAssessment / 100) * circumference} ${circumference}`}
                                strokeDashoffset={`${-blueOffset}`}
                                transform="rotate(0 18 18)"
                            />
                        </svg>
                    </div>
                </div>

                <ul className='text-xs flex flex-col justify-center'>
                    {/* First checkbox */}
                    <li className="flex items-center">
                        <div className="w-4 h-4 rounded flex-shrink-0 flex items-center justify-center mr-1.5" style={{ backgroundColor: greenColor }}>
                            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                                style={{ flexShrink: 0, minWidth: '11px', minHeight: '11px' }}>
                                <path d={checkmarkPath} stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="text-[10px] text-gray-700">Accord ouverture</span>
                    </li>

                    {/* Second checkbox */}
                    <li className="flex items-center mt-1.5">
                        <div className="w-4 h-4 rounded flex-shrink-0 flex items-center justify-center mr-1.5" style={{ backgroundColor: orangeColor }}>
                            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                                style={{ flexShrink: 0, minWidth: '11px', minHeight: '11px' }}>
                                <path d={checkmarkPath} stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="text-[10px] text-gray-700">Accord demande</span>
                    </li>

                    {/* Third checkbox */}
                    <li className="flex items-center mt-1.5">
                        <div className="w-4 h-4 rounded flex-shrink-0 flex items-center justify-center mr-1.5" style={{ backgroundColor: cyanColor }}>
                            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                                style={{ flexShrink: 0, minWidth: '11px', minHeight: '11px' }}>
                                <path d={checkmarkPath} stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="text-[10px]/3 text-gray-700">Évaluation des risques</span>
                    </li>
                </ul>

            </div>
            <div className="mt-4 text-xs text-gray-500">
                <p>Pour démarrer la prochaine étape de validation, veuillez nous joindre :</p>
                <div className="flex items-center mt-4 text-gray-400">
                    <DocumentArrowDownIcon className="h-4 w-4 mr-1" />
                    <a href="#" className="hover:underline">{progressData.pdfLink}</a>
                </div>
            </div>
        </div>
    );
}
