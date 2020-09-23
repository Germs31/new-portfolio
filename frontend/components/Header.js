import Link from 'next/link'
import Logo from '../images/np_logo.png'
import styles from '../styles/Header.module.css'
import { useState } from 'react'
const Header = () => {
    const [ openNav, setOpenNav ] = useState(false)

    const navbarOpen = () => {
        setOpenNav(!openNav)
    }
    return(
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={Logo}/>
                <p>German Nunez</p>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                    <Link href="/blog">
                        <a>Projects</a>
                    </Link>
                    <Link href="/blog">
                        <a>About Me</a>
                    </Link>
                    <Link href="/blog">
                        <a>Contact</a>
                    </Link>
                </ul>
            </nav>
            <div onClick={navbarOpen} className={styles.hamburgerContainer}>
                <div className={styles.hamburger}/>
                <div className={styles.hamburger}/>
                <div className={styles.hamburger}/>
            </div>

            <MobileOverLay openNav={openNav}/>
        </header>
    )
}

const MobileOverLay = ({openNav}) => {
    return (
        <div className={openNav ? styles.mobileOverlay : null}>
            <ul>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
                <Link href="/blog">
                    <a>Projects</a>
                </Link>
                <Link href="/blog">
                    <a>About Me</a>
                </Link>
                <Link href="/blog">
                    <a>Contact</a>
                </Link>
            </ul>
        </div>
    )
}

export default Header;