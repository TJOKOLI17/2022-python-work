import { StatusBar } from 'expo-status-bar'
import { Text, View, ScrollView, Image} from 'react-native'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'
import CustomButton from '../components/CustomButton'
import { useGlobalContext } from '../context/GlobalProvider'

// If built for iOS, View -> UIView
// If built for Androis, View -> AndroidView
// "scheme": "MySecondApp", --> allows app to be opened within a specific screen, directly from a url outside of the app, such as an email, webpage, etc.

export default function App() {
  const {isLoading, isLoggedIn} = useGlobalContext();

  if(!isLoading && isLoggedIn){
    return <Redirect href='/Home'/>
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image 
            source={images.logo} 
            className="w-[136px] h-[84px]"
            resizeMode="contain"
          />
          <Image 
            source={images.cards} 
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with {" "}
              <Text className="text-secondary-200">pAInt</Text>
            </Text>
            <Image 
              source={images.path} 
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8" 
              resizeMode='contain'
            />
          </View>
            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
              Where Man Meet Machine: Embark on 
              a Journey of Limitless Creation with pAInt
            </Text>
            <CustomButton
              title="Continue with Email"
              handlePress={() => {router.push('/SignIn')}}
              containerStyles="w-full mt-7"
            />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>

    /* <SafeAreaView className="flex-1 items-center justify-center bg-white">
    <Text className="text-3xl font-pblack">pAInt</Text>
    <StatusBar style="auto" />
    <Link href="/Home" style={{color: 'blue'}}>Go To Home</Link>
    </SafeAreaView> */

    // <SafeAreaView style={styles.container}> {/* ensures context is seen incase of notches*/}
    //   <Text>Hello React Native!</Text>
    //   <StatusBar style="auto" /> fvjif
    // </SafeAreaView>
  );
}
