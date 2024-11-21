import { Heading, HStack, Text, VStack } from 'native-base';
import React from 'react';

const HistoryCard: React.FC = () => {
  return (
    <HStack
      w="full"
      px={5}
      py={4}
      mb={3}
      bg="gray.600"
      rounded="md"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack mr={5} flex={1}>
        <Heading
          color="white"
          fontSize="md"
          textTransform="capitalize"
          numberOfLines={1}
          fontFamily="heading"
        >
          Costas
        </Heading>
        <Text color="gray.100" fontSize="lg" numberOfLines={1}>
          Puxada frontal
        </Text>
      </VStack>
      <Text color="gray.300" fontSize="md">
        08:56
      </Text>
    </HStack>
  );
};

export default HistoryCard;
