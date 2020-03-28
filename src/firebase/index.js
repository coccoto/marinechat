import * as Firebase from 'firebase/app'
import 'firebase/firestore'
import config from '@/firebase/config'

Firebase.initializeApp(config)

export default Firebase.firestore()
export const Timestamp = Firebase.firestore.FieldValue.serverTimestamp()