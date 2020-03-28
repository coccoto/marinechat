const FirebaseFunctions = require('firebase-functions')
const FirebaseAdmin = require('firebase-admin')

FirebaseAdmin.initializeApp()
const database = FirebaseAdmin.firestore()

exports.write = FirebaseFunctions.firestore
    .document('rooms/{roomId}/contents/{docId}')
    .onCreate((snap, context) => {
        const roomsRef = database.collection('rooms')

        roomsRef.getCollections().then((collections) => {
        })

        const deleteRoom = (roomId) => {
            const roomRefB = database.collection('rooms').doc(roomId).collection('contents')
            roomRefB.delete()
        }
    }
)

/*

doc(context.params.roomId)
            .collection('contents')
            .doc(context.params.docId)

*/