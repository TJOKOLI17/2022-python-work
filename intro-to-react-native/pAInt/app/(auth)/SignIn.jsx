import { View, Text, ScrollView, Image, Alert } from 'react-native'
import { React, useState } from 'react'
import  { SafeAreaView }  from 'react-native-safe-area-context'
import  { images }  from '../../constants'
import  FormField from '../../components/FormField'
import  CustomButton from '../../components/CustomButton'
import  { Link, router }  from 'expo-router'
import { getCurrentUser, signIn } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'


const SignIn = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();
  const [form, setForm] = useState({
    email: '', 
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if(!form.email || !form.password){
      Alert.alert('Error', 'Please fill in all fields')
    }

    setIsSubmitting(true);
    try {
      await signIn(form.email, form.password)

      const result = await getCurrentUser();

      setUser(result)
      setIsLoggedIn(true)
      
      router.replace('/Home') // send the user to home page if account creation is successful.
    } catch (error) {
      Alert.alert('Error', error.message)
    }finally{
      setIsSubmitting(false) // regardless if sign up is complete, we want to set submitting to false as attempt is done.
    }

  }
  
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[80vh] px-4 my-6">
        <Image 
            source={images.logo} 
            className="w-[115px] h-[35px]"
            resizeMode="contain"
        />
        <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
          Log into pAInt
        </Text>

        <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({...form, email: e})}
          otherStyles="mt-7"
          keyboardType="email-address" //useful for autofilling emails
        />

        <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({...form, password: e})}
          otherStyles="mt-7"
          handlePress={submit}
        />

        <CustomButton
          title="Sign In"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />

        <View className="justify-center  pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-100 font-pregular">
            Don't have an account? {" "}
            <Link 
              href="/SignUp" 
              className=' text-lg font-psemibold text-secondary-100'>
              Sign Up
            </Link>
          </Text>
        </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn