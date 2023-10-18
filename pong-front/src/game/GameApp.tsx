import GameCanvas from './components/Sketch';
import { useContext, useState } from 'react';
import { SocketContext } from './contexts/SocketContext';
// import {socket} from './contexts/SocketContext'
import "./gameApp.css"

// interface Prop1 {
//   onpropChange1: (prop1: number) => void;
// }

// interface Prop2 {
//   onpropChange2: (prop2: number) => void;
// }

// interface Props {
//   parentCallback: (Score_holder: number[]) => void;
// }

function GameApp() {
  const socket = useContext(SocketContext);
  let custom_msg: string;
  const [RenderCanvas, setRenderCanvas] = useState(true);
  const [gameState, setGameState] = useState('pending')
  // const gameMode = 'simple';
  // socket.emit('game Mode', gameMode);
  console.log('GameApp loaded');
  socket.on('disconnectAll', () => {
    socket.disconnect();
  })
  socket.on('Game result', (result_msg) => {
    setGameState(result_msg + "Won");
    setRenderCanvas(false);
  });
  custom_msg = gameState;

  return RenderCanvas ? (<GameCanvas/>) : (<h1> {custom_msg} </h1>);

}
export default GameApp;