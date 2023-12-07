import { Flex, HStack, Image, Spacer, Center } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import Language from "./Language";

const NavBar = () => {
  const logo =
    "https://t3.ftcdn.net/jpg/03/82/52/88/360_F_382528893_kscSzE6TPttL5vhWQbyRkvKa58y8pA3P.jpg";
  return (
    <Flex marginTop={2}>
      <Image src={logo} boxSize="60px" marginLeft={5} />
      <Center marginLeft={5} fontSize="3xl" fontWeight="bold">
        Ed's Project
      </Center>
      <Spacer />
      <HStack justifyContent="space-between">
        <Language />
        <ColorModeSwitch />
      </HStack>
    </Flex>
  );
};

export default NavBar;
