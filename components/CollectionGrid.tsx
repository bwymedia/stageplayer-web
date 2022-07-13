import React from 'react';
import Image from 'next/image';
import { Grid, GridItem, Box } from '@chakra-ui/react';

const CollectionGrid = () => (
  <Grid templateColumns="repeat(3, 1fr)" gap={2} mt={2}>
    <GridItem>
      <Box height="65px" width="100%" position="relative">
        <Image
          layout="fill"
          src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa0RZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d60fa5d7e05f2761ce5948d43c3ab4511f2fd424/400A-thumbnail.webp"
          alt="50s Diner"
        />
      </Box>
    </GridItem>
    <GridItem>
      <Box height="65px" width="100%" position="relative">
        <Image
          layout="fill"
          src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzdkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--349c0bc6a117a0834c15b9d89de018519857614e/061D-thumbnail.webp"
          alt="50s Diner"
        />
      </Box>
    </GridItem>
    <GridItem>
      <Box height="65px" width="100%" position="relative">
        <Image
          layout="fill"
          src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcURaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c1ef9392a4c97a2e8b497040b471e19496cdee7f/341A-thumbnail.webp"
          alt="50s Diner"
        />
      </Box>
    </GridItem>
  </Grid>
);
export default CollectionGrid;
