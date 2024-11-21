import { TouchableOpacity } from 'react-native';
import {
  Center,
  ScrollView,
  VStack,
  Skeleton,
  Text,
  Heading,
  useToast,
} from 'native-base';
import ScreenHeader from '../Components/ScreenHeader';
import UserAvatar from '../Components/UserAvatar';
import React, { useState } from 'react';
import InputComponent from '../Components/InputComponent';
import ButtonComponent from '../Components/ButtonComponent';

import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { FileInfo } from 'expo-file-system';

const PHOTO_SIZE = 33;

const Profile: React.FC = () => {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState(
    'https://github.com/gabriellmatias.png'
  );
  const { show } = useToast();

  async function handleUserAvatarSelect() {
    setPhotoIsLoading(true);
    try {
      const selectedPhoto = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });
      if (selectedPhoto.canceled) {
        return;
      }
      if (selectedPhoto.assets[0].uri) {
        const photoInfo = (await FileSystem.getInfoAsync(
          selectedPhoto.assets[0].uri
        )) as FileInfo;
        if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
          return show({
            title: 'Image out of size',
            placement: 'top',
            description: 'max file size is 5MB.',
            bg: 'red.500',
          });
        }

        setUserPhoto(selectedPhoto.assets[0].uri);
        show({
          title: 'Image changed successfully',
          placement: 'top',
          bg: 'green.500',
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsLoading(false);
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Profile" />
      <ScrollView>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UserAvatar
              source={{ uri: userPhoto }}
              alt="Foto do usuário"
              size={PHOTO_SIZE}
            />
          )}
          <TouchableOpacity onPress={handleUserAvatarSelect}>
            <Text
              color="green.500"
              fontWeight="bold"
              fontSize="md"
              mt={2}
              mb={8}
            >
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <InputComponent bg="gray.600" placeholder="Nome" />

          <InputComponent bg="gray.600" placeholder="E-mail" isDisabled />
        </Center>
        <VStack px={10} mt={12} mb={9}>
          <Heading color="gray.200" fontSize="md" mb={2} fontFamily={'heading'}>
            Alterar senha
          </Heading>

          <InputComponent
            bg="gray.600"
            placeholder="Senha antiga"
            secureTextEntry
          />

          <InputComponent
            bg="gray.600"
            placeholder="Nova senha"
            secureTextEntry
          />

          <InputComponent
            bg="gray.600"
            placeholder="Confirme a nova senha"
            secureTextEntry
          />

          <ButtonComponent title="Atualizar" mt={4} />
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default Profile;
