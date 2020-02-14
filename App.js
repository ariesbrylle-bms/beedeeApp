import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Login from './src/components/Login/Login'

export default class App extends Component {
  render () {
    return (
        <Login/>
    )
  }
}

const styles = StyleSheet.create({
  body : {
    alignContent: 'center',
    alignItems: 'center',
    flex : 1,
    justifyContent : 'center'
  },
  text: {
    color : 'black'
  }
})