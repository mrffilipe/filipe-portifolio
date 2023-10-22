import styles from './styles.module.css'

import Link from 'next/link'
import Image from 'next/image'

import LinkedinSvg from '@/assets/svg/linkedin.svg'
import GithubSvg from '@/assets/svg/github.svg'

const Links = () => {
    return (
        <div className={styles.links}>
            <Link href="https://www.linkedin.com/in/filipemrf/" target='_blank'>
                <Image src={LinkedinSvg} alt="Linkedin icons8" />
            </Link>
            <Link href="https://github.com/mrffilipe" target='_blank'>
                <Image src={GithubSvg} alt="GitHub icons8" />
            </Link>
        </div>
    )
}

export default Links