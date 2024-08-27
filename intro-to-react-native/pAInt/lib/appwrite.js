import { Client, Account, ID, Avatars, Databases, Query, Storage  } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.tjokoli17.pAInt',
    projectId: '66adace2002acb950e00',
    databaseId: '66adb4ea002ce2bdbb83',
    userCollectionId: '66adb4fb002d4b219917',
    videoCollectionId: '66adb509001210a824a9',
    storageId: '66adb35d000811d54f4f'
}

const {
    endpoint,
    platform,
    projectId,
    databaseId, 
    userCollectionId, 
    videoCollectionId,
    storageId,
} = appwriteConfig

const client = new Client();

client
    .setEndpoint(endpoint) // Your Appwrite Endpoint
    .setProject(projectId) // Your project ID
    .setPlatform(platform) // Your application ID or bundle ID.



const account = new Account(client);
const avatars = new Avatars(client)
const databases = new Databases(client)
const storage = new Storage(client)

export const createUser = async (email, password, username) => {
    // Register User
    try {
        const newAccount = await account.create(ID.unique(), email, password, username);

        if(!newAccount) throw Error
        const avatarURL = avatars.getInitials()
        await signIn(email, password)
        
        const newUser = await databases.createDocument(
            databaseId, 
            userCollectionId, 
            ID.unique(),
        {
            accountId: newAccount.$id,
            email,
            username,
            avatar: avatarURL
        })

        return newUser

    } catch (error) {
        console.log(error);
        throw new Error(error)
        
    } 
}

export const  signIn = async (email, password) => {
    try {
        // Attempt to create a new session
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        if (error.message.includes('Creation of a session is prohibited when a session is active.')) {
            console.log('Session already active. Using existing session.');
            return; // Optionally, return something to indicate the session is active
        } else {
            console.error('Error signing in:', error);
            throw new Error(error.message);
        }
    }
}


export const signOut = async () => {
    try {
        const session = await account.deleteSession('current')
        return session
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

export const getCurrentUser = async () => { // possibly causing unhandled rejection
    try {
        const currentAccount = await account.get();

        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            //find user in database and confirm they are an existing user.
            databaseId, 
            userCollectionId,
            [Query.equal('accountId', currentAccount.$id)] //specifies how you want to get the data
        )

        if(!currentUser) throw Error;
        return currentUser.documents[0]
        
    } catch (error) {
        console.log(error);
        throw new Error(error)
        
        
    }
}

export const getAllPosts = async () => {
    try {
        const posts = await databases.listDocuments(databaseId, videoCollectionId, [Query.orderDesc('$createdAt')])
        return posts.documents;
    } catch (error) {
        console.log(error);
        
        throw new Error(error)
    }
}

export const getLatestPosts = async () => {
    try {
        const posts = await databases.listDocuments(databaseId, videoCollectionId, 
                                                    [Query.orderDesc('$createdAt', Query.limit(7))])
        return posts.documents;
    } catch (error) {
        console.log(error);
        
        throw new Error(error)
    }
}

export const searchPosts = async (query) => {
    try {
        const posts = await databases.listDocuments(databaseId, videoCollectionId, 
                                                    [Query.search('title', query)])
        return posts.documents;
    } catch (error) {
        console.log(error);
        
        throw new Error(error)
    }
}

export const getMyPosts = async (userId) => {
    try {
        const posts = await databases.listDocuments(databaseId, videoCollectionId, 
                                                    [Query.equal('creator', userId), Query.orderDesc('$createdAt')])
        return posts.documents;
    } catch (error) {
        console.log(error);
        
        throw new Error(error)
    }
}

export const getFilePreview = async (fileId, type) => {
    
    let fileURL
    try {
        if(type === "video"){
            fileURL = storage.getFileView(storageId, fileId)
        }else if(type === "image")
            fileURL = storage.getFileView(storageId, fileId, 2000, 2000, 'top', 100)
        else{
            throw new Error("Invalid file type")
        }

        if(!fileURL){
            throw new Error("No file URL found")
        }

        return fileURL
    } catch (error) {
        throw new Error(error)
    }
}

export const uploadFile = async (file, type) => {
    if(!file) return;
    const asset = {
                    name: file.fileName,
                    type: file.mimeType,
                    size: file.fileSize,
                    uri: file.uri
                };

    // console.log('FILE', file);
    
    try {
        const uploadedFile = await storage.createFile(storageId, ID.unique(), asset) // create the file in Appwrite database
        const fileUrl = await getFilePreview(uploadedFile.$id, type) // get preview of the file
        
        // console.log('UPLOADED', uploadedFile)
        return fileUrl

    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

export const createVideo = async (form) => {
    try {
        const [thumbnailUrl, videoUrl] = await Promise.all([
            uploadFile(form.thumbnail, 'image'),
            uploadFile(form.video, 'video')
        ])

        // console.log(`thumbnailURL in createVideo: ${thumbnailUrl}`);
        

        const newPost = await databases.createDocument(databaseId, videoCollectionId, ID.unique(), 
        {
            title: form.title,
            thumbnail: thumbnailUrl,
            video: videoUrl,
            prompt: form.prompt,
            creator: form.userId
        })
        return newPost
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

export const addToFavorites = async (videoId, userId) => {
    try {
        const video = await databases.getDocument(databaseId, videoCollectionId, videoId)

        if(!video){
            throw new Error("video not found")
        }

        let likedUsers = video.liked || [];
        if(!likedUsers.includes(userId)){
            likedUsers.push(userId)
            const updatedVideo = await databases.updateDocument(databaseId, videoCollectionId, videoId, {liked: likedUsers})
            return updatedVideo;
        }

    } catch (error) {
        throw new Error(error);
    }
}

export const removeFromFavorites = async (videoId, userId) => {   
    try {
        const video = await databases.getDocument(databaseId, videoCollectionId, videoId)

        if(!video){
            throw new Error("video not found")
        }

        let likedUsers = video.liked || [];
        
        
        let newLikedUsers = likedUsers.filter(user => user.$id !== userId)
        const updatedVideo = await databases.updateDocument(databaseId, videoCollectionId, videoId, {liked: newLikedUsers})
        
        return updatedVideo;

    } catch (error) {
        throw new Error(error);
    }
}

export const getLikedPosts = async (userId) => {
    try {
        // Fetch all posts
        const response = await databases.listDocuments(databaseId, videoCollectionId, [Query.orderDesc('$createdAt')]);
        const posts = response.documents;
        
        const likedPosts = posts.filter((post) => post.liked && post.liked.some(user => user.$id === userId))

        // console.log(likedPosts);
        
        return likedPosts;

    } catch (error) {
        throw new Error(error);
    }
}

