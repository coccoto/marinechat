import Firebase from 'firebase'
import Config from '@/firebase/config'

Firebase.initializeApp(Config)

export default Firebase.firestore()
export const Timestamp = Firebase.firestore.FieldValue.serverTimestamp()