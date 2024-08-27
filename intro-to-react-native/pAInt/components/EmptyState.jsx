import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '../constants'
import { router } from 'expo-router'
import CustomButton from './CustomButton'

const EmptyState = ({ title, subtitle, buttonTitle, pageNavigate }) => {

  const handlePress = () => {
    if (pageNavigate === ""){
      router.back()
    }else{
      router.push(pageNavigate)
    }
  }
  return (
    <View className=" justify-center items-center px-4">
        <Image
            source={images.empty}
            className="w-[270px] h-[250px]"
            resizeMode='contain'
        />
        <Text className="text-xl text-center font-psemibold text-white mt-2">{title}</Text>
        <Text className="pmedium text-gray-100 text-sm">{subtitle}</Text>
        <CustomButton
            title={buttonTitle}
            handlePress={handlePress}
            containerStyles="w-full my-5"
        />
    </View>
  )
}

export default EmptyState