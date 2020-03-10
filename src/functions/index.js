import FirebaseFunctions from 'firebase-functions'
import FirebaseTools from 'firebase-tools'
import Database, { Timestamp } from '@/firebase/index'

exports.create = FirebaseFunctions.firestore
    .document('rooms/{roomId}/contents/{docId}')
    .onCreate((snap, context) => {
        const database = Database.collection('rooms')
            .doc(context.params.roomId)
            .collection('contents')
            .doc(context.params.docId)

        database.update({
            timestamp: Timestamp
        })
})

exports.delete = FirebaseFunctions.firestore
    .document('rooms/{roomId}/contents')
    .onWrite((change, context) => {
        const data = change.after.data()
})