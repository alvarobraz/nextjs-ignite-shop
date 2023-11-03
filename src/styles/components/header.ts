import { styled } from "..";
import * as Dialog from '@radix-ui/react-dialog';


export const Header = styled('header', {
  width: '100%',
  maxWidth: 1180,
  padding: '2rem 0',
  margin: '0 auto',
  position: 'relative',
  
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const CartQuantityView = styled('div', {
  position: 'absolute',
  top: '24px',
  right: '-12px',
  borderRadius: '9999px',
  width: '1.75rem',
  height: '1.75rem',
  backgroundColor: '$green500',
  border: '3px solid #121214',
  fontSize: '0.875rem',
  fontWeight: 'bold',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    view: {
      true: {
        display: 'flex',
        opacity: '1'
      },
      false: {
        display: 'none',
        opacity: '0'
      }
    }
  }
})

export const CartTrigger = styled(Dialog.Trigger, {
  padding: '0.75rem',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: '$gray800',
  cursor: 'pointer',

  variants: {
    hasProducts: {
      true: {
        color: '$gray100'
      },
      false: {
        color: '$gray500'
      }
    }
  }
})