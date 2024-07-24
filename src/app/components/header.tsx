import React from 'react'
import Link from "next/link";
import {Spacer} from "@nextui-org/react";
import styles from "./header.module.sass"

function Header() {
    return (
        <div className={`sticky w-full top-0 z-50 bg-gray-700 h-12`}>
            <nav className={`flex items-center justify-around align-middle h-full`}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/legal/">Imprint</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </div>
    )
}

export default Header