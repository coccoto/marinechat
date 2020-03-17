import * as Firebase from 'firebase/app'
import 'firebase/firestore'
import Config from '@/firebase/config'

Firebase.initializeApp(Config)

export default Firebase.firestore()
export const Timestamp = Firebase.firestore.FieldValue.serverTimestamp()