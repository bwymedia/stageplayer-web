/* eslint-disable jsx-a11y/media-has-caption */
import Image from 'next/image';
import {
  Container,
  Input,
  Box,
  Icon,
  Text,
  Grid,
  GridItem,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  ButtonGroup,
  Button,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { AiOutlineStar } from 'react-icons/ai';
import { GrCursor } from 'react-icons/gr';
import { TbArrowsCross } from 'react-icons/tb';
// @ts-ignore
import Layout from '../components/Layout.tsx';
import FiftysDiner from '../lib/assets/fifties-diner.webp';

const starredCollections = [
  {
    name: 'Backdrop 1',
    image: FiftysDiner,
  },
  {
    name: 'Backdrop 2',
    image: FiftysDiner,
  },
  {
    name: 'Backdrop 3',
    image: FiftysDiner,
  },
  {
    name: 'Backdrop 4',
    image: FiftysDiner,
  },
  {
    name: 'Backdrop 5',
    image: FiftysDiner,
  },
  {
    name: 'Backdrop 6',
    image: FiftysDiner,
  },
];

// cueType: ['Manual', 'Timer', 'Loop'],
// cueTypeDurationUnitOptions: ['Seconds', 'Minutes'],
// transitionType: ['Hard Cut', 'Crossfade', 'Wipe', 'Advanced Effects', 'Video', 'Sound Effects'],
// transitionTypeWipeDirection: ['Bottom to Top', 'Top to Bottom', 'Right to Left', 'Left to Right'],

// const scenes = {
//   scene: {
//     acts: {
//       actOne: [
//         {
//           Preshow: [
//             {
//               oneTimeVideo: false,
//               cueNumber: '1.0-A',
//               description: 'Curtain Warmer',
//               page: 0,
//               cueLine: 'House is open',
//               cueType: 'Manual',
//               cueTypeDurationValue: '1',
//               cueTypeDurationUnitOptions: 'seconds',
//               cueLoopCount: 3,
//               transitionType: 'Hard Cut',
//               transitionTypeDuractionValue: 1,
//               transitionTypeWipeDirection: 'Bottom to Top',
//             },
//           ],
//           'Scene 1': [
//             {
//               oneTimeVideo: true,
//               cueNumber: '1.1-A',
//               description: 'Blackout',
//               page: 1,
//               cueLine: 'When stage manager is ready',
//               cueType: 'Timer',
//               cueTypeDurationValue: '1',
//               cueTypeDurationUnitOptions: 'seconds',
//               cueLoopCount: '',
//               transitionType: 'Crossfade',
//               transitionTypeDuractionValue: 2,
//               transitionTypeWipeDirection: 'Bottom to Top',
//             },
//             {
//               oneTimeVideo: true,
//               cueNumber: '1.1-B',
//               description: 'Blackout',
//               page: 1,
//               cueLine: 'When stage manager is ready',
//               cueType: 'Timer',
//               cueTypeDurationValue: '1',
//               cueTypeDurationUnitOptions: 'seconds',
//               cueLoopCount: '',
//               transitionType: 'Crossfade',
//               transitionTypeDuractionValue: 2,
//               transitionTypeWipeDirection: 'Bottom to Top',
//             },
//             {
//               oneTimeVideo: false,
//               cueNumber: '1.1-C',
//               description: 'Fade into ballroom entrance',
//               page: 1,
//               cueLine: 'Why Bevis, I had no idea...',
//               cueType: 'Loop',
//               cueTypeDurationValue: '1',
//               cueTypeDurationUnitOptions: 'seconds',
//               cueLoopCount: '',
//               transitionType: 'Wipe',
//               transitionTypeDuractionValue: 2,
//               transitionTypeWipeDirection: 'Bottom to Top',
//             },
//           ],
//           'Scene 2': [
//             {
//               oneTimeVideo: false,
//               cueNumber: '1.2-A',
//               description: 'House exterior',
//               page: 1,
//               cueLine: 'Lets go home',
//               cueType: 'Manual',
//               cueTypeDurationValue: '1',
//               cueTypeDurationUnitOptions: 'seconds',
//               cueLoopCount: '',
//               transitionType: 'Video',
//               transitionTypeDuractionValue: 2,
//               transitionTypeWipeDirection: 'Bottom to Top',
//             },
//             {
//               oneTimeVideo: false,
//               cueNumber: '1.2-B',
//               description: 'House interior',
//               page: 1,
//               cueLine: 'Enough talk, lets go',
//               cueType: 'Manual',
//               cueTypeDurationValue: '1',
//               cueTypeDurationUnitOptions: 'seconds',
//               cueLoopCount: '',
//               transitionType: 'Advanced Effects',
//               transitionTypeDuractionValue: 2,
//               transitionTypeWipeDirection: 'Bottom to Top',
//             },
//           ],
//           'Scene 3': [
//             {
//               oneTimeVideo: false,
//               cueNumber: '1.3-A',
//               description: 'Starts to rain outside',
//               page: 1,
//               cueLine: '...would be terrible time for it to rain',
//               cueType: 'Loop',
//               cueTypeDurationValue: '1',
//               cueTypeDurationUnitOptions: 'seconds',
//               cueLoopCount: '',
//               transitionType: 'Sound Effects',
//               transitionTypeDuractionValue: 2,
//               transitionTypeWipeDirection: 'Bottom to Top',
//             },
//           ],
//         },
//       ],
//     },
//   },
// };
// const { scene } = scenes;
// const { acts } = scene;

const Editor = () => (
  <Layout>
    <Container maxW="6xl">
      <Text fontSize="2xl" color="blue.500">
        Production Editor
      </Text>
      <Text fontSize="sm" mt={6}>
        My Collections
      </Text>
      <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }} gap={{ base: 3 }} mt={2}>
        <GridItem colSpan={2}>
          <Accordion width="100%" allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton bg="gray.200">
                  <Box flex="1" textAlign="left" display="flex" alignItems="center">
                    <Icon as={AiOutlineStar} />
                    &nbsp; Starred
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={1} border="1px" borderColor="gray.200">
                <Grid templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(5, 1fr)' }} gap={{ base: 1 }} alignItems="center">
                  {starredCollections.map((collection) => (
                    <div key={collection.name}>
                      <GridItem colSpan={{ base: 2 }}>
                        <Image height={40} width={80} src={collection.image} alt="278A" />
                      </GridItem>
                      <GridItem colSpan={{ base: 1, md: 3 }}>
                        <Text fontSize="sm" fontWeight="semibold" mb={0} textAlign="left">
                          {collection.name}
                        </Text>
                      </GridItem>
                    </div>
                  ))}
                </Grid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton bg="gray.200">
                  <Box flex="1" textAlign="left">
                    Collection 1
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} />
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton bg="gray.200">
                  <Box flex="1" textAlign="left">
                    Collection 2
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} />
            </AccordionItem>
            <AccordionItem>
              <h2>
                <Input placeholder="Search..." borderRadius="none" bg="gray.200" />
              </h2>
            </AccordionItem>
          </Accordion>
        </GridItem>
        <GridItem colSpan={3}>
          <video
            style={{ width: '100%' }}
            src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzNkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--135e037ebeee45c66ccd61edff91ec50a7b3868f/061D-preview.webm"
            controls
            preload="none"
            poster="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1RZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1d3e9bb8d6f4134f057158bf5a898c6b1e1fba77/278A-thumbnail.webp"
          />
          <Flex justifyContent="space-between" alignItems="center" mt={4}>
            <Text fontWeight="bold" mt={2}>
              Cue 1.1-C
              <span>Ballroom Lights Up</span>
            </Text>
            <ButtonGroup spacing={2}>
              <Button variant="outline" colorScheme="blue" size={{ base: 'sm', md: 'md' }}>
                Skip Transition
              </Button>
              <Button colorScheme="blue" size={{ base: 'sm', md: 'md' }}>
                Transition to Next
              </Button>
            </ButtonGroup>
          </Flex>
          <Text fontStyle="italic" fontSize="sm" mt={4} textAlign="right">
            Next cue (p.6):
            <span>Lets go home</span>
          </Text>
        </GridItem>
      </Grid>
      <Text fontWeight="bold" mt={4} display="flex">
        Production 2 <span>&nbsp;- Cues</span>
      </Text>
      <Grid templateColumns={{ base: 'repeat(9, 1fr)' }} mt={0} bg="gray.200">
        <GridItem
          colSpan={1}
          display={{ base: 'none', md: 'flex' }}
          p={2}
          border="1px"
          borderColor="gray.300"
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
        />
        <GridItem
          colSpan={{ base: 2, md: 1 }}
          p={1}
          ml={{ base: 0, md: -0.75 }}
          border="1px"
          borderColor="gray.300"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
        >
          Cue&nbsp;#
        </GridItem>
        <GridItem
          colSpan={{ base: 3, md: 2 }}
          p={1}
          ml={-0.75}
          border="1px"
          borderColor="gray.300"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
        >
          Description
        </GridItem>
        <GridItem colSpan={1} p={1} ml={-0.75} border="1px" borderColor="gray.300" display="flex" flexDirection="column" justifyContent="center" textAlign="center">
          Page
        </GridItem>
        <GridItem colSpan={3} p={1} ml={-0.75} border="1px" borderColor="gray.300" display="flex" flexDirection="column" justifyContent="center" textAlign="center">
          Cue Line
        </GridItem>
        <GridItem
          display={{ base: 'none', md: 'flex' }}
          p={1}
          ml={-0.75}
          border="1px"
          borderColor="gray.300"
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
        />
      </Grid>
      <Accordion allowMultiple>
        <AccordionItem mt={-0.5}>
          <h2>
            <AccordionButton bg="gray.200" border="1px" borderColor="gray.300">
              <AccordionIcon />
              <Box flex="1" textAlign="left">
                Act 1, Scene 1
              </Box>
            </AccordionButton>
          </h2>

          <AccordionPanel p={0} pb={4} border="1px" borderColor="gray.300" mt={-0.5}>
            <Grid templateColumns="repeat(9, 1fr)">
              <GridItem colSpan={1} p={2} display={{ base: 'none', md: 'flex' }} flexDirection="column" justifyContent="center" textAlign="center">
                <Flex justifyContent="center" alignItems="center">
                  <Icon as={HamburgerIcon} mr={2} />
                  <Box border="1px" borderColor="gray.500" height={6} width={10} />
                </Flex>
              </GridItem>

              <GridItem colSpan={{ base: 2, md: 1 }} p={2} display="flex" flexDirection="column" justifyContent="center" textAlign="center">
                <Text fontSize="xs"> 10-A</Text>
              </GridItem>

              <GridItem colSpan={{ base: 3, md: 2 }} p={2} display="flex" flexDirection="column" justifyContent="center" textAlign="center">
                <Text fontSize="xs">Curtain Warmer</Text>
              </GridItem>

              <GridItem colSpan={1} p={2} display="flex" flexDirection="column" justifyContent="center" textAlign="center">
                <Text fontSize="xs">0</Text>
              </GridItem>

              <GridItem colSpan={3} p={2} display="flex" flexDirection="column" justifyContent="center" textAlign="center">
                <Text fontSize="xs">House is open</Text>
              </GridItem>

              <GridItem colSpan={1} p={2} display={{ base: 'none', md: 'flex' }} flexDirection="column" justifyContent="center" textAlign="center">
                <Flex justifyContent="center" alignItems="center">
                  <Icon as={GrCursor} mr={2} w={4} h={4} />
                  <Icon as={TbArrowsCross} w={4} h={4} />
                </Flex>
              </GridItem>
            </Grid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  </Layout>
);
export default Editor;
