import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from '../menu/Search';
import SubwayInfoScreen from '../page/SubwayInfo';

const Stack = createNativeStackNavigator();

const NaviSearch = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="search"
                    component={SearchScreen}
                />
                <Stack.Screen name="실시간 역 정보" component={SubwayInfoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NaviSearch;