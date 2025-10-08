function Question({ text, onClick, disabled = false, isActive = false }) {
    const handleClick = (e) => {
        if (!disabled) {
            onClick?.(e);
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className={`
                relative rounded-[12px] px-4 py-2.5 text-right text-white font-medium
                transition-all duration-200 transform
                min-w-[120px] sm:min-w-[140px] max-w-full
                whitespace-nowrap overflow-hidden text-ellipsis
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400
                ${disabled
                    ? 'bg-gray-400 cursor-not-allowed opacity-70'
                    : isActive
                        ? 'bg-purple-600 shadow-md scale-105'
                        : 'bg-primary-500 hover:bg-primary-600 active:scale-95 shadow-sm hover:shadow-md'
                }
            `}
            aria-label={text}
            role="button"
        >
            {text}

            {/* Optional: subtle ripple effect on click */}
            {!disabled && (
                <span className="absolute inset-0 rounded-[12px] opacity-0 hover:opacity-20 bg-white transition-opacity pointer-events-none"></span>
            )}
        </button>
    );
}

export default Question;