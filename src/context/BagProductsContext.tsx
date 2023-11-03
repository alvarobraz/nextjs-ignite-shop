import { showToastify } from '@/utils/showToastify';
import { createContext, ReactNode, useState } from 'react'

export interface BagProductsProps {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
  priceId: string;
}

interface BagProductsContextTypes {
  bagProducts: BagProductsProps[]
  handleAddProductOnBag: (product: BagProductsProps) => void
  handleDeleteProductFromBag: (id: string) => void
}

interface BagProductsProviderProps {
  children: ReactNode
}

export const BagProductsContext = createContext({} as BagProductsContextTypes)

export function BagProductsProvider({ children }: BagProductsProviderProps) {
  const [bagProducts, setBagProducts] = useState<BagProductsProps[]>([])

  function handleAddProductOnBag(product: BagProductsProps) {
    const productAlreadyOnBag = bagProducts.find((bagProduct) => {
      return bagProduct.id === product.id
    })

    if (Boolean(productAlreadyOnBag)) {
      const newProductsList = bagProducts.map((bagProduct) => {
        if (bagProduct.id === product.id) {
          return {
            ...product,
            quantity: bagProduct.quantity + product.quantity
          }
        } else {
          return {...bagProduct}
        }
      })
      setBagProducts(newProductsList)
      showToastify()
      return
    } else {
        setBagProducts(state => [...state, product])
        showToastify()
      return
    }
  }

  function handleDeleteProductFromBag(id: string) {
    const newBagListWithoutDeletedOne = bagProducts.filter((product) => {
      return product.id !== id
    })
    setBagProducts(newBagListWithoutDeletedOne)
  }

  return (
    <BagProductsContext.Provider value={{bagProducts, handleAddProductOnBag, handleDeleteProductFromBag}} >
      {children}
    </BagProductsContext.Provider>
  )
}