import React , { Component } from 'react'
import { StyleSheet, Text, View, Image,
  TouchableWithoutFeedback, StatusBar,
  TextInput, SafeAreaView, Keyboard, 
  TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native'

export default class Login extends Component {
  constructor(props){
    super(props)

    this.state = {
      username : '',
      password : ''
    }

  }

  onLogin() {
    Alert.alert('Credentials', `${this.state.username} + ${this.state.password}`)
  }
  render(){
    return(
      <SafeAreaView style = { styles.container}>
      <KeyboardAvoidingView behavior="padding" style = { styles.container}>
      <TouchableWithoutFeedback style = { styles.container} onPress = {Keyboard.dismiss}>
        <View style = { styles.container} >
        <View style = { styles.logoContainer} >
          <Image style = { styles.logo } source = { require('../../../assets/logo.png')}>
          </Image>
          <Text style = { styles.title }>We cater all your Banking needs.</Text>
        </View>
        <View style = { styles.infoContainer} >
          <Text style = { styles.label }>Username</Text>
            <TextInput style = { styles.input } 
              placeholder = "Enter your username"
              value = { this.state.username }
              onChangeText = { (username) => this.setState({ username })}
              keyboardType = 'email-address'
              placeholderTextColor = '#d3d4d8'
              returnKeyType  = 'next'
              autoCorrect = { false }
              onSubmitEditing = { () => this.refs.txtPassword.focus()} />
          <Text style = { styles.label }>Password</Text>
          <TextInput style = { styles.input } 
              value = { this.state.password }
              onChangeText = { (password) => this.setState({ password })}
              placeholder = "Enter your password"
              returnKeyType = 'go'
              placeholderTextColor = '#d3d4d8'
              secureTextEntry = { true }
              autoCorrect = { false }
              ref = { "txtPassword"} />
          <TouchableOpacity style = { styles.buttonContainer } onPress = {this.onLogin.bind(this)}>
            <Text style = { styles.buttonTxt}> LOG IN </Text>
          </TouchableOpacity>
        </View>
      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#3241B1',
    flexDirection : 'column'
  },
  logoContainer:{
    alignItems : 'center',
    justifyContent : 'center',
    flex: 1
  },
  logo : {
    height: 50,
    width: 130
  },
  title: {
    color : 'white',
    fontSize: 18,
    textAlign : 'center',
    marginTop: 5,
    opacity : 0.9
  },
  infoContainer:{
    // backgroundColor: 'red',
    height: 250,
    left : 0,
    right: 0,
    bottom: 0,
    padding : 20,
    position: 'absolute'
  },
  label : {
    color : 'white',
    fontSize: 15,
    paddingTop : 10,
    paddingBottom: 5
  },
  input: {
    height: 40,
    paddingHorizontal : 10,
    backgroundColor: '#f3f4f74f',
    color : 'white',
    borderRadius: 12
  },
  buttonContainer : {
    backgroundColor : '#44A9C7',
    paddingVertical : 10,
    height: 40,
    borderRadius : 10,
    marginTop: 10
  },
  buttonTxt: {
    color : 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign : 'center'
  }
})