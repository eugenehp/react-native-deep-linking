import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {config} from './routes/config';

import {HomeScreen} from './screens/Home';
import {BillingScreen} from './screens/Billing';

const linking = {
  prefixes: ['https://app.reactivelions.com', 'billing-app://'],
  config,
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Billing" component={BillingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
