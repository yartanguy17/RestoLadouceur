import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import HomeScreen from '../screens/homeScreen/home'
import FoodListScreen from '../screens/foodScreens/foodCategory/categoryFoodList'
import SingleFood from'../screens/foodScreens/foodDetail/foodDetail'

const Stack = createNativeStackNavigator();

function MainNavigator(){

    return(
        <Stack.Navigator
            screenOptions={{
            headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
              }
          }}
        >
          <Stack.Screen name='Accueil' component={HomeScreen} />
          <Stack.Screen name='Menu' component={FoodListScreen}/>
          <Stack.Screen name='SingleFood' component={SingleFood}/>
      </Stack.Navigator>
    )
}

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Accueil'
      drawerStyle={{
        width: 250
      }}
      screenOptions={{headerShown: false}}
      // drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
    >
      <Drawer.Screen name='Accueil' component={MainNavigator} />
    </Drawer.Navigator>
  )
} 


 export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
} 
 

console.disableYellowBox = true;