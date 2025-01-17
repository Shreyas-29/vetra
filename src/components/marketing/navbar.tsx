import React from "react"
import Wrapper from "../global/wrapper";
import Link from "next/link";
import Icons from "../global/icons";
import { NAV_LINKS } from "@/constants";
import { Button } from "../ui/button";

const Navbar = () => {
    return (
        <header className="sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50">
            <Wrapper className="h-full">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <Icons.icon className="w-6" />
                            <span className="text-xl font-semibold hidden lg:block">
                                Vetra
                            </span>
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <ul className="flex items-center gap-8">
                            {NAV_LINKS.map((link, index) => (
                                <li key={index} className="text-sm font-medium -1 link">
                                    <Link href={link.href}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center gap-2">
                        <Link href="/auth/signup">
                            <Button variant="blue">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </header>
    )
};

export default Navbar
