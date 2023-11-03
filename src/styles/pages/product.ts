import { styled } from '..'
import Link from 'next/link';

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4.5rem',
  maxWidth: '1180px',
  margin: '0 auto'
})

export const LinkButton = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginBottom: '0.5rem',
  color: '$green500',
  maxWidth: '150px',
  fontWeight: 'bold',

  '&:hover': {
    color: '$green300',
  }
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: '576px',
  height: '656px',
  borderRadius: '8px',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  boxShadow: '0px 0px 48px rgba(0, 0, 0, 0.9)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  maxWidth: '520px',

  h1: {
    fontSize: '$2xl',
    lineHeight: '140%',
    fontWeight: 'bold',
    color: '$gray300',
    margin: '2rem 0 1rem'
  },

  span: {
    fontSize: '$2xl',
    lineHeight: '140%',
    color: '$green300'
  },

  p: {
    fontSize: '$md',
    color: '$gray300',
    lineHeight: '160%',
    marginTop: '2.5rem'
  },

  button: {
    padding: '1.25rem 0',
    borderRadius: '8px',
    backgroundColor: '$green500',
    border: 'none',
    lineHeight: '160%',
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$white',
    cursor: 'pointer',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    }
  },

  '& .ProductQuantityContainer': {
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    label: {
      fontSize: '$md',
      fontWeight: 'bold',
      color: '$green500'
    },
    select: {
      padding: '0.15rem 0.15rem 0.15rem 0.5rem',
      borderRadius: '4px',
      outline: 'none',
      cursor: 'pointer',
      border: '2px solid #00875F',
      fontSize: '15px',
      background: 'transparent',
      color: '#FFF',

      option: {
        background: '$gray900',
      }
    }
  }
})