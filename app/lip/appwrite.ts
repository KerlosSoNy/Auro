import { Account, Client, ID } from 'react-native-appwrite';

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
    }catch(error){
        console.log(error)
    }
    
}