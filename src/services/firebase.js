import firebase from '../firebase-config';

class FirebaseService {

    async userIsLogged() {
        const user = await firebase.auth().currentUser;
        return user;
    };

    async saveImage(files) {
        let file = files[0];
        let storageRef = firebase.storage().ref(file.name);
        let uploadTask = storageRef.put(file);
        await uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED)
    };
    async logout() {
        await firebase.auth().signOut();
    }

    async authUser(email, password) {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    }

    async createNewUser(email, password) {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    async createNewCustomer(name, lastName, cpf) {
        await firebase.firestore().collection('customers').add({
            'name': name,
            'lastName': lastName,
            'cpf': cpf,
        })
    }

    async readData() {
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