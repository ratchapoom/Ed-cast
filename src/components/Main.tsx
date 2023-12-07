import { SimpleGrid, Box } from "@chakra-ui/react";
import PostIg from "./PostIg";
import Leader from "./Leader";

const Main = () => {
  return (
    <>
      <SimpleGrid minChildWidth="300px" spacing="20px" padding={5}>
        <Box>
          <Leader />
        </Box>
      </SimpleGrid>
      <SimpleGrid
        minChildWidth="200px"
        spacing="20px"
        padding={5}
        marginTop={-5}
      >
        <Box>
          <PostIg />
        </Box>
        <Box>
          <PostIg />
        </Box>
        <Box>
          <PostIg />
        </Box>
        <Box>
          <PostIg />
        </Box>
        <Box>
          <PostIg />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Main;
