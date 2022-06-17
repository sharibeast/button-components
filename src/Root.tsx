import React from 'react'
import { styled } from './stitches.config'

const Wrapper = styled('div', {

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          gap: 30,
          mx: "auto",
          maxWidth: "1280px",
})

const Container = styled('div', {
          p: "50px"

})

const Box = styled('div', {

})

const Flex = styled('div', {
          display: "flex",
          gap: 20
})

const Button = styled('button', {
          fontSize: '$medium',
          p: '8px 16px',
          borderRadius: '6px',
          outline: 'none',
          border: 'none',
          boxShadow: "$small",
          fontWeight: '500',
          cursor: "pointer",
          transition: 'all 200ms',
          '&:hover': {
                    backgroundColor: '$neutral-400',
          },
          variants: {
                    disabled: {
                              true: {
                                        backgroundColor: '$neutral-200',
                                        cursor: 'not-allowed',
                                        boxShadow: 'none',
                                        '&:hover': {
                                                  backgroundColor: '$neutral-200',
                                        }
                              }
                    },
                    disableShadow: {
                              true: {
                                        boxShadow: 'none',
                                        backgroundColor: '$blue-100',
                                        color: '$neutral-100',
                                        '&:hover': {
                                                  backgroundColor: '$blue-200',
                                        }
                              }
                    },
                    variant: {
                              outline: {
                                        backgroundColor: '$neutral-100',
                                        color: '$blue-100',
                                        border: '1px solid $blue-100',
                                        '&:hover': {
                                                  backgroundColor: '$blue-400',
                                        }
                              },
                              text: {
                                        background: 'none',
                                        color: '$blue-100',
                                        boxShadow: "none",
                                        border: 'none',
                                        '&:hover': {
                                                  backgroundColor: '$blue-400',
                                        },
                                        '&:disabled': {
                                                  color: '$neutral-400',
                                                  backgroundColor: '$neutral-100',
                                        }

                              },

                    },
                    color: {
                              default: {
                                        // boxShadow: '$small',
                                        color: '$dark-100',
                              },
                              primary: {
                                        backgroundColor: '$blue-200',
                                        color: '$neutral-100',
                                        '&:hover': {
                                                  backgroundColor: '$blue-300',
                                        }
                              },
                              secondary: {
                                        boxShadow: "$medium",
                                        backgroundColor: '$dark-200',
                                        color: '$neutral-100',
                                        '&:hover': {
                                                  backgroundColor: '$dark-300',
                                        }
                              },
                              danger: {
                                        backgroundColor: '$red-100',
                                        color: '$neutral-100',
                                        boxShadow: '$md',
                                        '&:hover': {
                                                  backgroundColor: '$red-200',
                                        }
                              }
                    },
                    size: {

                              sm: {
                                        padding: '6px 12px',
                                        backgroundColor: '$blue-200',
                                        color: '$neutral-100',
                                        '&:hover': {
                                                  backgroundColor: '$blue-300'
                                        }
                              },
                              md: {
                                        padding: '8px 16px',
                                        backgroundColor: '$blue-200',
                                        color: '$neutral-100',
                                        '&:hover': {
                                                  backgroundColor: '$blue-300'
                                        }
                              },
                              lg: {
                                        padding: '11px 22px',
                                        backgroundColor: '$blue-200',
                                        color: '$neutral-100',
                                        '&:hover': {
                                                  backgroundColor: '$blue-300'
                                        }
                              }
                    }
          },
          compoundVariants: [
                    {
                              variant: 'text',
                              disabled: true,
                              css: {
                                        backgroundColor: '$neutral-100',
                                        color: '$neutral-400',
                                        '&:hover': {
                                                  backgroundColor: '$neutral-100',
                                        }
                              }
                    }
          ]

})
export default function Root() {
          return (
                    <Container>
                              <h1 style={{ textAlign: "center" }}>Buttons</h1>
                              <Wrapper>
                                        <Flex>
                                                  <Box>
                                                            <p>{"<Button/>"}</p>
                                                            <Button>Default</Button>
                                                  </Box>
                                        </Flex>
                                        <Flex>
                                                  <Box>

                                                            <p>{"<Button variant='outline'/>"}</p>
                                                            <Button variant="outline">Outline</Button>
                                                  </Box>
                                        </Flex>
                                        <Flex>
                                                  <Box>
                                                            <p>{"<Button variant='text'/>"}</p>
                                                            <Button variant="text">Default</Button>
                                                  </Box>
                                        </Flex>
                                        <Flex>
                                                  <Box>
                                                            <p>{"<Button disableShadow/>"}</p>
                                                            <Button disableShadow>Default</Button>
                                                  </Box>
                                        </Flex>
                                        <Flex>
                                                  <Box>
                                                            <p>{"<Button disabled/>"}</p>
                                                            <Button disabled >Default</Button>
                                                  </Box>

                                        </Flex>

                                        <Flex>
                                                  <Box>
                                                            <p>{"<Button variant='text' disabled/>"}</p>
                                                            <Button variant="text" disabled >text diabled</Button>
                                                  </Box>
                                        </Flex>
                                        <Flex>
                                                  <Box>
                                                            <p>{"<Button size='sm'/>"}</p>
                                                            <Button size="sm">small</Button>
                                                  </Box>
                                                  <Box>
                                                            <p>{"<Button size='md'/>"}</p>
                                                            <Button size="md">small</Button>
                                                  </Box>
                                                  <Box>
                                                            <p>{"<Button size='lg'/>"}</p>
                                                            <Button size="lg">small</Button>
                                                  </Box>
                                        </Flex>

                                        <Flex>
                                                  <Box>
                                                            <p>{"<Button color='default'/>"}</p>
                                                            <Button color="default">default</Button>
                                                  </Box>
                                                  <Box>

                                                            <p>{"<Button color='primary'/>"}</p>
                                                            <Button color="primary">default </Button>
                                                  </Box>
                                                  <Box>
                                                            <p>{"<Button color='secondary'/>"}</p>
                                                            <Button color="secondary">secondary</Button>
                                                  </Box>
                                                  <Box>
                                                            <p>{"<Button color='danger'/>"}</p>
                                                            <Button color="danger">danger</Button>
                                                  </Box>
                                        </Flex>
                              </Wrapper>
                    </Container>
          )
}
