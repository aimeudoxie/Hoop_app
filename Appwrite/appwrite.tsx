import {Client, Account , Databases} from "react-native-appwrite"


const client = new Client();
client
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('6626c4c8dc6c9eb635aa')


const databases = new Databases(client);

const account = new Account(client)

export { databases, account}