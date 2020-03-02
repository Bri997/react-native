import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 45 },
    { name: 'Friend #3', age: 55 },
    { name: 'Friend #4', age: 23 },
    { name: 'Friend #5', age: 44 },
    { name: 'Friend #6', age: 33 }
  ]

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={style.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        )
      }}
    />
  )
}

const style = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
})

export default ListScreen
