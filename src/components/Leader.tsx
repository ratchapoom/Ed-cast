import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const Leader = () => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        maxH={{ base: "100%", sm: "200px" }}
        src="https://media4.giphy.com/media/l0EwYc29XZnLR2pB6/giphy.gif?cid=ecf05e47qcn434p1xzvf2fkd06wjdqy4u22yuw6vktqoulfd&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt="Leader"
      />

      <CardBody>
        <HStack justifyContent="space-between">
          <Box>
            <Heading size="md">Leader Board</Heading>
            <Text py="2">Pay more to be a leader</Text>
          </Box>
          <Button variant="solid" colorScheme="blue" size="lg">
            visit
          </Button>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default Leader;
