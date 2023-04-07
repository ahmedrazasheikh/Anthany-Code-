import { useState } from 'react'
import {
    Container,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Radio, RadioGroup, Stack, Checkbox, CheckboxGroup, Select, FormLabel, FormControl, Textarea
} from '@chakra-ui/react'
import {
    Box, Center, IconButton, InputLeftElement, Divider, InputGroup, Input,
    HStack, Heading, Text, Flex, Button, VStack, Image, AspectRatio
} from '@chakra-ui/react';

// import Header from '../../../Header/Header'

function    Memos() {
    return (
        <>
            {/* <Header /> */}

            <Container maxW="container"  p='10' width="" rounded='lg'
                boxShadow='md'
                columns={{ sm: 2, md: 4 }}
            // backgroundColor='.100'
            // spacing='8'
            // textAlign='center'
            // backgroundColor='#F6F6F6'
            >
                <Flex h="" width='auto'
                // rounded='md'
                // boxShadow='md'
                // backgroundColor=''
                // flex-direction= 'column'
                >
                    {/* start */}
                    <Box flex="1" flex-direction='column'>
                        <VStack>

                            {/* <Box
                    h="60px" width="100%"
                    rounded='xl'
                    boxShadow='md'
                    backgroundColor='#F6F6F6'
                    display='flex'
                    alignItem='center'
                    justifyContent='space-evenly'
                    >
                        <Center color='gray' fontWeight='400' cursor='pointer' >
                            Qview
                        </Center>
                        <Center color='gray' fontWeight='400' cursor='pointer' >
                            Trucking
                        </Center>
                        <Center color='gray' fontWeight='400' cursor='pointer' >
                            Premium
                        </Center>
                        <Center  color='gray' fontWeight='400' cursor='pointer' >
                            Notes
                        </Center>
                        <Center color='gray' fontWeight='400' cursor='pointer' >
                            Dairy
                        </Center>
                        <Center color='gray' fontWeight='400'cursor='pointer'  >
                            Memos
                        </Center>
                        <Center color='gray' fontWeight='400' cursor='pointer' >
                           History
                        </Center>
                        <Center color='gray' fontWeight='400' cursor='pointer' >
                            Save
                        </Center>

                    </Box> 
                */}
                            <Box
                                h="280px" width="100%"
                                rounded='xl'
                                boxShadow='lg'
                                backgroundColor='#F6F6F6'
                            >
                                <HStack
                                    h={'80%'}
                                    w={'100%'}
                                >


                                    <VStack
                                        width={'50%'}
                                        height={'100%'}
                                        p={4}
                                        alignItems={'flex-start'}
                                    >
                                        <HStack><Text fontWeight={'bold'} color={'blue'}>POLICY NO:</Text><Text fontWeight={'bold'}>QuoteEM911844</Text></HStack>
                                        <HStack><Text fontWeight={'bold'} color={'blue'}>INSURED:</Text><Text fontWeight={'bold'}>Name</Text></HStack>
                                        <HStack><Text fontWeight={'bold'} color={'blue'}>DBA:</Text><Text fontWeight={'bold'}>Name</Text></HStack>
                                        <HStack><Text fontWeight={'bold'} color={'blue'}>STATE:</Text><Text fontWeight={'bold'}>South Caroline</Text></HStack>
                                        <HStack><Text fontWeight={'bold'} color={'blue'}>LINE:</Text><Text fontWeight={'bold'}>APD</Text></HStack>

                                    </VStack>

                                    <VStack
                                        width={'50%'}
                                        height={'100%'}
                                        p={4}
                                        alignItems={'flex-start'}
                                    >
                                        <HStack><Text fontWeight={'bold'} color={'blue'}>STATUS:</Text><Text fontWeight={'bold'}>QUOTE 01/17/2023</Text></HStack>
                                        <HStack><Text fontWeight={'bold'} color={'blue'}>TERM:</Text><Text fontWeight={'bold'}>1 YEAR</Text></HStack>
                                        <HStack><Text fontWeight={'bold'} color={'blue'}>EFFECTIVE</Text><Text fontWeight={'bold'}>01/17/2023</Text></HStack>
                                        <HStack><Text fontWeight={'bold'} color={'blue'}>EXPIRATION:</Text><Text fontWeight={'bold'}>01/17/2024 </Text></HStack>
                                        <HStack><Text fontWeight={'bold'} color={'blue'}>BILLING COMPANY</Text><Text fontWeight={'bold'}>EVUSA-ALST-EVOLVE USA-RATED</Text></HStack>
                                        <HStack><Text fontWeight={'bold'} color={'blue'}>ISSUING COMPANY:</Text><Text fontWeight={'bold'}>LLOYDS OF LONDON </Text></HStack>


                                    </VStack>
                                </HStack>
                                <HStack
                                    width={'100%'}
                                    height={'20%'}
                                    alignItems={'center'}
                                    justifyContent={'space-evenly'}
                                >
                                    <Button bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>ePaper</Button>
                                    <Button bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>Items Needed and Forms</Button>
                                    <Button bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>Contracts</Button>

                                </HStack>

                            </Box>





                            <Box
                                h="60px" width="100%"
                                rounded='xl'
                                boxShadow='md'
                                pl={5}
                                // backgroundColor='blue'
                                display='flex'
                                justifyContent={"flex-start"}
                                alignItems={"center"}
                            >
                              MTC

                            </Box>

                            <HStack
                            justifyContent="center"
                            boxShadow="2xl"
                            style={{ justifyContent: "space-around" }}
                            // width="90%"
                            height="7vh"
                            align="center"
                            rounded="md"
                            w={"100%"}
                            mt="4"
                            mb="4"
                            backgroundColor='gray'
                            color='gray'
                        >
                            <Flex>
                            <Text      fontSize={"2xl"}   fontWeight={"bold"}   color={"white"} > Sent Memos    </Text>
                            </Flex>
                        </HStack>
                        <HStack   
                        w={"100%"}
                            justifyContent="center"
                            boxShadow="2xl"
                            style={{ justifyContent: "flex-start" }}
                            height="8vh"
                            align="center"
                            rounded="md"
                            backgroundColor='#2347F0'
                            color='white'
                        >
                            <Text      pl={10} pr={20}     >User </Text>
                            <Text pr={20}     >		Sent    </Text>
                            <Text pr={20}     >Author</Text>
                            <Text pr={20}     >Subject</Text>
                            {/* <Text pr={20}     >Security Level</Text> */}
                        </HStack>



                        </VStack>

                    </Box>


                </Flex>
            </Container>
        </>
    )
}

export default Memos