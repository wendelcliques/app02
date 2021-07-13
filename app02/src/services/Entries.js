import 'firebase/firestore';
import firebase from './../utils/Firebase'

export const addEntry = async () => {

    let data = {};

    try {

     data = {
        name: "wendel",
    };

    await firebase.firestore()
    .collection('entries')
    .add(data)
} catch (error) {
    console.error(
        JSON.stringify(error)
    ,
    alert('Deu erro',JSON.stringify(error))
    
    );
}

  return data;  
};