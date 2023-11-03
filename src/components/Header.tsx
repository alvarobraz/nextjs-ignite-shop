import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog';

import { ProductsBag } from '../components/ProductsBag';

import { CartQuantityView, CartTrigger, Header } from '../styles/components/header'
import logoImg from '../assets/logo.svg'
import { Handbag } from 'phosphor-react'
import { useProduct } from '@/hooks/useProduct';

export function DefaultHeader() {

  const { hasProductsOnBag, totalNumberOfProductsInTheBag } = useProduct()
  return (
    <Header>
      <Image src={logoImg} alt="" />
      <Dialog.Root>
        <CartTrigger asChild hasProducts={`${hasProductsOnBag}`}>
          <button>
            <Handbag size={24} weight={'bold'} />
          </button>
        </CartTrigger>
        <CartQuantityView view={`${hasProductsOnBag}`} >
          {totalNumberOfProductsInTheBag()}
        </CartQuantityView>
        <ProductsBag />
      </Dialog.Root>
    </Header>
  )
}