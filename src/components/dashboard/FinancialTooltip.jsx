export default function FinancialTooltip({ x, y, value, arrowPosition = 'bottom' }) {
    return (
        <div
            className="absolute bg-gray-900 text-white text-xs px-2 py-1 rounded transform -translate-x-1/2"
            style={{
                left: `${x}px`,
                top: `${y}px`,
                pointerEvents: 'none',
                filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.05))',
                zIndex: 10,
            }}
        >
            {value}
            <div
                className="absolute w-2 h-2 bg-gray-900 transform rotate-45 -translate-x-1/2"
                style={{
                    [arrowPosition]: '-4px',
                    left: '50%',
                }}
            />
        </div>
    );
}
