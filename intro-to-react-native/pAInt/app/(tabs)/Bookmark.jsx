import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import { React, useState, useEffect, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFocusEffect } from 'expo-router'
import SearchInput from '../../components/SearchInput'
import EmptyState from '../../components/EmptyState'
import { getLikedPosts, getAllPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/VideoCard'
import { useGlobalContext } from '../../context/GlobalProvider'

const Bookmark = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext()
  const { data: likedPosts, refetch } = useAppwrite( () => getLikedPosts(user.$id) )
  // const { data: likedPosts, refetch} = useAppwrite(getAllPosts)

  // console.log(likedPosts);
  
   useFocusEffect(
        useCallback(() => {
            onRefresh();
        }, [user.$id])
    );
  
  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = async () => {
    setRefreshing(true)
    await refetch();
    setRefreshing(false)
  }
  return (
    <SafeAreaView className=" bg-primary h-full">
      <FlatList
        data={likedPosts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => ( //dicates what component will be rendered from the data
          <VideoCard
            video={item}
            videoId={item.$id}
            // InitialBookmarkedState={true}
            refresh={onRefresh}
          />
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
              <View className="mb-6">
                <Text className="text-2xl font-psemibold text-white">
                  Saved Videos
                </Text>
              </View>

              <SearchInput/>

          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Saved Videos Found"
            subtitle="Find exciting new videos and save them here!"
            buttonTitle="Go to Home"
            pageNavigate='/Home'
          />
        )}
        refreshControl={<RefreshControl 
                          refreshing={refreshing} 
                          onRefresh={onRefresh}
                        />}
      />
    </SafeAreaView>
  )
}

<SafeAreaView className="bg-primary h-full">
</SafeAreaView>

export default Bookmark