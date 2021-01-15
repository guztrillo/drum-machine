import React, {Component} from 'react';
import Padkey from './Padkey';

export default class Drumpad extends Component {
    render(){
        let padkey;
        if(this.props.power){
            padkey = this.props.data.map((drum, i, arr) => {
                return (
                        <Padkey clipID={arr[i].id} clipUrl={arr[i].url} clipCode={arr[i].keyCode} clipTrigger={arr[i].keyTrigger} power={this.props.power} displayName={this.props.displayName}/>
                )
            })
        } else {
            padkey = this.props.data.map((drum, i, arr) => {
                return (
                        <Padkey clipID={arr[i].id} clipUrl='#' clipCode={arr[i].keyCode} clipTrigger={arr[i].keyTrigger} power={this.props.power} displayName={this.props.displayName}/>
                )
            })
        }
    return <div id="drumPad">{padkey}</div>
    }
}