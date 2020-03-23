const FirebaseFunctions = require('firebase-functions')
const FirebaseAdmin = require('firebase-admin')

FirebaseAdmin.initializeApp()
const database = FirebaseAdmin.firestore()
const timestamp = FirebaseAdmin.firestore.FieldValue.serverTimestamp()

exports.write = FirebaseFunctions.firestore
    .document('rooms/{roomId}/contents/{docId}')
    .onWrite((change, context) => {
        const document = database.collection('rooms')
            .doc(context.params.roomId)
            .collection('contents')
            .doc(context.params.docId)

        
    }
)