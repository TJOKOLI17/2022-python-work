import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import { React, useState, useEffect } from 'react'
import { icons } from '../constants'
import { Video, ResizeMode } from 'expo-av'
import { addToFavorites, removeFromFavorites, getLikedPosts } from '../lib/appwrite'
import { useGlobalContext } from '../context/GlobalProvider'


const VideoCard = ({video: { title, thumbnail, video, creator: { username, avatar } }, videoId, refresh }) => {
    const { user } = useGlobalContext();
    const [play, setPlay] = useState(false)
    const [isBookmarked, setIsBookmarked] = useState(false)

    // Fetch the initial bookmark state when the component mounts
    useEffect(() => {
        const checkIfBookmarked = async () => {
            try {
                const likedPosts = await getLikedPosts(user.$id);
                const isVideoBookmarked = likedPosts.some(post => post.$id === videoId);
                setIsBookmarked(isVideoBookmarked);
            } catch (error) {
                console.error("Error checking bookmark status:", error);
            }
        };

        checkIfBookmarked();
    }, [videoId, user.$id]);
    
    const updateFavorites = async () => {
        const currentBookmarkedState = !isBookmarked // immediately gets the pseudo-updated version of "bookmarked" to use in the function
        setIsBookmarked(!isBookmarked) //state change occurs asynchronously

        if(currentBookmarkedState){
            try {
                await addToFavorites(videoId, user.$id)

            } catch (error) {
                Alert.alert("Error", error.message)
            }
            

        }else{
            try {
                await removeFromFavorites(videoId, user.$id)
            } catch (error) {
                Alert.alert("Error", error.message)
            }
        }

        if(refresh) await refresh();

    }
    return (
    <View className="flex-col items-center px-4 mb-14">
        <View className="flex-row gap-3 items-start">
            <View className="justify-center items-center flex-row flex-1">
                <View className="w-[46px] h-[46px] rounded-lg border border-secondary-100 justify-center items-center p-0.5">
                    <Image
                        source={ {uri: avatar} }
                        className="w-full h-full rounded-lg"
                        resizeMode='cover'
                    />
                </View>

                <View className="justify-center flex-1 ml-3 gap-y-1">
                    <Text 
                        className="text-white txt-sm font-psemibold" 
                        numberOfLines={1}>
                        {title}
                    </Text>
                    <Text className="text-ss text-gray-100 font-pregular">{username}</Text>
                </View>
            </View>

            <View className="pt-2 flex-row gap-1">
                <TouchableOpacity
                    onPress={updateFavorites} //add/remove video to/from bookmark page
                >
                    <Image
                        source={isBookmarked ? icons.checkmark : icons.bookmark}
                        className="w-5 h-5 "
                        resizeMode='contain'
                    /> 
                </TouchableOpacity>
                <Image
                    source={icons.menu}
                    className="w-5 h-5 mr-2"
                    resizeMode='contain'
                />
            </View>

        </View>

        {
            play ? (
                <Video
                    source={{uri: video}}
                    className="w-full h-60 rounded-xl mt-3"
                    resizeMode={ResizeMode.CONTAIN}
                    useNativeControls
                    shouldPlay
                    onPlaybackStatusUpdate={(status) => {
                    if(status.didJustFinish){
                        setPlay(false)
                    }
                    }}
                />
            ) : ( 
                <TouchableOpacity 
                    className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
                    activeOpacity={0.7}
                    onPress={() => {setPlay(true)}}
                >
                    <Image
                        source={ {uri: thumbnail} } // uri is used when image is a url
                        className="w-full h-full rounded-xl mt-3"
                        resizeMethod='cover'
                    />

                    <Image
                        source={ icons.play }
                        className="w-12 h-12 absolute"
                        resizeMethod='contain'
                    />
                </TouchableOpacity>
                )
        }

    </View>
    )
}

export default VideoCard