'use client'

import styles from './styles.module.css'

import { useState } from 'react'
import Link from 'next/link'

import { CloseOutlined, MenuOutlined, HomeOutlined, WorkOutlineOutlined, CodeOutlined, LocalPhone } from '@mui/icons-material'

const NavMenu = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleToggleMenu = (): void => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <div className={`${styles.open_menu} ${menuOpen ? styles.close_menu : ''}`}>
                <button onClick={handleToggleMenu}>
                    <MenuOutlined />
                </button>
            </div>
            <div className={`${styles.nav_container} ${menuOpen ? '' : styles.close_menu}`}>
                <button onClick={handleToggleMenu}>
                    <CloseOutlined />
                </button>
                <nav className={styles.nav}>
                    <ul className={styles.menu}>
                        <li>
                            <Link href='/' onClick={handleToggleMenu}>
                                <HomeOutlined />
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='#' onClick={handleToggleMenu}>
                                <CodeOutlined />
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href='#' onClick={handleToggleMenu}>
                                <WorkOutlineOutlined />
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact' onClick={handleToggleMenu}>
                                <LocalPhone />
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavMenu