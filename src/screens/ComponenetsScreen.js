import React from 'react'
import { Text, StyleSheet } from 'react-native'

const ComponentsScreen = props => {
  return <Text style={styles.text}>Components Screen!</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

export default ComponentsScreen
