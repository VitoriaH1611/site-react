import Head from 'next/head'
import Menu from '@/components/Menu'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Foco Ensino</title>
        <meta name="description" content="Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-2.ico" />
      </Head>
      <main>
        
        <Menu/>
        <h1>Bem Vindo Foco Ensino</h1>
        
      </main>
    </>
  )
}
