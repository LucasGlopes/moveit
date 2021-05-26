import styles from '../styles/components/Profile.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { useContext } from 'react';

export function Profile(){
    const {level} = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/lucasglopes.png" alt="perfil"/>
            <div>
                <strong>Lucas Gomes</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}