'use client';

import Link from "next/link";
import { FaCode } from "react-icons/fa";
import styles from "./NavBar.module.css";
import {useState} from "react";

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={styles.navBar}>
            <div className={styles.logoIcon}>
                <Link href="/">
                    <FaCode size={28} />
                </Link>
            </div>
           <div className={`${styles.menuContainer} ${isMenuOpen? styles.showMenu:""}`}>
               <Link href="/">
                   Home
               </Link>
               <Link href="/about">
                   About
               </Link>
               <Link href="/algorithms-with-js">
                   AlgoJS
               </Link>
               <Link href="/projects">
                   Projects
               </Link>
               <Link href="/machine-coding">
              MachineCoding
               </Link>
               <Link href="/contact">
                   Contact
               </Link>
           </div>
        </nav>
    );
}

export default NavBar;