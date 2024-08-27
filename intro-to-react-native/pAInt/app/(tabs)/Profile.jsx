import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { React } from 'react'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import useAppwrite from '../../lib/useAppwrite'
import { getMyPosts, signOut } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'
import { icons } from '../../constants'
import InfoBox from '../../components/InfoBox'

//custom Components
import EmptyState from '../../components/EmptyState'
import VideoCard from '../../components/VideoCard'

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const {data: myPosts} = useAppwrite( () => getMyPosts(user.$id) )
  const logout = async () => {
    await signOut()
    setUser(null)
    setIsLoggedIn(false)
    router.replace('/SignIn')
  }
  
  return (
    <SafeAreaView className=" bg-primary h-full">
      <FlatList
        data={myPosts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => ( //dicates what component will be rendered from the data
          <VideoCard
            video={item}
          />
        )}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              className="w-full items-end mb-10"
              onPress={logout}
            >
              <Image
                source={icons.logout}
                className="w-6 h-6"
                resizeMode='contain'
              />
            </TouchableOpacity>

            <View className="w-16 h-16 border border-secondary rounded-lg justify-center items-center">
            <Image
                source={{ uri: user?.avatar }} 
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode='cover'
              />
            </View>
            <InfoBox
                title={user?.username}
                containerStyles="mt-5"
                titleStyles="text-lg"
            />
            <View className="mt-5 flex-row">
              <InfoBox
                  title={myPosts.length || 0}
                  subtitle="Posts"
                  containerStyles="mr-10"
                  titleStyles="text-xl"
              />
              <InfoBox
                  title="1.7M"
                  subtitle="Followers"
                  titleStyles="text-xl"
              />

            </View>

          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this search"
            buttonTitle="Go Back"
            pageNavigate=""

          />
        )}
      />
    </SafeAreaView>
  )
}

export default Profile