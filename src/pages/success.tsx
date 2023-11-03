import { stripe } from "@/lib/stripe";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { ImageContainer, LinkButton, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customer: string;
  totalQuantityOfProducts: number;
  products: {
    id: string
    images: string[]
  }[];
}

export default function Success({ customer, products, totalQuantityOfProducts }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada</title>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada</h1>
        <div className="ProductsImagesContainer">
          {products.map((product) => {
            return (
              <ImageContainer key={product.id}>
                <Image src={product.images[0]} width={120} height={110} alt="" />
              </ImageContainer>
            )
          })}
        </div>
        <p>Uhuul <strong>{customer}</strong>, sua compra de {totalQuantityOfProducts} camisetas já está a caminho da sua casa. </p>
        <LinkButton href="/">Voltar ao catálogo</LinkButton>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  
  const sessionId = String(query.session_id)
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const productsDetails= session.line_items?.data.map((product) => {
    return product.price?.product
  })

  const totalQuantityOfProducts = session.line_items?.data.reduce((acc, product) => {
    return acc + product.quantity!
  }, 0)

  const customer = session.customer_details?.name
  
  return {
    props: {
      customer,
      totalQuantityOfProducts,
      products: productsDetails
    }
  }
}