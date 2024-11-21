import { HStack, Heading, Image, Text, VStack, Icon } from 'native-base';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const ExerciceCard: React.FC<TouchableOpacityProps> = ({ ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg={'gray.500'}
        alignItems={'center'}
        p={2}
        pr={4}
        rounded={'md'}
        mb={3}
      >
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvY166D7fsOlbs2lDVFFmcGymIcXHpYQ8kfG3j5FkG8Ks8CE7GOgjAoghRRI83j32to_M&usqp=CAU',
          }}
          alt="Img Queimada Unilateral"
          w={16}
          h={16}
          rounded={'md'}
          mr={4}
          resizeMode="cover"
        />
        <VStack flex={1}>
          <Heading fontSize={'lg'} color={'white'} fontFamily={'heading'}>
            Queimada Unilateral
          </Heading>
          <Text fontSize={'sm'} color={'gray.200'} mt={1} numberOfLines={2}>
            3 series of 12 repetitions
          </Text>
        </VStack>
        <Icon as={Entypo} name="chevron-thin-right" color={'gray.300'} />
      </HStack>
    </TouchableOpacity>
  );
};

export default ExerciceCard;
