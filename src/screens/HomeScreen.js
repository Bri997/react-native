import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
  //Could use (props) then do props.navigation.navigate but destruct the props arg
  return (
    <View>
      <Text style={styles.text}>Hi!!</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Image"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate('Counter')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

export default HomeScreen
