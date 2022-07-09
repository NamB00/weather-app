// export const environment = {
//   production: true
// };
import { environment as common } from './environment';

export const environment = {
  production: true,
  firebase: {
    apiKey: '...',
    authDomain: 'project.firebaseapp.com',
    databaseURL: 'https://project.firebaseio.com',
    projectId: 'project',
    storageBucket: 'project.appspot.com',
    messagingSenderId: '...',
  },
};
