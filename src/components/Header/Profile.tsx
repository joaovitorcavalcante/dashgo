import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box>
          <Text>João Barbosa</Text>
          <Text color="gray.300" fontSize="small">
            jvcb.dev@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" ml="2" name="Joao Barbosa" />
    </Flex>
  );
}
