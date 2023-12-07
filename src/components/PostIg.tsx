import {
  Card,
  Image,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  Button,
} from "@chakra-ui/react";

const PostIg = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://media3.giphy.com/media/xUPGcwzfZtKfPiG8jm/giphy.gif?cid=ecf05e47vt404s5zfw5h7y8t9jwvfi37z5k3mo6pe3348eio&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Upload Picture</Heading>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant="solid" colorScheme="blue" size="lg">
          Upload
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostIg;
