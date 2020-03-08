import React, { useState } from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  const [redCounter, setRedCounter] = useState(0)

  return (
    <View>
      <Text>{color}</Text>
      <Button
        onPress={() => {
          onIncrease()
        }}
        title={`More ${color}`}
      />

      <Button
        onPress={() => {
          onDecrease()
        }}
        title={`Less ${color}`}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ColorCounter
