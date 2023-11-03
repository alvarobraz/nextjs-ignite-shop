import Link from 'next/link'
import { styled } from '../index'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '590px',
  margin: '0 auto',

  h1: {
    fontSize: '$2xl',
    fontWeight: 'bold',
    color: '$gray100'
  },

  '& .ProductsImagesContainer': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    lineHeight: '140%',
    textAlign: 'center'
  },

  strong: {
    color: '$gray100',
  }
})

export const ImageContainer = styled('div', {
  width: '140px',
  height: '140px',
  borderRadius: '1000px',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  margin: '4rem 0 2rem',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',


  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&:not(:last-child)': {
    marginRight: '-52px',
  },

  img: {
    objectFit: 'cover'
  }
})

export const LinkButton = styled(Link, {
  textDecoration: 'none',
  color: '$green500',
  fontSize: '$md',
  fontWeight: 'bold',
  marginTop: '5.5rem',

  '&:hover': {
    color: '$green300',
  }
})