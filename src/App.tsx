import React from 'react';
import { styled } from '@stitches/react'
import { typeScale, neutral, dark, blue } from './utils';


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
  }
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

    </div>
  );
}

export default App;
