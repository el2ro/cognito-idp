// Import stylesheets
import './style.css';
import { IdentityProviderClientJS } from '@liftric/cognito-idp';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

export const main = async function () {
  console.log('main');
  let cognito = new IdentityProviderClientJS('eu-west-2', '123456789');
  let result = cognito
    .signIn('some@email.null', 'login.password')
    .then((output) => {
      console.log(output);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(result);
};

main();
