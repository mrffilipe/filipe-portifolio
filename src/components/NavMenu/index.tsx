'use client'

import styles from './styles.module.css'

import { useState } from 'react'
import Link from 'next/link'

import {
    CloseOutlined,
    MenuOutlined,
    PersonOutline,
    CodeOutlined,
    LocalPhone
} from '@mui/icons-material'

const NavMenu = () => {
    const [showMenu, setShowMenu] = useState<boolean>();

    const handleToggleMenu = (): void => {
        setShowMenu(!showMenu)
    }

    return (
        <div className={styles.nav_container}>
            <div className={styles.header_menu}>
                <button onClick={handleToggleMenu}>
                    {showMenu ? <CloseOutlined /> : <MenuOutlined />}
                </button>
                <h3>Filipe Ferracioli</h3>
            </div>
            <nav className={`${styles.nav} ${showMenu ? '' : styles.close_menu}`}>
                <ul>
                    <li>
                        <Link href='/' onClick={handleToggleMenu}>
                            <PersonOutline />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href='/portifolio' onClick={handleToggleMenu}>
                            <CodeOutlined />
                            Portifolio
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
    )
}

export default NavMenu