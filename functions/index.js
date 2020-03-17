const FirebaseFunctions = require('firebase-functions')

exports.helloWorld = FirebaseFunctions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

/*
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
*/