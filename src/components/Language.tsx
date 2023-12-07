import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
  Image,
  Flex,
} from "@chakra-ui/react";

const Language = () => {
  const Engflag =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png";
  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Image src={Engflag} width="100px" height="60px" />
      </PopoverTrigger>
      <Portal>
        <PopoverContent w="240px">
          <PopoverArrow />
          <PopoverHeader>เลือกภาษา</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <Flex justifyContent="space-between">
              <Button colorScheme="blue">Thai</Button>
              <Button colorScheme="red">English</Button>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default Language;
