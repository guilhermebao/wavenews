import { GetServerSideProps } from 'next'

import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss'

export default function Home(props) {
  console.log(props)
  return (
    <>
      <Head>
        <title>Início | wave.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Hey welcome</span>
          <h1>Lorem Ipsum is <span>Dummy</span> text.</h1>
          <p>
          It has survived not only five <br />
          <span>for R$1,00 mes</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Maquiadora" />
      </main>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  return { 
    props: {
      nome: 'Guilherme'
    }
  }
}