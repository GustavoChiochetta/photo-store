import firebase from 'firebase';

class FirebaseService {

    async authUser(email, password) {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    }

    async createNewUser(email, password) {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    async initialize() {
        const firebaseConfig = {
            apiKey: "AIzaSyDrbgBPJRU-cvRmtwnCy-HayZPi5ul-3jE",
            authDomain: "photo-store-fd99f.firebaseapp.com",
            databaseURL: "https://photo-store-fd99f.firebaseio.com",
            projectId: "photo-store-fd99f",
            storageBucket: "photo-store-fd99f.appspot.com",
            messagingSenderId: "1091268010305",
            appId: "1:1091268010305:web:55374ae0e3db7ada4701c0"
        };

        await firebase.initializeApp(firebaseConfig);
        console.log('inicializou');
    }

    async createNewCustomer(name, lastName, cpf) {
        await firebase.firestore().collection('customers').add({
            'name': name,
            'lastName': lastName,
            'cpf': cpf,
        })
    }

    async readData() {
        this.initialize();
        let data = [];
        let customerObject = {};
        await firebase.firestore().collection('customers').get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    customerObject = {
                        ...doc.data(),
                        id: doc.id,
                    }
                    data.push(customerObject);
                });
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            });
        return data;
    }
};

export default new FirebaseService();