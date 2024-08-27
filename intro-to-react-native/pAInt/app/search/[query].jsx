import { View, Text, FlatList } from 'react-native'
import { React, useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

//custom Components
import EmptyState from '../../components/EmptyState'
import SearchInput from '../../components/SearchInput'
import VideoCard from '../../components/VideoCard'
import useAppwrite from '../../lib/useAppwrite'
import { searchPosts } from '../../lib/appwrite'

const Search = () => {
  const { query } = useLocalSearchParams();
  const {data: searchResults, refetch} = useAppwrite( () => searchPosts(query) )
  

  useEffect(() => {
    refetch()
  }, [query])
  
  return (
    <SafeAreaView className=" bg-primary h-full">
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => ( //dicates what component will be rendered from the data
          <VideoCard
            video={item}
          />
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4">
            <Text className="font-pmedium text-sm text-gray-100">
              Search results
            </Text>
            <Text className="text-2xl font-psemibold text-white">
              {query}
            </Text>

            <View className="mt-6 mb-8">
              <SearchInput initialQuery={query}/>
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

export default Search