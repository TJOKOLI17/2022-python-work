import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import { React, useState } from 'react'
import { icons } from '../constants'
import { usePathname, router } from 'expo-router'
import { searchPosts } from '../lib/appwrite'

const SearchInput = ({ initialQuery }) => {
  const pathname = usePathname()
  const [query, setQuery] = useState(initialQuery)
  const handleSearch = () => {
    if(!query){
      return Alert.alert('Empty Search', "Please input text to generate search results")
    }
    if(pathname.startsWith('/search')){
      router.setParams({ query })
    }else{
      router.push(`/search/${query}`)
    }
  }
  
  return (
      <View className=" border-2 border-black-200 
                        rounded-2xl w-full h-16 px-4 
                        bg-black-100 items-center
                        focus:border-secondary flex-row space-x-4"
      >
        <TextInput
          className="text-base mt-0.5 text-white flex-1 font-pregular"
          value={ query }
          placeholder="Search for a video topic"
          placeholderTextColor="#CDCDE0"
          onChangeText={(e) => setQuery(e)}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity
          onPress={handleSearch}
        >
            <Image
                source={icons.search}
                className='w-5 h-5'
                resizeMode='contain'
            />
        </TouchableOpacity>
      </View>
  )
}

export default SearchInput