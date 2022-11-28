import { useEffect, useState } from 'react';
// import { singletonHook } from 'react-singleton-hook';
import { io } from "socket.io-client";
import { environment } from '../environment/environment';

export const _socket = io(environment.socketUrl, {
  reconnectionDelayMax: 1000,
});

export const useSocket = () => {
    const [isConnected, setIsConnected] = useState(_socket.connected);
    const [socket, setSocket] = useState(_socket);
    // const [onQr, setOnQr] = useState(socket.on);
    const [lastPong, setLastPong] = useState<any>(null);
  
    useEffect(() => {
      socket.on('connect', () => {
        setIsConnected(true);
      });
  
      socket.on('disconnect', () => {
        setIsConnected(false);
      });
  
      socket.on('pong', () => {
        setLastPong(new Date().toISOString());
      });
  
      return () => {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('pong');
      };
    }, []);
  
    const sendPing = () => {
      socket.emit('ping');
    }
  
    return {
        isConnected,
        lastPong,
        sendPing,
        socket
    }
  }
  
  // export default singletonHook(useSocket);