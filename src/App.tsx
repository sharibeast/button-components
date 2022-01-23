import React from 'react';
import type * as Stitches from '@stitches/react'
import { styled } from '@stitches/react'
import { typeScale, neutral, dark } from './utils';




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
  '&:hover': {
    backgroundColor: `${neutral[400]}`,
  }
})

function App() {
  return (
    <div>
      <h1>compons</h1>
      <Button>default</Button>

    </div>
  );
}

export default App;
