import { useRef, useEffect, useState } from 'react';
import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    LineController,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import FinancialTooltip from './FinancialTooltip';

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    LineController,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function FinancialChart({ chartConfig }) {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const chartContainerRef = useRef(null);

    const [hoverTooltip, setHoverTooltip] = useState({
        show: false,
        x: 0,
        y: 0,
        value: '',
        color: '',
    });

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, chartConfig);

            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, 'rgba(209, 213, 219, 0.2)');
            gradient.addColorStop(1, 'rgba(209, 213, 219, 0)');

            setTimeout(() => {
                if (chartInstance.current) {
                    const xPosition = chartInstance.current.scales.x.getPixelForValue(15);
                    const yStart = chartInstance.current.scales.y.getPixelForValue(60000);
                    const yEnd = chartInstance.current.scales.y.getPixelForValue(0);

                    ctx.save();
                    ctx.beginPath();
                    ctx.setLineDash([3, 3]);
                    ctx.strokeStyle = 'rgba(209, 213, 219, 0.8)';
                    ctx.lineWidth = 1;
                    ctx.moveTo(xPosition, yStart);
                    ctx.lineTo(xPosition, yEnd);
                    ctx.stroke();
                    ctx.restore();
                }
            }, 0);
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [chartConfig]);

    const handleMouseMove = (e) => {
        if (!chartInstance.current || !chartContainerRef.current) return;

        const rect = chartContainerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xScale = chartInstance.current.scales.x;
        const yScale = chartInstance.current.scales.y;

        const xValue = xScale.getValueForPixel(x);
        const xIndex = Math.round(xValue);

        if (xIndex >= 0 && xIndex < chartConfig.data.labels.length) {
            let closestDataset = null;
            let closestValue = null;
            let minDistance = Infinity;

            chartConfig.data.datasets.forEach(dataset => {
                const dataValue = dataset.data[xIndex];
                const dataYPixel = yScale.getPixelForValue(dataValue);
                const distance = Math.abs(y - dataYPixel);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestDataset = dataset;
                    closestValue = dataValue;
                }
            });

            if (closestDataset && minDistance < 30) {
                const xPixel = xScale.getValueForPixel(xIndex);
                const yPixel = yScale.getPixelForValue(closestValue);

                setHoverTooltip({
                    show: true,
                    x: xPixel,
                    y: yPixel - 25,
                    value: `${closestValue.toLocaleString()}€`,
                    color: closestDataset.borderColor
                });
            } else {
                setHoverTooltip(prev => ({ ...prev, show: false }));
            }
        }
    };

    const handleMouseLeave = () => {
        setHoverTooltip(prev => ({ ...prev, show: false }));
    };

    return (
        <div className="flex flex-col">
            <div
                ref={chartContainerRef}
                className="relative h-56 w-full"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <canvas ref={chartRef}></canvas>

                {hoverTooltip.show && (
                    <FinancialTooltip
                        x={hoverTooltip.x}
                        y={hoverTooltip.y}
                        value={hoverTooltip.value}
                    />
                )}

                {hoverTooltip.show && (
                    <div
                        className="absolute w-3 h-3 rounded-full border-2 border-white transform -translate-x-1.5 -translate-y-1.5"
                        style={{
                            left: `${hoverTooltip.x}px`,
                            top: `${hoverTooltip.y + 25}px`,
                            backgroundColor: hoverTooltip.color,
                            pointerEvents: 'none',
                            zIndex: 9,
                        }}
                    ></div>
                )}
            </div>

            <div className="flex gap-6 mt-4 px-2 mx-auto">
                {chartConfig.data.datasets.map((dataset, i) => (
                    <div key={i} className="flex items-center">
                        <div
                            className="w-4 h-4 mr-2 rounded-xs"
                            style={{ backgroundColor: dataset.borderColor }}
                        ></div>
                        <span className="text-xs text-gray-700">{dataset.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
