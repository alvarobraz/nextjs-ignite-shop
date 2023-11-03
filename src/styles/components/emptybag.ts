import { styled } from "..";

export const EmptyBagContainer = styled('div', {
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  marginTop: '5rem',
  alignItems: 'center',
  gap: '2rem',

  p: {
    fontSize: '1.5rem',
    color: '$gray300',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})