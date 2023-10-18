import { useContext } from "react";
import Paddles from "./SketchClasses/Paddle"
import { SocketContext } from "../contexts/SocketContext";
import { coordonation } from "./SketchInterfaces/coordonation";
import { P5CanvasInstance, ReactP5Wrapper} from "react-p5-wrapper";
import { createContext } from "react";


// interface Props {
//   parentCallback: (Score_holder: number[]) => void;
// } 

const GameCanvas = ( ) => {
  const socket = useContext(SocketContext);
  const Score : number[] = [];
  let div : any;
  let canvasTime : string[] = [];
  canvasTime[0] = 'false';
  canvasTime[1] = 'waiting'
  // let backgroundImage : Image;
  console.log("GameCanvas");
  const sketch = (p5 : P5CanvasInstance) => {
    let ball_coordonation: number[] = [];
    let paddles: Paddles;
    // let Score : number[] = [];
    let time : number[] = [];

    p5.setup = () => { 
      // let canvasDiv = p5.createDiv('');
      // canvasDiv.addClass('canvas-pong')  
      //     // canvasDiv.size(p5.width, p5.height);
      //     let containerDiv = p5.createDiv('');
      // // Add a CSS class to the container div 
      const canvas = p5.createCanvas(p5.windowWidth / 2, p5.windowHeight / 2);
      // div = p5.createDiv('0 : 0');
      // div.id('myDiv')
      // div.position(p5.windowWidth / 2, p5.windowHeight / 4 - (p5.windowHeight / 4 * 0.45));
      // div.style('background-color', 'lightgray');
      // div.style('padding', '10px');   
      // div.style('border', '1px solid black');
      // div.style('position', 'absolute');
      // div.parent("GameCanvas");
      // canvas.parent(div);
      // containerDiv.addClass('canvas-container');
      
      // // Create a div element inside the container and set its content
      // let canvasDiv = p5.createDiv('');
  // canvasDiv.position(p5.windowWidth / 4, p5.windowHeight / 4);
  // containerDiv.child(canvasDiv);

  // // Add a CSS class to the div
  // canvasDiv.addClass('canvas-pong');
  // canvasDiv.size(p5.windowWidth / 2, p5.windowHeight / 2)

  // // Set the border radius to make it round
  // canvasDiv.style('border', '2px solid black');
  // canvasDiv.style('border-radius', '10px');
      paddles = new Paddles(p5);
      // backgroundImage = p5.loadImage('/src/assets/backgroundImage.jpg');
    };
    
    socket.on('delay',(state : string[])=>
    {
      canvasTime[0] = state[0];
      canvasTime[1] = state[1];
      console.log(canvasTime);
    })
    p5.draw = () => {
      p5.resizeCanvas(p5.windowWidth / 2, p5.windowHeight / 2);
      // backgroundImage.resize(p5.windowWidth / 2, p5.windowHeight / 2);
      // p5.background('#6C5DD3');
      // backgroundImage.style
      if  (canvasTime[0] === 'true')
      {
        socket.emit('getballposition', (coordonation: number[])=>
        {
          // console.log();
          console.log("drawing game", ball_coordonation[0], ball_coordonation[1], ball_coordonation[2], ball_coordonation[2]);
          ball_coordonation[0] = p5.map(coordonation[0], 0, 683, 0, p5.windowWidth / 2);
          ball_coordonation[1] = p5.map(coordonation[1], 0, 331, 0, p5.windowHeight / 2);
          ball_coordonation[2] = p5.map(24, 0, 683, 0, p5.windowWidth /2);
        });
        socket.on('gameTimer', (currentTime : number[])=>
        {
          time[0] = currentTime[0];
          time[1] = currentTime[1];
        })
        p5.stroke("#6C5DD3");
        p5.fill("#6C5DD3");
        // p5.strokeCap(p5.ROUND);
        // p5.rect( p5.windowWidth / 2 , p5.windowHeight / 2  ,10, 10)
        // p5.line(0, p5.height / 2, p5.width, p5.height / 2);
        // p5.line(p5.windowWidth / 2 , 10 , p5.windowWidth / 2, p5.windowHeight);
        // p5.line(p5.width / 2, 0, p5.width / 2, p5.height);
        p5.ellipse(ball_coordonation[0], ball_coordonation[1], ball_coordonation[2], ball_coordonation[2]);
        socket.emit("updatePaddlePosition");
        socket.emit("getScore", (score : number[])=>
        {
          Score[0] = score[0];
          Score[1] = score[1];
        })
        // div.size(p5.width / 5, p5.height / 10)
        // div.position(p5.windowWidth / 2, p5.windowHeight / 4 - (p5.windowHeight / 4 * 0.45));
        // div.html(Score[0] +" : " +Score[1])
        // parentCallback(Score);
        // console.log(Score[0]);
        socket.emit("drawPaddles", (coordonation: coordonation)=>
        {
          paddles.x = p5.map(coordonation.x, 0, 683, 0, (p5.windowWidth / 2))
          paddles.y = p5.map(coordonation.y, 0, 331, 0, p5.windowHeight / 2);
          paddles.w = p5.map(coordonation.w, 0, 683, 0, p5.windowWidth / 2);
          paddles.h = p5.map(coordonation.h, 0, 331, 0, p5.windowHeight / 2);
          paddles.x_1 = p5.map(coordonation.x_1, 0, 683, 0, p5.windowWidth / 2);
          paddles.y_1 = p5.map(coordonation.y_1, 0, 331, 0, p5.windowHeight / 2);
          paddles.w_1 = p5.map(coordonation.w_1, 0, 683, 0, p5.windowWidth / 2);
          paddles.h_1 = p5.map(coordonation.h_1, 0, 331, 0, p5.windowHeight / 2);
          // console.log(paddles.x);
        })
        paddles.show(paddles.x, paddles.y, paddles.w, paddles.h);
        paddles.show(paddles.x_1, paddles.y_1, paddles.w_1, paddles.h_1);
        // var myFont = p5.loadFont('/src/assets/text.ttf'); // Replace with the path to your font file
        // p5.textFont(myFont);
        
        p5.textSize(70); // Set text size
        // p5.textAlign(p5.RIGHT, p5.TOP);
        // if (time[0] !== undefined)
        // p5.textAlign(p5.CENTER, p5.CENTER);
        p5.text(Score[0] + " : " + Score[1], p5.windowWidth / 4 , (p5.windowHeight / 4) * 0.2);
        // p5.text(, p5.windowWidth / 4 + (p5.windowWidth / 4  * 0.1),  (p5.windowHeight / 4) * 0.2);
        p5.fill(255);
        p5.textSize(70);
        p5.textAlign(p5.CENTER, p5.CENTER);
        if (canvasTime[1] !== undefined)
        p5.text(time[0] + "  :  " + time[1], p5.map(683 / 2, 0, 683, 0, (p5.windowWidth / 2)) ,
        p5.map(331 / 2, 0, 331, 0, (p5.windowHeight / 2)));
        console.log("working");
      }
      else
      {
        console.log("text");
        p5.fill('#6C5DD3');
        p5.textSize(32);
        p5.textAlign(p5.CENTER, p5.CENTER);
          p5.text(canvasTime[1], p5.map(683 / 2, 0, 683, 0, (p5.windowWidth / 2)) ,
         p5.map(331 / 2, 0, 331, 0, (p5.windowHeight / 2)));
      }
    p5.fill(255);
    p5.textSize(32);
    };


    p5.keyReleased = () => {
      socket.emit('stopPaddleMove')
    }

    p5.keyPressed = () => {
      console.log('key_pressed');
      if (p5.keyCode == p5.UP_ARROW)
        socket.emit('playerMovePaddle', -15);
      else if (p5.keyCode == p5.DOWN_ARROW)
        socket.emit('playerMovePaddle', 15);
    }
  }
  return (
        // <Scorecontext.Provider value={Score}>
  <div className="GameCanvas">
    <ReactP5Wrapper sketch={sketch}/>
    </div>
        // </Scorecontext.Provider>
  );
  }

export default GameCanvas;
