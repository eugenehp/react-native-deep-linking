import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Button} from '../components/Button';
import {Container} from '../components/Container';
import {Hero} from '../components/Hero';
import {
  BillingScreenNavigationProp,
  BillingScreenRouteProp,
} from '../routes/props';

type Props = {
  navigation: BillingScreenNavigationProp;
  route: BillingScreenRouteProp;
};

export const BillingScreen: React.FC<Props> = ({navigation, route}) => {
  let count = 0;
  if (route.params && route.params.id) count = parseInt(route.params.id, 10);

  let s = '';
  for (let i = 0; i < count; i++) s += '💸';

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          {count === 0 ? <Hero>No money</Hero> : <Hero>{s}</Hero>}

          <Button
            title="Go back home 🏠"
            onPress={() => navigation.navigate('Home')}
          />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};
