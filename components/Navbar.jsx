import Link from 'next/link';
import React from 'react';
import styles from "./Navbar.module.css";


const Navbar = () => {
    return (
        <header>
            <nav className={styles.nav}>
                <p>NextJs</p>

                <ul className={styles.links}>
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <Link href="/about">
                        <li>About</li>
                    </Link>
                    <Link href="/contact">
                        <li>Contact</li>
                    </Link>
                </ul>
            </nav>

        </header>
    )
}

export default Navbar