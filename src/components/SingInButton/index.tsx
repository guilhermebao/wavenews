import { FaGoogle } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SingInButton() {
    const isUserLoggedIn = true;
    return isUserLoggedIn ? (
        <button
            type="button"
            className={styles.signInButton}>
            <FaGoogle color="#34a853" />
            Guilherme Báo
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}>
            <FaGoogle color="#eba417" />
            Entrar com Google
        </button>
    )
}