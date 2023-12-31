import Head from 'next/head'
import Menu from '@/components/Menu'
import SobreContent from '@/components/SobreContent'

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - Foco Ensino</title>
        <meta name="description" content="Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-2.ico" />
      </Head>
      <main>
        
        <Menu/>
       <SobreContent/>
        
      </main>
    </>
  )
}
