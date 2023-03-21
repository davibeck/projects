import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Davi Becker</Text>
          <Text color="gray.300" fontSize="small">
            davi.becker@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Davi Becker"
        src="https://github.com/davibeck.png"
      />
    </Flex>
  );
}
