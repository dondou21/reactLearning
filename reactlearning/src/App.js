import React, { useEffect, useState } from 'react';
import './App.css';
import { Header, Footer } from "./Mycomponent.js";
import MainContent  from './Mycomponent.js';
import UserProvider from './Context.js';
import WelcomePage from './WelcomePage.js';


// function App() {

//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   return (
//     <div>
//       {isAuthenticated ? (
//         <h1>User Profile</h1>
//       ) : (
//         <button onClick={() => 
//           setIsAuthenticated(true)
//         }>Log In</button>
//       )}
//     </div>
//   );
// }


// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     setTimeout(() => {
//       setData('Fecthed Data');
//       setIsLoading(false);
//     }, 2000);
//   }, []);

//   return (
//     <div>
//       {isLoading ? (
//         <h1> Loading...</h1>
//       ): (
//         <h1>{data}</h1>
//       )}
//     </div>
//   );
// }


// function App() {
//   const items = ['Apple', 'Banana', 'Mango'];

//   return (
//     <div>
//       <h1>My Fruit List</h1>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index} > {item} </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


const users = [
  { id: 1, name: 'Joly', age: 28 },
  { id: 2, name: 'Kyra', age: 2 },
  { id: 1, name: 'Bob', age: 33 }
]

// const App = () => {
//   return (
//     <di>
//       <h1> List without any check</h1>
//     <ul>
//       {users.map((user) => (
//         <li key={user.id} >{user.name} is {user.age} years old...</li>
//       ))}
//     </ul>

//     <h1>List with age check </h1>

//     <ul>
//       {users.map((user) => (
//         user.age > 30 ? (
//           <li>{user.name} is over 30 years old </li>
//         ) : (
//           <li>{user.name} is under 30 years old </li>
//         )
//       ))}
//     </ul>
//     </di>
//   )
// }

const App = () => {
  return (
    <UserProvider>
      <WelcomePage />
    </UserProvider>
  )
}

export default App;
