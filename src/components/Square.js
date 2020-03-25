import React from 'react'

export default class Square extends React.Component {
    render(){
    return (
        <div onClick={() => this.props.onClick()}style={{width: 65, height:65, border:'4px solid black'}}>
            {this.props.value}
        </div>
    )
}
}