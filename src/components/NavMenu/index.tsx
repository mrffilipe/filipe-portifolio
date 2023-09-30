'use client'

import styles from './styles.module.css'

import { useState } from 'react'
import Link from 'next/link'

import { CloseOutlined, HomeOutlined, WorkOutlineOutlined, CodeOutlined, LocalPhone } from '@mui/icons-material'

const NavMenu = () => {
    const [activeMenu, setActiveMenu] = useState<boolean>(true);

    const handleCloseMenu = (): void => {
        setActiveMenu(false);
    }

    const handleOpenMenu = (): void => {
        setActiveMenu(true);
    }

    return (
        <div className={activeMenu ? styles.nav_container : styles.close_menu}>
            <button onClick={handleCloseMenu}>
                <CloseOutlined />
            </button>
            <nav className={styles.nav}>
                <ul className={styles.menu}>
                    <li>
                        <Link href='#'>
                            <HomeOutlined />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href='#'>
                            <CodeOutlined />
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href='#'>
                            <WorkOutlineOutlined />
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href='#'>
                            <LocalPhone />
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavMenu