import { useState } from 'react'
import { Container, Grid, GridItem, Sidebar, Stack,Card, CardHeader, CardBody, CardFooter, Select  } from '@chakra-ui/react';
import {
    Box, Center, IconButton, InputLeftElement, Divider, InputGroup, Input,
    HStack, Heading, Text, Flex, Button, VStack, Image, AspectRatio
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
function Builderisk() {
  return (
    <>
    {/* <Header /> */}
    <Container maxW="container"  p='10' width="" rounded='lg'
        boxShadow='md'
        columns={{ sm: 2, md: 4 }}
        backgroundColor='whitesmoke'
    >
        <Flex h="100vh" width='auto'           
        >
            {/* start */}
            <Box flex="1"
            >
                <HStack justifyContent='center' marginTop='5%'>
                <Card align='center'h="50vh" width='60%'
            rounded='md'
            boxShadow='lg'
            backgroundColor='#F6F6F6'
            >
  <CardHeader backgroundColor='blue' width='100%' rounded='md' align='center'>
    <Heading size='md' color='white'> APD</Heading>
  </CardHeader>
  <CardBody  width='70%' marginTop='10%' >
  <Select placeholder='Select State' size='md'   >
  <option value='option1' >Alabama</option>
  <option value='option2'>California</option>
  <option value='option3'>Connecticut</option>
  <option value='option2'>Delaware</option>
  <option value='option3'>Flordia</option>
  <option value='option2'>Georgia</option>
  <option value='option3'>Kansas</option>
  <option value='option2'>Louisiana</option>
  <option value='option3'>Maine</option>
  <option value='option2'>Maryland</option>
  <option value='option3'>Massachusetts</option>
  <option value='option2'>Missouri</option>
  <option value='option3'>New Hampshire</option>
  <option value='option2'>New Jersey</option>
  <option value='option3'>North Caroline</option>
  <option value='option2'>Ohio</option>
  <option value='option3'>Pennsylvania</option>
  <option value='option3'>Rhode Island</option>
  <option value='option3'>South Caroline</option>
</Select>
  </CardBody>
  <CardFooter width='100%'   align='center' justifyContent='center'>
    <Link   width='35%' to={'/ApdHeader'}>

    <Button   _hover={{"backgroundColor" : 'blue' ,  "color" : 'white'}} backgroundColor='blue' color='white'   >Create Quote</Button>

    </Link>
  </CardFooter>
</Card>
                </HStack>
            </Box>
        </Flex>
    </Container>
</>
  )
}
export default Builderisk
