import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { FaCircleUser } from "react-icons/fa6";

const TopNav = ({title}) => {
  return (
    <Box>
      <HStack maxW="70rem" h="16" justify="space-between" mx="auto">
        <Heading fontWeight="medium" fontSize="28px">{title}</Heading>
        <Menu>
          <MenuButton>
            <Icon as={FaCircleUser} fontSize="24px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Support</MenuItem>
            <MenuItem>Log Out</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
