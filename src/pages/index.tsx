import { stripe } from '../lib/stripe'
import { FooterContainer, HomeContainer, ProductCard } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'

import Image from 'next/image'
import Stripe from 'stripe'
import Head from 'next/head'
import { Handbag } from 'phosphor-react'

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home({ products }: HomeProps) {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })
  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <ProductCard href={`/products/${product.id}`} key={product.id} prefetch={false} className="keen-slider__slide">
            <Image src={product.imageUrl} width={520} height={480} alt="" />
            <FooterContainer>
              <div className='FooterDetails'>
                <strong>
                  {product.name}
                </strong>
                <span>
                  {product.price}
                </span>
              </div>
              <div className='BagIcon'>
                <Handbag size={24} color={"#FFF"} weight={"bold"} />
              </div>
            </FooterContainer>
          </ProductCard>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  const products = response.data.map((product) => {
    const productPrice = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(productPrice.unit_amount! / 100)
    }
  })
  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 //2 hours
  }
}