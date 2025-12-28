import React from 'react';
import { cn } from '../../lib/utils';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
    const variants = {
        primary: 'bg-deep-black text-white shadow-lg hover:bg-opacity-90',
        secondary: 'bg-white text-slate-900 shadow-sm border border-gray-200/50 hover:bg-gray-50',
        ghost: 'bg-transparent text-slate-600 hover:bg-gray-100/50',
        outline: 'bg-transparent border border-gray-300 text-slate-700 hover:bg-gray-50'
    };

    const sizes = {
        default: 'h-12 px-6 text-base',
        sm: 'h-9 px-4 text-sm',
        lg: 'h-14 px-8 text-lg',
        icon: 'h-10 w-10 p-2 flex items-center justify-center'
    };

    return (
        <button
            ref={ref}
            className={cn(
                'inline-flex items-center justify-center rounded-ios-md font-medium transition-all duration-200',
                'active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2',
                'disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export { Button };
