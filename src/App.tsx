import React from 'react';
import { styled } from '@stitches/react'
import { typeScale, neutral, dark, blue, red } from './utils';


const Wrapper = styled('div', {
  display: 'flex'
})

const Button = styled('button', {
  fontSize: `${typeScale.medium}`,
  padding: '8px 16px',
  borderRadius: '6px',
  outline: 'none',
  border: 'none',
  boxShadow: '0px 2px 3px rgba(51,51,51,0.2)',
  backgroundColor: `${neutral[200]}`,
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 200ms',
  '&:hover': {
    backgroundColor: `${neutral[400]}`,
  },

  variants: {
    disableShadow: {
      true: {
        boxShadow: 'none',
        backgroundColor: `${blue[100]}`,
        color: `${neutral[100]}`,

        '&:hover': {
          backgroundColor: `${blue[200]}`
        }
      }
    },
    color: {
      default: {
        backgroundColor: `${neutral[200]}`
      },
      primary: {
        backgroundColor: `${blue[100]}`,
        color: `${neutral[100]}`,
        '&:hover': {
          backgroundColor: `${blue[300]}`
        }
      },
      secondary: {
        backgroundColor: `${dark[200]}`,
        color: `${neutral[100]}`,
        '&:hover': {
          backgroundColor: `${dark[300]}`
        }
      },
      danger: {
        backgroundColor: `${red[100]}`,
        color: `${neutral[100]}`,
        '&:hover': {
          backgroundColor: `${red[200]}`
        }
      }
    },
    size: {
      sm: {
        padding: '6px 12px'
      },
      md: {
        padding: '8px 16px'
      },
      lg: {
        padding: '11px 22px'
      }
    },

    variant: {
      outline: {
        backgroundColor: `${neutral[100]}`,
        color: `${blue[100]}`,
        border: `1px solid ${blue[100]}`,


        '&:hover': {
          backgroundColor: `${blue[400]}`
        }
      },
      text: {
        background: 'none',
        border: 'color',
        color: `${blue[100]}`,
        '&:hover': {
          backgroundColor: `${blue[400]}`
        },


        '&:disabled': {
          color: `${neutral[400]}`,
          '&:hover': {
            backgroundColor: `${neutral[100]}`
          }
        }
      }
    }
  },
  // defaultVariants: {
  //   color: 'primary'
  // }
})

function App() {
  return (
    <div>
      <h1>Buttons</h1>
      <Button>default</Button>
      <Button variant='outline'>Default</Button>
      <Button variant='text'>Default</Button>
      <Button disableShadow>Default</Button>
      <Button disabled variant='text'>Disabled</Button>

      <br />

      <Button size='sm'>small</Button>
      <Button size='md'>medium</Button>
      <Button size='lg'>large</Button>


      <br />

      <Button color='default'>Default</Button>
      <Button color='primary'>Default</Button>
      <Button color='secondary'>Secondary</Button>
      <Button color='danger'>Danger</Button>

    </div>
  );
}

export default App;
