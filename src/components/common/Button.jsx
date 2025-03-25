export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) {
    const variants = {
        primary: "bg-green-500 text-white hover:bg-green-600",
        outline: "border border-green-400 bg-white text-green-500 hover:bg-green-50",
        dark: "bg-gray-900 text-white hover:bg-gray-800",
    };

    const sizes = {
        sm: "px-4 py-1 text-sm",
        md: "px-6 py-1.5 text-sm",
        lg: "px-6 py-3 text-base",
    };

    return (
        <button
            type="button"
            className={`rounded-md font-medium transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
