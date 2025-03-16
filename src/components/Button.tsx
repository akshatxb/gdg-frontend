"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { forwardRef } from "react";

export type ButtonProps = {
    content: string;
    link?: string;
    variant?: 'primary' | 'secondary' | 'transparent' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
} & React.ComponentPropsWithoutRef<'button'>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ content, link = '#', variant = "primary", size = "md", className, ...props }, ref) => {

        const router = useRouter();

        const variantClasses = {
            primary: "bg-white text-black ",
            secondary: "bg-black text-white disabled:bg-black/70",
            transparent: "text-white hover:text-gray-300",
            outline: "border-3 border-white text-white",
        };

        const sizeClasses = {
            sm: "px-3 py-2 text-sm",
            md: "px-6 py-4 text-base",
            lg: "px-6 py-4 text-lg",
        };

        const handleClick = () => {
            router.push(link)
        }

        return (
            <button
                ref={ref}
                onClick={handleClick}
                className={clsx("rounded-4xl transition-transform duration-200 cursor-pointer hover:scale-95 disabled:scale-90", variantClasses[variant], sizeClasses[size], className)}
                {...props}>
                {content}
            </button >
        )
    }
);

Button.displayName = 'Button'

export default Button;