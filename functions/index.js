const FirebaseFunctions = require('firebase-functions')
const FirebaseAdmin = require('firebase-admin')

FirebaseAdmin.initializeApp()
const database = FirebaseAdmin.firestore()

exports.write = FirebaseFunctions.firestore
    .document('rooms/{roomId}/contents/{docId}')
    .onWrite((change, context) => {
        const roomRef = database.collection('rooms')
            .doc(context.params.roomId)
            .collection('contents')
            .doc(context.params.docId)

        const date = new Date()
        const diff = 0

        const old = roomRef.orderBy('date', 'desc').limit(1).onSnapshot((snapshot) => {
            snapshot.forEach((doc) => {
                const ref = doc.data()

                // 最終送信日時を取得する。
                const date = ref.date

                // 差分を取得する。
                
            })
        })

        const document = database.collection('rooms')
            .doc(context.params.roomId)
            .collection('contents')
            .doc(context.params.docId)

        document.update({
            timestamp: timestamp
        })
    }
)