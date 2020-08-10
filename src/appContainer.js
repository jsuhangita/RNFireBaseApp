import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Auth} from "./Routes";

const Stack = createStackNavigator();

export default class App extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <NavigationContainer>
                <View style={styles.wrapper}>
                    <View style={styles.container}>
                        <Stack.Navigator
                            headerMode={'none'}
                        >
                            <Stack.Screen name="Auth" component={Auth}/>
                        </Stack.Navigator>
                    </View>
                </View>
            </NavigationContainer>
        );
    }

}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },

    container: {
        flex: 1,
    },
});
