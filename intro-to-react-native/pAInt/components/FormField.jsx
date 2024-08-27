import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import { React, useState } from 'react'
import { icons } from '../constants'

const FormField = ( { title, value, placeholder, handleChangeText, otherStyles, handlePress, ...props } ) => {
  const [showPassword, setShowPassword] = useState(false);
  const fulfillHandlePress = () => {
    if (!handlePress) return;
    try {
      handlePress()
    } catch (error) {
      Alert.alert('Error', error.message)
    }
  }
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className=" border-2 border-black-200 
                        rounded-2xl w-full h-16 px-4 
                        bg-black-100 items-center
                        focus:border-secondary flex-row"
      >
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          onSubmitEditing={fulfillHandlePress}
          secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image 
          source={!showPassword ? icons.eye : icons.eyeHide}
          className="w-6 h-6"
          resizeMode='contain'
          />
        </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField