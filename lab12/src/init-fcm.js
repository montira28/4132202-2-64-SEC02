import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyDQO3fxuJnm0yzD7ihHW1AnXyz0MgkC-so",
  authDomain: "react-sec02-068.firebaseapp.com",
  projectId: "react-sec02-068",
  storageBucket: "react-sec02-068.appspot.com",
  messagingSenderId: "884183377265",
  appId: "1:884183377265:web:0de4098ae7c13c75f282d0"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BJYj74GlNgadJJHeEBCpOtSutXFpuPTnR1L_UBuKliMZZOSzvdRaHjXKreSvQ47WuiOnFeBk_3D0kWDVTUjjJrw"
);

export { messaging };
