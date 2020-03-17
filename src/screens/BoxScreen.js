import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    backgroundColor: 'red',
    height: 50,
    width: 50
  },
  viewTwoStyle: {
    backgroundColor: 'green',
    alignSelf: 'center',
    height: 50,
    width: 50
  },
  viewThreeStyle: {
    backgroundColor: 'purple',
    height: 50,
    width: 50
  }
})
export default BoxScreen
