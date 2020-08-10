import React ,{ Component } from 'react';
import {View, Text, StyleSheet, SafeAreaView, Alert} from 'react-native';
import {SocialIcon, Input, Button} from "react-native-elements";
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';




export default class Login extends Component{
    constructor(props) {
        super(props);
        this._onFacebookButtonPress = this._onFacebookButtonPress.bind(this);
        this._onPressLogin = this._onPressLogin.bind(this);
        this.state={
            email:'',
            password:''
        }
    }

    async _onFacebookButtonPress() {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }

        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw 'Something went wrong obtaining access token';
        }

        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(facebookCredential);
    }

    async _onPressLogin(){
        try {
            const { email,password } = this.state;
            const  res = await auth().createUserWithEmailAndPassword(email, password)
            Alert.alert('Login Success');
            console.log(res);
        }catch (e) {
            Alert.alert('Login Failed')
        }
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
                                onPress={this._onFacebookButtonPress}
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
                        onChangeText={(value)=>{this.setState({email:value})}}
                    />
                    <Input
                        placeholder='Password'
                        placeholderTextColor={'grey'}
                        inputContainerStyle={styles.input}
                        onChangeText={(value)=>{this.setState({password:value})}}
                        textContentType={'password'}
                        autoCompleteType={'password'}
                        secureTextEntry={true}
                    />
                    <Button
                        raised
                        title="Login"
                        onPress={this._onPressLogin}
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