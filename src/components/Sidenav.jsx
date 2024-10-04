import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { BsArrowDownUp } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";

const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transactions",
    },
  ];

  return (
    <Stack boxShadow="sm" maxW="16rem" h="100vh" bg="red">
      <Heading textAlign="center" fontSize="20px" as="h1" pt="56px">
        Buy Some Bitcoin
      </Heading>
      <Box mt="6" mx="3">
        {navLinks.map((nav) => (
          <HStack key={nav.text}>
            <Icon as={nav.icon} />
            <Text>{nav.text}</Text>
          </HStack>
        ))}
      </Box>
    </Stack>
  );
};

export default Sidenav;
