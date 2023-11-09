import Head from 'next/head'
import Menu from '@/components/Menu'
import HomeTop from '@/components/HomeTop'
import HomeServ from '@/components/HomeServ'
import HomePriv from '@/components/HomePrim'
import SobreContent from '@/components/SobreContent'


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
       <HomeTop/>
       <HomeServ/>
       <HomePriv/>
      </main>
    </>
  )
}
