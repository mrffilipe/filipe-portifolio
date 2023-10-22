import styles from './styles.module.css'

import Link from 'next/link'
import { Icon } from '@mui/material'

type Props = {
    href: string,
    value: string,
    icon: any
}

const LinkButton = (props: Props) => {
    return (
        <Link href={props.href} className={styles.link_btn}>
            <Icon component={props.icon} />
            {props.value}
        </Link>
    )
}

export default LinkButton