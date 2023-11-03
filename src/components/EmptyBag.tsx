import { EmptyBagContainer } from "@/styles/components/emptybag";
import { Handbag } from "phosphor-react";

export function EmptyBag() {
  return (
    <EmptyBagContainer>
      <p>Sua sacola de compras da Ignite Shop está vazia.</p>
      <Handbag size={32} color={'#00875F'} />
    </EmptyBagContainer>
  )
}