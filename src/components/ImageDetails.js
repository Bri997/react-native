import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = props => {
  //  console.log(props)
  //Or I could remove props and just use imageSource title and imageScore

  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
      <Text>Image score: {props.imageScore}</Text>
    </View>
  )
}

const style = StyleSheet.create({})

export default ImageDetail
