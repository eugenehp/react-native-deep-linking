import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Button} from '../components/Button';
import {Container} from '../components/Container';
import {Hero} from '../components/Hero';
import {HomeScreenNavigationProp} from '../routes/props';

type Props = {
  navigation: HomeScreenNavigationProp;
};

export const HomeScreen: React.FC<Props> = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <Hero>Welcome 👋</Hero>
          <Button
            title="Go to billing 💸"
            onPress={() => props.navigation.navigate('Billing')}
          />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};
