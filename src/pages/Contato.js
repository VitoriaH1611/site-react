import Head from 'next/head'
import Menu from '@/components/Menu'
import styles from '@/styles/contactContent.module.css'
import ContatoContent from '@/components/ContatoContent'


export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato - Foco Ensino</title>
        <meta name="description" content="Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-2.ico" />
      </Head>
      <main>
        
        <Menu/>
        <section className= {`${styles.contact} ${styles.content}`}>
        <div className= {styles.maxWidth}>
            <h2 className= {styles.title}>Contato</h2>
            <div className= {styles.contactContent}>

            <ContatoContent/>

              </div>
              </div>
        </section>
        
      </main>
    </>
  )
}
