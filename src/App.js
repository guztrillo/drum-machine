import React, { Fragment, Component } from 'react';
import './App.css';
import Drumpad from './components/Drumpad';
import Display from './components/Display';
// importing sounds
import akey from './sounds/akey.mp3'
import ckey from './sounds/ckey.wav'
import dkey from './sounds/dkey.wav'
import ekey from './sounds/ekey.wav'
import qkey from './sounds/qkey.mp3'
import skey from './sounds/skey.mp3'
import wkey from './sounds/wkey.wav'
import exkey from './sounds/exkey.mp3'
import zkey from './sounds/zkey.wav'

const bankSounds = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Drum',
    url: qkey
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Clap',
    url: wkey
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Bass-Hit',
    url: ekey
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Sci-Fi',
    url: akey
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Bells-2',
    url: skey
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Super-Saw',
    url: dkey
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Wide-Vibrato',
    url: zkey
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Bells',
    url: exkey
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Crunch',
    url: ckey
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

