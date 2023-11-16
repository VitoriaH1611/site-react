import styles from '@/components/ContatoContent/ContatoContent.module.css'
import { FaUserAlt, FaEnvelope } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";






const SobreContent = ()=>{
    return(
    
<div className= { `${styles.column} $ {styles.left }` }>
        <p>Mauris volutpat arcu eu mi volutpat fermentum. Aenean vel dignissim orci. Vestibulum mollis elit vel tellus viverra dictum.</p>
        <div className= {styles.icons}>
            <div className={styles.row}>
                {/* // <i className={styles.fa-solid fa-user}></i> */}
                <i> <FaUserAlt /> </i>
                <div className={styles.info}>
                    <div className={styles.head}>
                        Empresa
                    </div>
                    <div className={styles.subTitle}>
                        Foco
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                {/* // <i className={styles.fa-solid fa-location-dot}></i> */}
                <i> <IoLocationSharp /> </i>
                <div className={styles.info}>
                    <div className={styles.head}>
                        Enderço
                    </div>
                    <div className={styles.subTitle}>
                        Avenida Nove de Julho, 1539
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                {/* // <i className={styles.fa-solid fa-envelope}></i> */}
                <i> <FaEnvelope /></i>
                <div className={styles.info}>
                    <div className={styles.head}>
                        E-mail
                    </div>
                    <div className={styles.subTitle}>
                       focoensinoonline@gmail.com
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    
}

export default SobreContent