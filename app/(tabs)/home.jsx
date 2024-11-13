import { View, Text, FlatList, RefreshControl, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native';
import { icons, images } from '../../constants';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';
import VideoCard from '../../components/VideoCard';
import { TouchableOpacity } from 'react-native';










const Home = () => {

  const [refreshing, setrefreshing] = useState(false)

  const onRefresh = async () => {
    setrefreshing(true);
    //re call videos -> if any new videos appeard
    setrefreshing(false);
  }

  return (
    <SafeAreaView className = "bg-secondary-500  h-full">
      <ImageBackground source={images.defense1} className = "h-full">

      </ImageBackground>
  </SafeAreaView>
  )
}

export default Home