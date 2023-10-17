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
        <div className={`${styles.nav_container} ${menuOpen ? '' : styles.readjust}`}>
            <div className={styles.toggle_menu}>
                <button onClick={handleToggleMenu}>{menuOpen ? <CloseOutlined /> : <MenuOutlined />}</button>
            </div>
            <nav className={`${styles.nav} ${menuOpen ? '' : styles.close_menu}`} >
                <li>
                    <Link href='/' onClick={handleToggleMenu}>
                        <HomeOutlined />
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/projects' onClick={handleToggleMenu}>
                        <CodeOutlined />
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href='/experiencie' onClick={handleToggleMenu}>
                        <WorkOutlineOutlined />
                        Experiencie
                    </Link>
                </li>
                <li>
                    <Link href='/contact' onClick={handleToggleMenu}>
                        <LocalPhone />
                        Contact
                    </Link>
                </li>
            </nav>
        </div >
    )
}

export default NavMenu