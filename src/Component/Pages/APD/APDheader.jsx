    import { useState } from 'react'
    import QView from './QView/Qview';
    import { Container, Grid, GridItem, Sidebar, Stack } from '@chakra-ui/react';
    import { Box, Center, IconButton, InputLeftElement, Divider, InputGroup, Input, HStack, Heading, Text, Flex, VStack, Image, AspectRatio, Accordion, AccordionItem,AccordionButton, Button, AccordionPanel, Select, AccordionIcon, FormLabel, FormControl } from '@chakra-ui/react';
    // import Header from '../../Header/HeadSideBar'
    import { Checkbox } from 'antd';
    import Nodes from './Notes/Notes';
    import GLdrops from './GLdrops/GLdrops';
    import Diary from './Diary/Diary';
    import APDTrucking from './APDTrucking/APDTrucking';
    import Memos from './Memos/Memos';
    import History from './History/History';
    import './APD.css';

    export default function APDheader({ ResultsPerPageDrop }) {
        const [PerPage, setPerPage] = useState("APDTrucking");
        
        function openCity(evt, cityName) {
            var i, x, tablinks;
            x = document.getElementsByClassName("city");
            tablinks = document.getElementsByClassName("tablink");
            for (i = 0; i < x.length; i++) {
              tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
            }
            evt.currentTarget.className += " w3-red";
          }


const funct1c = (event)=>{
    setPerPage('QView')
    openCity(event)
}
const funct2c = (event)=>{
    setPerPage('APDTrucking')
    openCity(event)
}
const funct3c = (event)=>{
    setPerPage('Premiums')
    openCity(event)
}
const funct4c = (event)=>{
    setPerPage('Nodes')
    openCity(event)
}
const funct5c = (event)=>{
    setPerPage('Diary')
    openCity(event)
}
const funct6c = (event)=>{
    setPerPage('Memos')
    openCity(event)
}
const funct7c = (event)=>{
    setPerPage('History')
    openCity(event)
}


        return (
            <div>
                {/* <Header /> */}

                <Flex h="" width='100%'
                    rounded='md'
                    // boxShadow='md'
                    backgroundColor='#F6F6F6'
                    
                >
                    <Box flex="1">
                        <Center>
                            <HStack justifyContent='center' boxShadow='2xl' style={{ justifyContent: "space-around" }} width='90%' height='10vh' align='center' rounded='md' mt="4">
                                <Text         className="tablink  city"   fontWeight="bold"    onClick={funct1c} cursor="pointer" _hover={{ textDecoration: "underLine" }}>
                                    <div      style={{    "fontSize" : "20px"   ,  "display" : "flex" , "flexDirection" : "column",  "justifyContent" : "center", "alignItems" : "center"}} >
                                <i class="fa-solid fa-cloud"></i>  
                                QView   

                                    </div>
                                    
                                      </Text>
                                <Text          className="tablink  w3-red city"     fontWeight="bold"    onClick={funct2c} cursor="pointer" _hover={{ textDecoration: "underLine" }}>



                                <div      style={{   "fontSize" : "20px" ,  "display" : "flex" , "flexDirection" : "column",  "justifyContent" : "center", "alignItems" : "center"}} >
                                <i class="fa fa-user" aria-hidden="true"></i>
  
                                Trucking   

                                    </div>





                                      
                                
                                
                                
                                     </Text>
                                <Text      className="tablink city"  fontWeight="bold"    onClick={funct3c} cursor="pointer" _hover={{ textDecoration: "underLine" }}>

                                <div      style={{   "fontSize" : "20px" ,  "display" : "flex" , "flexDirection" : "column",  "justifyContent" : "center", "alignItems" : "center"}} >
                                <i class="fa fa-suitcase" aria-hidden="true"></i>
                                    Premiums   

                                    </div>




                                </Text>
                                <Text      className="tablink city"  fontWeight="bold"    onClick={funct4c} cursor="pointer" _hover={{ textDecoration: "underLine" }}>

                                <div      style={{ "fontSize" : "20px" ,    "display" : "flex" , "flexDirection" : "column",  "justifyContent" : "center", "alignItems" : "center"}} >
                                <i class="fa fa-comments" aria-hidden="true"></i>
                                    Notes
                                    </div>

                               
                               


                                </Text>
                                <Text      className="tablink  city"  fontWeight="bold"    onClick={funct5c} cursor="pointer" _hover={{ textDecoration: "underLine" }}>
                                    
                                    
                                <div      style={{   "fontSize" : "20px" ,  "display" : "flex" , "flexDirection" : "column",  "justifyContent" : "center", "alignItems" : "center"}} >
                                <i class="fa fa-book" aria-hidden="true"></i>
                                    Diary
                                    </div>



                                

                                
                                </Text>
                                <Text      className="tablink city"  fontWeight="bold"    onClick={funct6c} cursor="pointer" _hover={{ textDecoration: "underLine" }}>
                                    





                                <div      style={{    "fontSize" : "20px" ,   "display" : "flex" , "flexDirection" : "column",  "justifyContent" : "center", "alignItems" : "center"}} >
                                <i class="fas fa-edit"></i>
                                    Memos                                    </div>





</Text>
                                <Text      className="tablink city"  fontWeight="bold"    onClick={funct7c} cursor="pointer" _hover={{ textDecoration: "underLine" }}>
                                    
                                    
                                <div      style={{    "fontSize" : "20px" ,  "display" : "flex" , "flexDirection" : "column",  "justifyContent" : "center", "alignItems" : "center"}} >
                                <i class="fa fa-history" aria-hidden="true"></i>
                                    History
     </div>
                                    
                                    
                                
                                </Text>
                                <Text      className="tablink city"  fontWeight="bold"      cursor="pointer" _hover={{ textDecoration: "underLine" }}>

                                <div      style={{    "fontSize" : "20px" ,   "display" : "flex" , "flexDirection" : "column",  "justifyContent" : "center", "alignItems" : "center"}} >
                                <i class="fas fa-save"></i>
                                    Save
     </div>




           
                                    
                                    
                                    
                                    
                                    
                                    </Text>
                            </HStack>
                        </Center>
                        <br />

                    </Box>

                </Flex>


                {/* </Container> */}

                {
                    
                    PerPage === 'QView' ? <><QView /></> :
                    PerPage === 'APDTrucking' ? <><APDTrucking /></> :
                        PerPage === 'Premiums' ? <><APDTrucking /></> :
                            PerPage === 'Nodes' ? <><Nodes /></> :
                                PerPage === 'Diary' ? <><Diary /></> :
                                    PerPage === 'Memos' ? <><Memos /></> :
                                    PerPage === 'History' ? <><History /></> :
                                        <></>}
            </div>
        )
    }