// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyCnR_Mh8xrIoGMa9QtASlvJeRULcL8LQ2c",
    authDomain: "despacho-abogados.firebaseapp.com",
    databaseURL: "https://despacho-abogados.firebaseio.com",
    projectId: "despacho-abogados",
    storageBucket: "despacho-abogados.appspot.com",
    messagingSenderId: "116618489761"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
