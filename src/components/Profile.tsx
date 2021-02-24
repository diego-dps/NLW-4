import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/diego-dps.png" alt="Diego Pereira" />
            <div>
                <strong>Diego Pereira</strong>
                <p>Level 1</p>
            </div>
        </div>
    )
}