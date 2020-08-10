import React ,{ Component } from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {SocialIcon, Input, Button} from "react-native-elements";


export default class Login extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.title}>Log In</Text>
                    <View style={styles.socialIconContainer}>
                        <View style={styles.socialButtonContainer}>
                            <SocialIcon
                                title='Facebook'
                                button
                                type='facebook'
                            />
                        </View>
                        <View style={styles.socialButtonContainer}>
                            <SocialIcon
                                title='Twitter'
                                button
                                type='twitter'
                            />
                        </View>
                    </View>
                    <Text style={styles.orLoginText}>Or Login with email</Text>
                    <Input
                        placeholder='Your email'
                        placeholderTextColor={'grey'}
                        inputContainerStyle={styles.input}
                    />
                    <Input
                        placeholder='Password'
                        placeholderTextColor={'grey'}
                        inputContainerStyle={styles.input}
                    />
                    <Button
                        raised
                        title="Login"
                    />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      padding:16,
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        marginBottom:20,
    },
    socialIconContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20,
    },
    socialButtonContainer:{
        flex:1
    },
    orLoginText:{
        textAlign:'center',
        fontSize:13,
        color:'grey',
        marginBottom:20,
    },
    input:{
        borderRadius:30,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom:13,
        borderBottomWidth: 0,
        paddingLeft:10,
        height:50
    }
})