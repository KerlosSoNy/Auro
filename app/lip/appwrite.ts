import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint : 'https://cloud.appwrite.io/v1',
    platform : 'com.zoniix.aora',
    projectId:'66c0afc3003a57313cbb',
    databaseId:'66c0b0c90031205dc140',
    userCollectionId:'66c0b0de00216818a314',
    videoCollectionId:'66c0b0f50019409ae385',
    storageId:'66c0b2ab003ca0dacba9'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
interface ICreateUser {
    data: {
        email: string,
        password: string
        username: string
    } 
}
// Register User
export const CreateUser = async ({data}:ICreateUser) => {
    try{
        const newAccount = await account.create(
            ID.unique(),
            data.email,
            data.password,
            data.username
        )
        const avatarUrl = avatars.getInitials(data.username)
        await signIn({data: {email: data.email, password: data.password}})

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                username: data.username,
                email: data.email,
                avatar: avatarUrl
            }
        )

        return newUser
    }catch(error){
        console.log(error)
    }
    
}

export const signIn = async({data}: {data:{email: string, password: string}})=>{
    try{
        const promise = account.createEmailPasswordSession(data.email, data.password);
        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
    }catch(error:any){
        throw new Error(error)
    }
}

export const getCurrentUser = async () => {
    try{
        const currentAccount:any = account.get();
        if(!currentAccount) throw new Error('User not logged in') 

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [
                Query.equal('accountId', currentAccount.$id)
            ]
        )
        if (!currentUser) throw new Error('User not found')

        return currentUser.documents[0]
    }catch(error:any){
        throw new Error(error)
    }
}