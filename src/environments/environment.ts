// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyD1qf_qrx_WjnNt8cjA6eUPgi87L_7WwGs',
    authDomain: 'ng-transportmgmt.firebaseapp.com',
    databaseURL: 'https://ng-transportmgmt.firebaseio.com',
    projectId: 'ng-transportmgmt',
    storageBucket: 'ng-transportmgmt.appspot.com',
    messagingSenderId: '928174654697'
  }
};
