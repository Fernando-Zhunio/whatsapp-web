import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useSocket } from './class/init'
import AppRouter from './routes/App.routing'

function App() {
  // const [ count, setCount] = useState(0);
  // const [imgQr, setImgQr] = useState(null);

  // const {socket, isConnected, lastPong, sendPing } = useSocket()
  // useEffect(() => {
  //   if (isConnected) {
  //     onQr()
  //   }
  // })
  // function onQr() {
  //   socket.on('qr_code', (res: any) => {
  //     console.log({data: res})
  //     setImgQr(res.data)
  //   })
  // }
  return (
    <AppRouter></AppRouter>
    // <div className="App">
    //   {
    //      isConnected && (
    //       <div>
    //         <h1>Connected</h1>
    //         <p>Last pong: {lastPong}</p>
    //         <button onClick={sendPing}>Ping</button>
    //       </div>
    //      )
    //   }
    //   <img src={imgQr || reactLogo} alt="" />
    // </div>
  )
}

export default App
