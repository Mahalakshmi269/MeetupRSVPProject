// Import React
import React from 'react';

import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import RegistrationScreen from './DrawerScreens/RegistrationScreen';
import DetailsScreen from './DrawerScreens/DetailsScreen';
import ReportsScreen from './DrawerScreens/ReportsScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const registrationScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="RegistrationScreen">
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{
          title: 'Registration', 
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
    </Stack.Navigator>
  );
};

const detailsScreenStack = ({navigation}: Props) => {
  return (
    <Stack.Navigator
      initialRouteName="DetailsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
      }}>
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          title: 'Details', 
        }}
      />
    </Stack.Navigator>
  );
};

const detailsScreenStack = ({navigation}: Props) => {
  return (
    <Stack.Navigator
      initialRouteName="ReportsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="ReportsScreen"
        component={ReportsScreen}
        options={{
          title: 'Reports', 
        }}
      />
    </Stack.Navigator>
  );
};

interface Props {}
const DrawerNavigatorRoutes = <props: Props> => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: '#fff'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="registrationScreenStack"
        options={{drawerLabel: 'Registration Screen'}}
        component={registrationScreenStack}
      />
      <Drawer.Screen
        name="detailsScreenStack"
        options={{drawerLabel: 'Details Screen'}}
        component={detailsScreenStack}
      />
      <Drawer.Screen
        name="reportsScreenStack"
        options={{drawerLabel: 'Reports Screen'}}
        component={reportsScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;