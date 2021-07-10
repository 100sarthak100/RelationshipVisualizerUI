import React from 'react';
import User from './components/User';
import Relation from './components/Relation';
import RelationVisualizer from './components/RelationVisualizer';
import {
  Box,
  Image,
  Center,
  VStack,
  GridItem,
  Grid, StackDivider
} from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import SampleImage from './assets/images/sampleGraph.svg';

function App() {
  return (
    <div>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={1}
        align="stretch"
      >
        <Header />
        <Box position="relative" w="100%" h={['300vh', '330vh']} marginBottom="10px" padding="30px" marginTop="10px" paddingTop="0px" bg="white">
          <Grid
            h="300px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(4, 1fr)"
            gap={4}
            padding="20px"
          >
            <GridItem colSpan={4} bg="white" padding="20px" paddingTop="0px" paddingBottom="0px">
              <Center bg="white" h="350px" color="white">
                <Image src={SampleImage} alt="Sample Image" />
              </Center>
            </GridItem>

            <GridItem colSpan={4} bg="white" padding="20px" paddingTop="0px">
              <RelationVisualizer />
            </GridItem>

            <GridItem colSpan={1} bg="white" padding="20px" paddingBottom="60px" paddingRight="0px">
              <User />
            </GridItem>

            <GridItem colSpan={3} bg="white" padding="20px" paddingLeft="0px">
              <Relation />
            </GridItem>
          </Grid>
        </Box>
        <Footer />
      </VStack>
    </div>
  );
}

export default App;
