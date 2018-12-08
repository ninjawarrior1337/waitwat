import React, { Component } from 'react';
import "./App.css"
import YT from 'react-youtube'
import Dimensions from 'react-dimensions'

class Youtube extends Component
{
    render()
    {
        return (
            <div className="App" >
                <YT className="player" videoId="m6bYJ17psmg" opts={{playerVars: {autoplay: 1, volume: 0, controls: 1}}}></YT>
            </div>
        )
    }
}

export default Dimensions()(Youtube)