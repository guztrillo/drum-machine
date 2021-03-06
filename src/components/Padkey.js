import React, { Component} from 'react';

export default class Padkey extends Component{
     constructor(props) {
          super(props);
          this.handleKey = this.handleKey.bind(this);
          this.playSound = this.playSound.bind(this);
          this.shadow = this.shadow.bind(this);
     }
     componentDidMount() {
          document.addEventListener('keydown', this.handleKey)
     }
     componentWillUnmount(){
          document.removeEventListener('keydown', this.handleKey)
     }
     handleKey(e) {
          if (e.key.toUpperCase() === this.props.clipTrigger) {
               this.playSound();
          }
     }
     playSound() {
          this.audioBeep.currentTime = 0;
          this.shadow(this.audioBeep);
          this.audioBeep.play();
          let int = setInterval(() => {
               if (this.audioBeep.currentTime > 1) {
                    this.audioBeep.pause();
                    clearInterval(int);
               }
          }, 100)
          this.props.displayName(this.props.clipID.replace(/-/g, ' '))
     }
     shadow(key) {
          key.parentElement.classList.toggle('press');
          setTimeout(() => {
               key.parentElement.classList.toggle('press');
          }, 125)
     }
     render() {
          return (
               <div className="drum-pad" id={this.props.clipID} onClick={this.playSound}>{this.props.clipTrigger}
                   <audio className="clip" id={this.props.clipTrigger} src={this.props.clipUrl} ref={(audio) => {this.audioBeep = audio;}}/>
               </div>
          )
     }
}