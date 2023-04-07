
import { useState } from 'react';
import { Container, Grid, GridItem, Sidebar, Stack } from '@chakra-ui/react';
import {
    Box, Center, Select, Textarea, FormLabel, InputGroup, Input,
    HStack, Heading, Text, Flex, Button, VStack, Image, FormControl
} from '@chakra-ui/react';
import { useEffect } from 'react';



export default function Nodes() {
    const [number, setNumber] = useState(0)
    const [Secandary, setSecandary] = useState(0)

    if (number === 0) {

        console.log(number, "number", Secandary, "Secandary")
    }
    if (number !== 0) {
        let a = document.getElementById('raja')
        // var b = document.createElement('div').className('new item')
        a.append("-")

        // a.appendChild(b)
        // a.appendChild(b)
    }

    return (
        <div>
            {/* <Container maxW="container" marginLeft="15%" p='10' width="" rounded='lg'
                boxShadow='md'
                columns={{ sm: 2, md: 4 }}
                // backgroundColor='red.100'
                // spacing='8'
                // textAlign='center'
                // backgroundColor='#F6F6F6'

                mt='-4%'
            >


                <h1>NUM1: {number}</h1>
                <h1>NUM2: {Secandary}</h1>
                <div id='raja'>

                </div>
                {
                    Array(number).fill("").map((el,idx) => {
                        return <Box h={30} w={40} backgroundColor="green.100" />
                    })

                }



                <button onClick={() => {
                    setNumber(number + 1)
                    setSecandary(Secandary + 1)
                }}>Click me</button>
            </Container> */}

<Container maxW="container"   p='10' width="" rounded='lg'
                boxShadow='md'
                columns={{ sm: 2, md: 4 }}
                // backgroundColor='red.100'
                // spacing='8'
                // textAlign='center'
                // backgroundColor='#F6F6F6'
                mt='-4%'
            >
                <Flex h="" width='auto'
                    rounded='md'
                    boxShadow='md'
                // backgroundColor='#2347F0'
                >
                    {/* start */}
                    <Box flex="1" >
                       
                        <HStack
                            boxShadow="2xl"
                            // width="90%"
                            height="10vh"
                            align="center"
                            rounded="md"
                            mt="4"
                            backgroundColor='#2347F0'
                            color='whatsapp.100'
                        >
                            <Text   ml={"4"}    color={'white'}  fontWeight={'bold'}  >Summary</Text>
                        </HStack>
              <Box    bg={'white'} >
<Flex      justifyContent={"space-between"}        mr={20} >
    

<div     style={{"display": "flex",  "flex-direction": "column" , "marginLeft" : 30}}     className='flex  flex-col'           >
    <span>Policy No  QuoteEM923164</span>
    <span>Insured </span>
    <span>DBA Name </span>
    <span>State California </span>
    <span>LINE APD  </span>
</div>
<div     style={{"display": "flex",  "flex-direction": "column"}}     className='flex  flex-col'           >
    <div style={{"display" : "flex"}}   >
    <span    style={{"marginRight" : 20}}    >STATUS</span>
        <span   style={{"color" : "yellow"}}  >QUOTE 04/05/2023</span>
        </div>
    <div style={{"display" : "flex"}}   >
    <span    style={{"marginRight" : 20}}    >TERM</span>
        <span>12 MONTHS</span>
        </div>
    <div style={{"display" : "flex"}}   >
    <span    style={{"marginRight" : 20}}    >EFFECTIVE</span>
        <span>04/05/2023</span>
        </div>
    <div style={{"display" : "flex"}}   >
    <span    style={{"marginRight" : 20}}    >EXPIRATION</span>
        <span>04/05/2024</span>
        </div>
    <div style={{"display" : "flex"}}   >
    <span    style={{"marginRight" : 20}}    >BILLING COMPANY</span>
        <span>EVUSA-ALST-EVOLVE USA -RATED</span>
        </div>
    <div style={{"display" : "flex"}}   >
    <span    style={{"marginRight" : 20}}    >ISSUING COMPANY	</span>
        <span>LLOYDS OF LONDON</span>
        </div>
   
</div>




</Flex>

<HStack
                            boxShadow="2xl"
                            // width="90%"
                            height="4vh"
                            align="center"
                            rounded="md"
                            mt="4"
                            backgroundColor='white'
                            color='black'
                            border={"1px solid black"}
                        >
                            <Text   ml={"4"}    color={'black'}  fontWeight={'bold'}  >MTC</Text>
                        </HStack>
<Flex      mb={'30px'}  justifyContent={'space-between'}  mt={'20px'}  >
    <Textarea      h={'200px'} maxW={'450px'}   border={'1px solid black'}  ></Textarea>
    <VStack>
    <Box>Types : </Box>
<Select placeholder='Select option'>
  <option value='option1'>General</option>
  <option value='option2'>Quote</option>
  <option value='option3'>Accounting</option>
  <option value='option3'>Underwriting</option>
  <option value='option3'>Claim</option>
  <option value='option3'>Processing</option>
  <option value='option3'>Approval</option>
  <option value='option3'>NR to GLR</option>
</Select>
</VStack>
<VStack mr={'20px'} >
    <Box>Pages : </Box>
<Select    placeholder='Select option'>
  <option value='option1'>Generic</option>
  <option value='option2'>Account</option>
  <option value='option3'>Basic</option>
  <option value='option3'>Payment</option>
  <option value='option3'>Premiums</option>
</Select>
<Center>
<Button    mt={'20px'} colorScheme='teal' variant='solid'>
    Add Note 
  </Button>
</Center>
</VStack>
</Flex>
              </Box>
              <Box            borderRadius={'10px'}  p={'8px 10px'}   as='span'    bg={'gray.900'}  textColor={'white'}   fontSize={'2xl'}  >Status Spacific </Box>
              <HStack
                            justifyContent="center"
                            boxShadow="2xl"
                            style={{ justifyContent: "space-around" }}
                            // width="90%"
                            height="10vh"
                            align="center"
                            rounded="md"
                            mt="4"
                            backgroundColor='#2347F0'
                            color='white'
                        >
                            <Text>Entered</Text>
                            <Text>Summary</Text>
                            <Text>Type</Text>
                            <Text>Page </Text>
                        </HStack>
                        <HStack
                            justifyContent="center"
                            boxShadow="2xl"
                            style={{ justifyContent: "space-around" }}
                            // width="90%"
                            height="10vh"
                            align="center"
                            rounded="md"
                            mt="4"
                            mb="4"
                            backgroundColor='white'
                            color='gray'
                        >
                            <Flex>
                            <Text     color={"black"} >QuotoEM911846</Text>
                            <Text     color={"black"} >New</Text>
                            <Text     color={"black"} >1 Year</Text>
                            <Text     color={"black"} >1/25/2023</Text>
                            <Text     color={"black"} >1/25/2023</Text>
                            <Text     color={"black"} >Quoto </Text>
                            </Flex>
                            <Button colorScheme='teal' variant='solid'>
    Hide
  </Button>
                        </HStack>
                        <Box       mt={'30px'}       borderRadius={'10px'}  p={'8px 10px'}   as='span'    bg={'gray.900'}  textColor={'white'}   fontSize={'2xl'}  >Entire Policy History  </Box>
                        <HStack
                            justifyContent="center"
                            boxShadow="2xl"
                            style={{ justifyContent: "space-around" }}
                            // width="90%"
                            height="10vh"
                            align="center"
                            rounded="md"
                            mt="4"
                            backgroundColor='#2347F0'
                            color='whatsapp.100'
                        >
                            <Text>Entered</Text>
                            <Text>Summary</Text>
                            <Text>Type</Text>
                            <Text>Page </Text>
                        </HStack>
                        
                    </Box>
                </Flex>
            </Container>
        </div>
    )
}