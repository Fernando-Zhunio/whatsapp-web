import { useEffect, useState } from "react";
import { useSocket } from "../../../../class/init";
import './Login.css';
import { redirect } from "react-router-dom";

const Login = () => {
    const [imgQr, setImgQr] = useState(null);

    const {socket, isConnected, lastPong, sendPing } = useSocket()
    useEffect(() => {
      if (isConnected) {
        onQr()
      }
    })

    function onQr() {
      socket.on('qr_code', (res: any) => {
        console.log({data: res})
        setImgQr(res.data)
      })
    }

    function onSocket(eventName: string, callback: (payload: any) => void) {
      socket.on(eventName, callback)
    }
    
    

    return (
        <div className="h-screen  items-center justify-center flex">
            <div className="container grid grid-cols-1 md:grid-cols-2">
              <div className="flex items-center">
                <div>
                  <h2 className="text-6xl">Inicio de sesión</h2>
                  <p className="text-2xl">Escanea el código QR para iniciar sesión automáticamente </p>
                </div>
              </div>
              <div className="img-size shadow-lg rounded-lg center">
                  { imgQr ? <img width="100%" src={imgQr} alt='' /> : <div >Conectando espere</div> }
              </div>
            </div>
        </div>
    );
};

export default Login;