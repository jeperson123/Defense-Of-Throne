import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import Topics from '../../components/Topics';
import { images } from '../../constants';




const community = () => {
  return (
    <SafeAreaView className = "bg-secondary-500 h-full">
      <ImageBackground source={images.defense}></ImageBackground>
    </SafeAreaView>
  )
}

export default community