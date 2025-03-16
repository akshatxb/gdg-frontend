"use client";

import Button from "@/components/Button";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import LogoIcon from '@/assets/images/vercel.svg'

export default function NavBar() {

    const menuContents = ['Home', 'About', 'Guide']
    const menuLinks = ['/', '/about', '/guide']


    return (
        <div className="fixed z-10 flex justify-between items-center w-full px-14 py-7">
            <Logo src={LogoIcon} />
            <NavMenu links={menuLinks as [string, ...string[]]} contents={menuContents as [string, ...string[]]} classnames="ml-40" />
            <div className="">
                <Button content="Contact Us" link="/contact" variant="transparent" size="md" />
                <Button content="Sign In" link="/login" variant="primary" size="md" />
            </div>
        </div>
    )
}