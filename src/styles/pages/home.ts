import { styled } from "..";
import Link from 'next/link'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656
})

export const ProductCard = styled(Link, {
  borderRadius: '8px',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  boxShadow: '0px 0px 48px rgba(0, 0, 0, 0.9)',
  cursor: 'pointer',
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
})

export const FooterContainer = styled('footer', {
  padding: '1.125rem',
  background: 'rgba(32, 32, 36, 0.9)',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'absolute',
  left: '0.25rem',
  bottom: '0.25rem',
  right: '0.25rem',
  transition: 'all 0.2s ease-in-out',
  transform: 'translateY(110%)',
  opacity: 0,

  '& .FooterDetails': {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },

  strong: {
    fontSize: 'lg',
    color: '$gray100',
    fontWeight: '700'
  },

  span: {
    fontSize: 'xl',
    color: '$green300',
    fontWeight: '700'
  },

  '& .BagIcon': {
    padding: '0.625rem 0.75rem',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '$green500',
  },
})

// export const Product = styled('div', {
//   background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
//   borderRadius: 8,
//   // padding: '0.25rem',
//   cursor: 'pointer',
//   position: 'relative',
//   overflow: 'hidden',

//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',

//   img: {
//     objectFit: 'cover'
//   },

//   footer: {
//     position: 'absolute',
//     bottom: '0.25rem',
//     left: '0.25rem',
//     right: '0.25rem',
//     padding: '2rem',

//     borderRadius: 6,

//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',

//     backgroundColor: 'rgba(0, 0, 0, 0.6)',

//     transform: 'translateY(110%)',
//     opacity: 0,
//     transition: 'all 0.2s ease-in-out',

//     strong: {
//       fontSize: '$lg',
//       color: '$gray100',
//     },

//     span: {
//       fontSize: '$xl',
//       fontWeight: 'bold',
//       color: '$green300'
//     },
//   },

//   '&:hover': {
//     footer: {
//       transform: 'translateY(0%)',
//       opacity: 1
//     }
//   }
// })