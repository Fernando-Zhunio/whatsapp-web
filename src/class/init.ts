import { useEffect, useState } from 'react';
import { singletonHook } from 'react-singleton-hook';
import { io } from "socket.io-client";
import { environment } from '../environment/environment';

const socket = io(environment.socketUrl, {
  reconnectionDelayMax: 10000,
  auth: {
    token: "123"
  },
  query: {
    "my-key": "my-value"
  }
});

const useSocket = () => {
    const [isConnected, setIsConnected] = useState(socket.connected);
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
        sendPing
    }
  }
  
  export default singletonHook(useSocket);