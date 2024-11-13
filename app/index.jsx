import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView} from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { ImageBackground } from 'react-native';


export default function App() {
  return (
    <SafeAreaView className = "bg-white h-full">
      <ImageBackground 
        source={images.defense}
        className = "h-full"
      >
        <ScrollView contentContainerStyle = {{height:'100%'}} className = "mt-[250]">
        <View className = "w-full justify-center items-center min-h-[85vh] px-4">
          

          <View className = "relative mt- bg-red-950 w-full justify-center items-center">
            <Text className = "text-4xl text-white font-bold text-justify rounded-2xl">
              Defense Of Throne
               
            </Text>

          </View>
          
          
          

          <View className = "relative mb-3 bg-red-900 rounded-xl mt-4">
            <Text className = "text-sm text-gray-200 font-bold text-justify">
            Be ready to defend your throne, because war is comming !
            </Text>

          </View>

          <CustomButton 
            title= "Get Started"
            handlePress={() => {router.push('/sign-in')}}
            containerStyle= "w-full mt-1"
          />
        </View>

      </ScrollView>
      </ImageBackground>
      
      <StatusBar  backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}

