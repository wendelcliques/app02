import firestore from 'firebase/firestore';
import firebase from './utils/Firebase'

export const addEntry = async entry => {

    let data = {};

    try {

     data = {
        name: "wendel",
    };

    await firestore()
    .collection('entries')
    .add(data)
} catch (error) {
    console.error(
        JSON.stringify(error)
    
    );
}

  return data;  
};