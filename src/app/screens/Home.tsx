import React, { useState } from 'react';
import { FlatList, HStack, Heading, Text, VStack } from 'native-base';
import HomeHeader from '../Components/HomeHeader';
import GroupComponent from '../Components/Group';
import ExerciceCard from '../Components/ExerciceCard';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '../routes/app.routes';

const Home: React.FC = () => {
  const [groups, setGroups] = useState(['Backs', 'Shoulders', 'Triceps', 'Biceps']);
  const [exercices, setExercices] = useState(['Exem1', 'Exem2', 'Exem3', 'Exem4']);
  const [groupSelected, setGroupSelected] = useState('Backs');
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciseDetails() {
    navigate('exercice');
  }

  return (
    <VStack>
      <HomeHeader />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupComponent
            name={item}
            onPress={() => setGroupSelected(item)}
            isActive={String(groupSelected).toUpperCase() === String(item).toUpperCase()}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        maxH={10}
        minH={10}
        my={10}
      />
      <VStack px={8}>
        <HStack justifyContent="space-between" mb={4}>
          <Heading color="gray.200" fontSize="md">
            Exercices
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {exercices.length}
          </Text>
        </HStack>
        <FlatList
          data={exercices}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ExerciceCard onPress={handleOpenExerciseDetails} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
};

export default Home;
