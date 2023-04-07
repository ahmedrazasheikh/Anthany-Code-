
import { useState } from 'react';
import { Container, Grid, GridItem, Sidebar, Stack } from '@chakra-ui/react';
import {
    Box, Center, Select, Textarea, FormLabel, InputGroup, Input, Checkbox , 
    HStack, Heading, Text, Flex, Button, VStack, Image, FormControl
} from '@chakra-ui/react';
import { useEffect } from 'react';



export default function Diary() {
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
                       
                        
              <Box        mt={70}   bg={'white'} >
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
        <span   style={{"color" : "green"}}  >QUOTE 04/05/2023</span>
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
              </Box>
              <HStack
                            justifyContent="center"
                            boxShadow="2xl"
                            style={{ justifyContent: "space-around" }}
                            // width="90%"
                            height="7vh"
                            align="center"
                            rounded="md"
                            mt="4"
                            mb="4"
                            backgroundColor='gray'
                            color='gray'
                        >
                            <Flex>
                            <Text      fontSize={"2xl"}   fontWeight={"bold"}   color={"white"} >MGA Diary </Text>
                            </Flex>
                        </HStack>
              <HStack
                            justifyContent="center"
                            boxShadow="2xl"
                            style={{ justifyContent: "space-around" }}
                            height="8vh"
                            align="center"
                            rounded="md"
                            backgroundColor='#2347F0'
                            color='white'
                        >
                            <Text>Entered</Text>
                            <Text>Due</Text>
                            <Text>Completed  </Text>
                            <Text>Type</Text>
                        </HStack>
                       
                        <HStack
                            justifyContent="center"
                            boxShadow="2xl"
                            style={{ justifyContent: "space-around"  }}
                            // width="90%"
                            height="10vh"
                            align="center"
                            rounded="md"
                            mt="4"
                            mb="4"
                            backgroundColor='grya'
                            color='gray'
                        >
                            {/* <Flex> */}
                            <Text     color={"black"} >04/05/2023 </Text>
                            <Input w={40}    borderRadius={20}  border={"1px solid black"} />
                            <Input w={40}   borderRadius={20}  border={"1px solid black"}  />

                            <Select  w={40}   borderRadius={20}  border={"1px solid black"} placeholder='Policy'>
  <option value='option1'>Claim</option>
</Select>
                            {/* </Flex> */}
                        </HStack>


                        <HStack
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
                            <Text pr={20}     >	Auditor</Text>
                            <Text pr={20}     >Author</Text>
                            <Text pr={20}     >Urgent</Text>
                            <Text pr={20}     >Security Level</Text>
                        </HStack>


<Box>
<HStack    mt={5}   >
<Select    w={40}    > 
									  <option value="21173">
									  Abbitt Kirsten  - MGA 
									  </option><option value="25128">
									  Amos Charlee  - MGA 
									  </option><option value="18988">
									  Aspinwall Vickie  - MGA 
									  </option><option value="18888">
									  auditor auditor  - MGA 
									  </option><option value="1">
									  Bari Ilya R - MGA 
									  </option><option value="5847">
									  Bari Veronika G - MGA 
									  </option><option value="1212">
									  Barrows Melody  - MGA 
									  </option><option value="22755">
									  Bell Caroline  - MGA 
									  </option><option value="19038">
									  Biron Jennifer  - MGA 
									  </option><option value="24682">
									  Blake Amy  - MGA 
									  </option><option value="7492">
									  Boag Will  - MGA 
									  </option><option value="78">
									  Bode Louis S. - MGA 
									  </option><option value="25321">
									  Butterworth Rob  - MGA 
									  </option><option value="24786">
									  Campbell Shay  - MGA 
									  </option><option value="25095">
									  cancellations accounting  - MGA 
									  </option><option value="7491">
									  Carter Steve  - MGA 
									  </option><option value="25287">
									  Chandler Rachel  - MGA 
									  </option><option value="3944">
									  Christofferson Candice  - MGA 
									  </option><option value="22642">
									  Company Blair and - MGA 
									  </option><option value="5471">
									  Connell Michele  - MGA 
									  </option><option value="22533">
									  Conrad Grace  - MGA 
									  </option><option value="23468">
									  COOK PEPPAR  - MGA 
									  </option><option value="60">
									  Corrado Caroline  - MGA 
									  </option><option value="5100">
									  Crow Paula  - MGA 
									  </option><option value="5846">
									  Crow Paula  - MGA 
									  </option><option value="23697">
									  Cumberland Bailey  - MGA 
									  </option><option value="24988">
									  Department Processing  - MGA 
									  </option><option value="25425">
									  Department5 Processing  - MGA 
									  </option><option value="23677">
									  Dept 3 Processing  - MGA 
									  </option><option value="20934" selected="">
									  DiBuono Anthony  - MGA 
									  </option><option value="22370">
									  DiBuono Christena  - MGA 
									  </option><option value="23099">
									  DiBuono Rafaela  - MGA 
									  </option><option value="22332">
									  DiCarlo Perry  - MGA 
									  </option><option value="15806">
									  Eckers Kaila  - MGA 
									  </option><option value="6479">
									  Finance Amelia  - MGA 
									  </option><option value="22176">
									  Galanopoulos Susarah  - MGA 
									  </option><option value="18621">
									  Griffin Hilary  - MGA 
									  </option><option value="1454">
									  Hall Nick  - MGA 
									  </option><option value="22696">
									  Hamilton Michael  - MGA 
									  </option><option value="750">
									  Herrington Linda  - MGA 
									  </option><option value="19073">
									  Hitchcock Nichola  - MGA 
									  </option><option value="18800">
									  Howard Kip  - MGA 
									  </option><option value="1380">
									  Inspection EMGA  - MGA 
									  </option><option value="4978">
									  ITDepartment IT  - MGA 
									  </option><option value="25020">
									  James Erika  - MGA 
									  </option><option value="5158">
									  Jernigan Kristie  - MGA 
									  </option><option value="24590">
									  K9 User K9 User  - MGA 
									  </option><option value="22477">
									  Kasfiki Jessica  - MGA 
									  </option><option value="21361">
									  Kearsey James  - MGA 
									  </option><option value="25096">
									  King Kacey  - MGA 
									  </option><option value="25295">
									  knicley jessica  - MGA 
									  </option><option value="7490">
									  Laird Richard  - MGA 
									  </option><option value="24254">
									  Lane Dorian  - MGA 
									  </option><option value="24212">
									  Lange Teresa  - MGA 
									  </option><option value="25052">
									  Lever Sarah  - MGA 
									  </option><option value="5134">
									  Luchman Kirk T - MGA 
									  </option><option value="22963">
									  Luchman Virginia  - MGA 
									  </option><option value="25506">
									  Maglietta Rosa  - MGA 
									  </option><option value="22404">
									  Manners Crystal  - MGA 
									  </option><option value="25466">
									  McCahill Jay  - MGA 
									  </option><option value="6386">
									  Mehr Mills  - MGA 
									  </option><option value="22523">
									  Mendel Dan  - MGA 
									  </option><option value="4">
									  MGA Test M - MGA 
									  </option><option value="5486">
									  Mixon Carmen  - MGA 
									  </option><option value="18660">
									  Morrison Josh  - MGA 
									  </option><option value="4620">
									  Moule Austin  - MGA 
									  </option><option value="70">
									  Moule Charis  - MGA 
									  </option><option value="21097">
									  Muggeridge Harry  - MGA 
									  </option><option value="24337">
									  Neuendorf Tiffany  - MGA 
									  </option><option value="5415">
									  Nieves Jose  - MGA 
									  </option><option value="20102">
									  NoTabsUW BA  - MGA 
									  </option><option value="23461">
									  O'Neill Ashley  - MGA 
									  </option><option value="21960">
									  Online eSignature  - MGA 
									  </option><option value="18976">
									  Pink Raya  - MGA 
									  </option><option value="69">
									  Pomeroy Pete  - MGA 
									  </option><option value="1354">
									  Pottinger Adrienne  - MGA 
									  </option><option value="21535">
									  Prior Oliver  - MGA 
									  </option><option value="21733">
									  Processing Dept  - MGA 
									  </option><option value="21822">
									  Processing Dept 2  - MGA 
									  </option><option value="5647">
									  Racquer Kelly  - MGA 
									  </option><option value="21662">
									  Rathmann Tammy  - MGA 
									  </option><option value="18873">
									  Review Document  - MGA 
									  </option><option value="23419">
									  Rivers Daisy  - MGA 
									  </option><option value="1870">
									  Ross Rob G - MGA 
									  </option><option value="25093">
									  Sarbok Christina  - MGA 
									  </option><option value="23696">
									  Sarna Jagmit  - MGA 
									  </option><option value="22517">
									  Scrivens Joseph  - MGA 
									  </option><option value="22331">
									  Sheffield Rachel  - MGA 
									  </option><option value="194">
									  Sheffield Wes  - MGA 
									  </option><option value="1656">
									  Sheffield Wes  - MGA 
									  </option><option value="25258">
									  Shoultz Ashley  - MGA 
									  </option><option value="25177">
									  Singleton Desmond  - MGA 
									  </option><option value="1880">
									  Starratt Diana  - MGA 
									  </option><option value="4425">
									  Stewart Barbara  - MGA 
									  </option><option value="1299">
									  System System  - MGA 
									  </option><option value="21590">
									  Talbot Becca  - MGA 
									  </option><option value="19091">
									  Thrower George  - MGA 
									  </option><option value="6178">
									  Tischer Lauren  - MGA 
									  </option><option value="25372">
									  Usaga Johana  - MGA 
									  </option><option value="25346">
									  Velez Stephanie  - MGA 
									  </option><option value="20806">
									  Warkcup Darren  - MGA 
									  </option><option value="5700">
									  Welker Suzanne  - MGA 
									  </option><option value="5470">
									  Wells Jennifer  - MGA 
									  </option><option value="6480">
									  White Les  - MGA 
									  </option><option value="74">
									  White Wayne  - MGA 
									  </option><option value="24211">
									  Williams Ashlyn  - MGA 
									  </option><option value="5037">
									  Williams Mike  - MGA 
									  </option><option value="21789">
									  Wolke Suzanne  - MGA 
									  </option><option value="18956">
									  Wood Tonya  - MGA 
									  </option><option value="72">
									  Yeung Jessie  - MGA 
						 </option></Select>
                         <Select  w={40}    class="Task17098_select" name="DiaryAuditorID" > 
								  <option value="21173">
								 Abbitt Kirsten MGA 
								  </option><option value="25128">
								 Amos Charlee MGA 
								  </option><option value="18988">
								 Aspinwall Vickie MGA 
								  </option><option value="18888">
								 auditor auditor MGA 
								  </option><option value="1">
								 Bari Ilya R MGA 
								  </option><option value="5847">
								 Bari Veronika G MGA 
								  </option><option value="1212">
								 Barrows Melody MGA 
								  </option><option value="22755">
								 Bell Caroline MGA 
								  </option><option value="19038">
								 Biron Jennifer MGA 
								  </option><option value="24682">
								 Blake Amy MGA 
								  </option><option value="7492">
								 Boag Will MGA 
								  </option><option value="78">
								 Bode Louis S. MGA 
								  </option><option value="25321">
								 Butterworth Rob MGA 
								  </option><option value="24786">
								 Campbell Shay MGA 
								  </option><option value="25095">
								 cancellations accounting MGA 
								  </option><option value="7491">
								 Carter Steve MGA 
								  </option><option value="25287">
								 Chandler Rachel MGA 
								  </option><option value="3944">
								 Christofferson Candice MGA 
								  </option><option value="22642">
								 Company Blair and MGA 
								  </option><option value="5471">
								 Connell Michele MGA 
								  </option><option value="22533">
								 Conrad Grace MGA 
								  </option><option value="23468">
								 COOK PEPPAR MGA 
								  </option><option value="60">
								 Corrado Caroline MGA 
								  </option><option value="5100">
								 Crow Paula MGA 
								  </option><option value="5846">
								 Crow Paula MGA 
								  </option><option value="23697">
								 Cumberland Bailey MGA 
								  </option><option value="24988">
								 Department Processing MGA 
								  </option><option value="25425">
								 Department5 Processing MGA 
								  </option><option value="23677">
								 Dept 3 Processing MGA 
								  </option><option value="20934" selected="">
								 DiBuono Anthony MGA 
								  </option><option value="22370">
								 DiBuono Christena MGA 
								  </option><option value="23099">
								 DiBuono Rafaela MGA 
								  </option><option value="22332">
								 DiCarlo Perry MGA 
								  </option><option value="15806">
								 Eckers Kaila MGA 
								  </option><option value="6479">
								 Finance Amelia MGA 
								  </option><option value="22176">
								 Galanopoulos Susarah MGA 
								  </option><option value="18621">
								 Griffin Hilary MGA 
								  </option><option value="1454">
								 Hall Nick MGA 
								  </option><option value="22696">
								 Hamilton Michael MGA 
								  </option><option value="750">
								 Herrington Linda MGA 
								  </option><option value="19073">
								 Hitchcock Nichola MGA 
								  </option><option value="18800">
								 Howard Kip MGA 
								  </option><option value="1380">
								 Inspection EMGA MGA 
								  </option><option value="4978">
								 ITDepartment IT MGA 
								  </option><option value="25020">
								 James Erika MGA 
								  </option><option value="5158">
								 Jernigan Kristie MGA 
								  </option><option value="24590">
								 K9 User K9 User MGA 
								  </option><option value="22477">
								 Kasfiki Jessica MGA 
								  </option><option value="21361">
								 Kearsey James MGA 
								  </option><option value="25096">
								 King Kacey MGA 
								  </option><option value="25295">
								 knicley jessica MGA 
								  </option><option value="7490">
								 Laird Richard MGA 
								  </option><option value="24254">
								 Lane Dorian MGA 
								  </option><option value="24212">
								 Lange Teresa MGA 
								  </option><option value="25052">
								 Lever Sarah MGA 
								  </option><option value="5134">
								 Luchman Kirk T MGA 
								  </option><option value="22963">
								 Luchman Virginia MGA 
								  </option><option value="25506">
								 Maglietta Rosa MGA 
								  </option><option value="22404">
								 Manners Crystal MGA 
								  </option><option value="25466">
								 McCahill Jay MGA 
								  </option><option value="6386">
								 Mehr Mills MGA 
								  </option><option value="22523">
								 Mendel Dan MGA 
								  </option><option value="4">
								 MGA Test M MGA 
								  </option><option value="5486">
								 Mixon Carmen MGA 
								  </option><option value="18660">
								 Morrison Josh MGA 
								  </option><option value="4620">
								 Moule Austin MGA 
								  </option><option value="70">
								 Moule Charis MGA 
								  </option><option value="21097">
								 Muggeridge Harry MGA 
								  </option><option value="24337">
								 Neuendorf Tiffany MGA 
								  </option><option value="5415">
								 Nieves Jose MGA 
								  </option><option value="20102">
								 NoTabsUW BA MGA 
								  </option><option value="23461">
								 O'Neill Ashley MGA 
								  </option><option value="21960">
								 Online eSignature MGA 
								  </option><option value="18976">
								 Pink Raya MGA 
								  </option><option value="69">
								 Pomeroy Pete MGA 
								  </option><option value="1354">
								 Pottinger Adrienne MGA 
								  </option><option value="21535">
								 Prior Oliver MGA 
								  </option><option value="21733">
								 Processing Dept MGA 
								  </option><option value="21822">
								 Processing Dept 2 MGA 
								  </option><option value="5647">
								 Racquer Kelly MGA 
								  </option><option value="21662">
								 Rathmann Tammy MGA 
								  </option><option value="18873">
								 Review Document MGA 
								  </option><option value="23419">
								 Rivers Daisy MGA 
								  </option><option value="1870">
								 Ross Rob G MGA 
								  </option><option value="25093">
								 Sarbok Christina MGA 
								  </option><option value="23696">
								 Sarna Jagmit MGA 
								  </option><option value="22517">
								 Scrivens Joseph MGA 
								  </option><option value="22331">
								 Sheffield Rachel MGA 
								  </option><option value="194">
								 Sheffield Wes MGA 
								  </option><option value="1656">
								 Sheffield Wes MGA 
								  </option><option value="25258">
								 Shoultz Ashley MGA 
								  </option><option value="25177">
								 Singleton Desmond MGA 
								  </option><option value="1880">
								 Starratt Diana MGA 
								  </option><option value="4425">
								 Stewart Barbara MGA 
								  </option><option value="1299">
								 System System MGA 
								  </option><option value="21590">
								 Talbot Becca MGA 
								  </option><option value="19091">
								 Thrower George MGA 
								  </option><option value="6178">
								 Tischer Lauren MGA 
								  </option><option value="25372">
								 Usaga Johana MGA 
								  </option><option value="25346">
								 Velez Stephanie MGA 
								  </option><option value="20806">
								 Warkcup Darren MGA 
								  </option><option value="5700">
								 Welker Suzanne MGA 
								  </option><option value="5470">
								 Wells Jennifer MGA 
								  </option><option value="6480">
								 White Les MGA 
								  </option><option value="74">
								 White Wayne MGA 
								  </option><option value="24211">
								 Williams Ashlyn MGA 
								  </option><option value="5037">
								 Williams Mike MGA 
								  </option><option value="21789">
								 Wolke Suzanne MGA 
								  </option><option value="18956">
								 Wood Tonya MGA 
								  </option><option value="72">
								 Yeung Jessie MGA 
						</option></Select>

                        <Text>Dibuno <br />Anthony</Text>
                        <Select   w={40} class="Task17098_select" name="SecurityLevelID" >
							<option value="NULL">
							
							</option><option value="1">Public 
							</option><option value="2">Private 
							</option><option value="3">Secret 
							</option><option value="4">Admin 
						</option></Select>
<Checkbox   color={"black"}   > </Checkbox>    
</HStack>




<HStack>
<Textarea  w={600}           mt={10}    borderRadius={"20"}   border={"1px solid black"}   placeholder='Here is a sample placeholder' />
</HStack>






<HStack      justifyContent={"center"} >
<Button colorScheme='teal' variant='solid'>
    Hide
  </Button>

</HStack>


</Box>



                        <HStack
                            justifyContent="center"
                            boxShadow="2xl"
                            style={{ justifyContent: "space-around" }}
                            // width="90%"
                            height="7vh"
                            align="center"
                            rounded="md"
                            mt="4"
                            mb="4"
                            backgroundColor='gray'
                            color='gray'
                        >
                            <Flex>
                            <Text      fontSize={"2xl"}   fontWeight={"bold"}   color={"white"} >   Status Specific    </Text>
                            </Flex>
                        </HStack>
              <HStack
                            justifyContent="center"
                            boxShadow="2xl"
                            style={{ justifyContent: "space-around" }}
                            height="8vh"
                            align="center"
                            rounded="md"
                            backgroundColor='#2347F0'
                            color='white'
                        >
                            <Text>Entered</Text>
                            <Text>	Due</Text>
                            <Text>Completed</Text>
                            <Text>Type </Text>
                            <Text>User </Text>
                            <Text>Auditor </Text>
                            <Text>Author </Text>
                            <Text>Security Level </Text>
                            <Text>Urgent</Text>
                        </HStack>
                        <HStack
                            justifyContent="center"
                            boxShadow="2xl"
                            style={{ justifyContent: "center" }}
                            // width="90%"
                            height="7vh"
                            align="center"
                            rounded="md"
                            mt="4"
                            mb="4"
                            backgroundColor='gray'
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

                        <HStack
                            justifyContent="center"
                            boxShadow="2xl"
                            style={{ justifyContent: "space-around" }}
                            // width="90%"
                            height="7vh"
                            align="center"
                            rounded="md"
                            mt="4"
                            mb="4"
                            backgroundColor='gray'
                            color='gray'
                        >
                            <Flex>
                            <Text      fontSize={"2xl"}   fontWeight={"bold"}   color={"white"} >  Entire Policy History    </Text>
                            </Flex>
                        </HStack>
              <HStack
                            justifyContent="center"
                            boxShadow="2xl"
                            style={{ justifyContent: "space-around" }}
                            height="8vh"
                            align="center"
                            rounded="md"
                            backgroundColor='#2347F0'
                            color='white'
                        >
                            <Text>Entered</Text>
                            <Text>	Due</Text>
                            <Text>Completed</Text>
                            <Text>Type </Text>
                            <Text>User </Text>
                            <Text>Auditor </Text>
                            <Text>Author </Text>
                            <Text>Security Level </Text>
                            <Text>Urgent</Text>
                        </HStack>

                    

                        
                    </Box>
                </Flex>
            </Container>
        </div>
    )
}