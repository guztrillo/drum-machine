import React from 'react';

export default function Display({ selectPower, selectVolume, state }) {
     return (
          <div id="display">
               <div className="powerdiv">
                    <p className="textpower">Power</p>
                    <label className="switch" htmlFor="power">
                         <input type="checkbox" id="power" onClick={selectPower}/>
                         <span className="sliderPower round"></span>
                    </label>
               </div>
               <div id="text-display">{state.display}
               </div>
               <div className="slidecontainer">
                    <input type="range" min="0" max="1" value={state.volumeSlider} step="0.01" className="slider" id="myRange" onChange={selectVolume} />
               </div>
          </div>
     );
}