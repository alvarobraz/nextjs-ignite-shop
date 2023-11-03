import { BagProductsContext } from "@/context/BagProductsContext";
import { useContext } from "react";

export function useProduct() {
  const { bagProducts, handleDeleteProductFromBag } = useContext(BagProductsContext)

  return {
    bagProducts,
    totalValueOfProducts: () => {
       return bagProducts.reduce((acc, product) => {
        return acc + (product.quantity * product.price)
      }, 0)
    },
    hasProductsOnBag: bagProducts.length > 0,
    totalNumberOfProductsInTheBag: () => {
      return bagProducts.reduce((acc, product) => {
        return acc + product.quantity
      }, 0)
    },
    deleteProductFromBag: (id: string) => {
      handleDeleteProductFromBag(id)
    }
  }
}