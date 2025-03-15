import clsx from "clsx";
import Link from "next/link";
import { Component, forwardRef } from "react";

export type ButtonProps = {
    content: string;
    link: string;
    variant?: 'primary' | 'secondary' | 'transparent' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    as?: React.ElementType;
} & React.ComponentPropsWithoutRef<'button'>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ content, link, variant = "primary", size = "md", className, as: Component = "button", ...props }, ref) => {

        const variantClasses = {
            primary: "bg-white text-black",
            secondary: "bg-black text-white",
            transparent: "text-white hover:text-gray-300",
            outline: "border-3 border-white text-white",
        };

        const sizeClasses = {
            sm: "px-3 py-2 text-sm",
            md: "px-6 py-4 text-base",
            lg: "px-6 py-4 text-lg",
        };


        return (
            <Component
                ref={ref}
                className={clsx("rounded-4xl transition-transform duration-200 cursor-pointer hover:scale-95", variantClasses[variant], sizeClasses[size], className)}
                {...props}>
                <Link href={link || "#"}>{content}</Link>
            </Component >
        )
    }
);

export default Button;