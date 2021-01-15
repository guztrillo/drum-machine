import React, { Fragment, Component } from 'react';
import './App.css';
import Drumpad from './components/Drumpad';
import Display from './components/Display';

const bankSounds = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Drum',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Clap',
    url: 'http://cd.textfiles.com/maxsounds/WAV/EFEITOS/CP.WAV'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Bass-Hit',
    url: 'http://patrickjohnston.org/ASM/ROM%20data/Super%20Metroid/BF%20stuff/Aveon%20Theme/2_Bass.wav'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Sci-Fi',
    url: 'http://soundimage.org/wp-content/uploads/2016/04/Mech-Drone-11.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Bells-2',
    url: 'http://tones.fuzzup.net/mp3/44.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Super-Saw',
    url: 'http://www.hotdogstorm.com/tempsoundsolutions/supersaw%20samples/E3%20Super%20Saw.wav'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Wide-Vibrato',
    url: 'http://100p100musique.free.fr/loops-synthe-wav/120%20vibrato%20strings.wav'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Bells',
    url: 'http://tones.fuzzup.net/mp3/45.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Crunch',
    url: 'http://www.audiobulb.com/create/samples/perc_-_hi-crunch.wav'
  }
]
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: bankSounds,
      display: '',
      powerbutton: true,
      volumeSlider: 0.5,
    };
    this.selectPower = this.selectPower.bind(this);
    this.displayName = this.displayName.bind(this);
    this.selectVolume = this.selectVolume.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
  }
  componentDidMount() {
    const powerButton = document.querySelector('#power')
    powerButton.checked = true;
  }
  selectPower() {
    this.setState({
      powerbutton: !this.state.powerbutton,
      display: !this.state.powerbutton ? 'ON' : 'OFF'
    })
    setTimeout(() => this.clearDisplay(), 1000);
  }
  displayName(name) {
    if (this.state.powerbutton) {
      this.setState({
        display: name
      })
    }
  }
  selectVolume(e) {
    if (this.state.powerbutton) {
      this.setState({
        volumeSlider: e.target.value,
        display: `Volume: ${Math.round(e.target.value * 100)}`
      });
      setTimeout(() => this.clearDisplay(), 1000);
    }
  }
  clearDisplay() {
    this.setState({
      display: ''
    })
  }
  render() {
    const audio = document.querySelectorAll('.clip').forEach(item => {
      item.volume = this.state.volumeSlider;
    });
    return (
      <Fragment>
        <h1>Drum Machine</h1>
        <div id="drum-machine">
          <Display selectPower={this.selectPower} selectVolume={this.selectVolume} state={this.state} />
          <Drumpad displayName={this.displayName} clipVolume={this.state.volumeSlider} power={this.state.powerbutton} data={this.state.data}/>
        </div>
      </Fragment>
    );
  }
}

