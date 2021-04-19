import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Home: {id?: string};
  Billing: {id?: string};
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type BillingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Billing'
>;
export type BillingScreenRouteProp = RouteProp<RootStackParamList, 'Billing'>;
