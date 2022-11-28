import React, { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { useSocket } from './class/init'
import './index.css'
import Login from './modules/Authentication/Login/Login'


const authContext = React.createContext<any>(null);

export function ProvideAuth({ children }: any) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const {socket } = useSocket()

  const signin = () => {
    socket.on('authenticated', (res: any) => {
      console.log({data: res})
      // setUser(res.data)
    })
  };

  useEffect(() => {
    // const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     setUser(user);
    //   } else {
    //     setUser(false);
    //   }
    // });
    // // Cleanup subscription on unmount
    // return () => unsubscribe();
  }, []);
}

export const useAuth = () => {
  return useContext(authContext);
}


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
