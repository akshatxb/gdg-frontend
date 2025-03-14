import clsx from "clsx";
import { forwardRef } from "react";


export type NavMenuProps = {
    contents: [string, ...string[]];
    links: [string, ...string[]];
    classnames?: string;
}

const NavMenu = forwardRef<HTMLDivElement, NavMenuProps>(
    ({ contents, links, classnames, ...props }, ref) => {
        return (
            <div ref={ref} className={clsx("bg-transparent h-fit px-7 py-3 rounded-lg font-medium basefont-medium backdrop-blur-sm shadow-2xl", classnames)} {...props}>
                <ul className="flex justify-center items-center gap-10">
                    {contents.map((content, index) => (
                        <li key={index} className="hover:text-gray-400 transition duration-200 hover:scale-95">
                            <a href={links[index] || '#'}>{content}</a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
)


export default NavMenu