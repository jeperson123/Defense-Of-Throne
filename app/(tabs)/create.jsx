import { View, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native';
import EmptyState from '../../components/EmptyState';
import { images } from '../../constants';




const Create = () => {
  return (
    <SafeAreaView className = "bg-secondary-500 h-full">
      <ImageBackground source={images.defense2} className = "h-full"></ImageBackground>
    </SafeAreaView>
  )
}

export default Create