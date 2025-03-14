import clsx from "clsx";
import { Component, forwardRef } from "react";

export type ButtonProps = {
    content: string;
    variant?: 'primary' | 'secondary' | 'transparent' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    as?: React.ElementType;
} & React.ComponentPropsWithoutRef<'button'>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ content, variant = "primary", size = "md", className, as: Component = "button", ...props }, ref) => {

        const variantClasses = {
            primary: "bg-white text-black",
            secondary: "bg-black text-white",
            transparent: "text-white hover:text-gray-300",
            outline: "border-3 border-white text-white",
        };

        const sizeClasses = {
            sm: "px-3 py-2 text-sm",
            md: "px-4 py-3 text-base",
            lg: "px-6 py-4 text-md",
        };


        return (
            <Component
                ref={ref}
                className={clsx("rounded-4xl transition-transform duration-200 cursor-pointer hover:scale-95", variantClasses[variant], sizeClasses[size], className)}
                {...props}>
                {content}
            </Component >
        )
    }
);

export default Button;