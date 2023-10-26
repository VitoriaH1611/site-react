import styles from '@/components/HomeTop/HomeTop.module.css'


const HomeTop = ()=>{
     
    return(
        <section className={styles.top}>
        <div className={styles.maxWidth}>
            <div className={styles.topContent}>
                <div className={styles.text1}>Temos a solução</div>
                <div className={styles.text2}>que a sua empresa precisa</div>
                <div className={styles.text3}>Podemos ajudar a sua empresa!</div>
                <Link href="/Contato">Entre em Contato</Link>
            </div>
        </div>
    </section>
    )
}

export default HomeTop