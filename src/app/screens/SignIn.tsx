import React from 'react';
import { Center, Heading, Image, Text, VStack, ScrollView } from 'native-base';
import BgImg from '@/assets/background.png';
import LogoSvg from '@/assets/logo.svg';
import InputComponent from '../Components/InputComponent';
import ButtonComponent from '../Components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '../routes/auth.routes';
import { useForm, Controller } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormDataProps = {
  password: string;
  email: string;
};

const signUpSchema = yup.object({
  password: yup.string().required('Inform the name'),
  email: yup.string().required('Informa an email').email('E-mail inválido'),
});

const SignIn: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormDataProps>({
    resolver: yupResolver(signUpSchema),
  });
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  function handleSignIn(data: SignInFormDataProps) {
    console.log(data);
  }

  function handleNewAccount() {
    navigate('signUp');
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <VStack px={10} flex={1} pb={16}>
        <Image
          alt="People Training"
          defaultSource={BgImg}
          source={BgImg}
          position="absolute"
          resizeMode="contain"
        />
        <Center marginY={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Train your mind and body 🏋️
          </Text>
        </Center>
        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Access your account
          </Heading>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <InputComponent
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <InputComponent
                placeholder="Password"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
              />
            )}
          />
          <ButtonComponent title="Access" onPress={handleSubmit(handleSignIn)} />
        </Center>

        <Center mt={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Don't have access yet?
          </Text>
          <ButtonComponent
            title="Create an account"
            variant="outline"
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
};

export default SignIn;
