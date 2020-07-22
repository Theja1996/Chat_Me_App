/* eslint-disable prettier/prettier */
import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD5f31jaHSubEe32FcoDGUUkcCtl7JCRus',
  databaseURL: 'https://chatme-bfa7e.firebaseio.com/',
  projectID: 'chatme-bfa7e',
  appID: '1:26205014627:android:ba6f527f9851017b234656',
};

export default Firebase.initializeApp(firebaseConfig);
