import React from 'react'
import styles from './style.module.css'
import { Link } from 'gatsby'

const Header = ({ title = 'Galeria de Imagens'}) => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}><Link to="/">{title}</Link></h1>
        </div>
    )
}

export default Header