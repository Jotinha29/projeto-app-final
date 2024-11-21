import { Center, Spinner } from 'native-base';
import React from 'react';

const LoadingComponent: React.FC = () => {
  return (
    <Center flex={1} bg="gray.700">
      <Spinner color="green.500" />
    </Center>
  );
};

export default LoadingComponent;
