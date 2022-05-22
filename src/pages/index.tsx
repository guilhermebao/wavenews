import { GetServerSideProps } from 'next'

import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import styles from './home.module.scss'

interface HomeProps {
  product: {
    pricceId: string;
    amount: number;
  }
}

export default function Home({product}: HomeProps) {

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
          <span>for {product.amount} mês</span>
          </p>
          <SubscribeButton priceId={product.pricceId}/>
        </section>
        <img src="/images/avatar.svg" alt="Maquiadora" />
      </main>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1L2GXwFbq5ALtuFDJ6LIK5v2')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount / 100),
  }

  return { 
    props: {
      product,
    }
  }
}