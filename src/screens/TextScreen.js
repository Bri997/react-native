import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
  const [password, setPassword] = useState('')

  const textLength = password.length

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newText => {
          setPassword(newText)
        }}
      />

      {textLength > 5 ? null : (
        <Text>Password Must Be longer than 5 characters </Text>
      )}
      <Text>My Pass is {password}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
})

export default TextScreen
