import React,{ Component } from 'react'
export class Card extends Component{
    constructor(){
        super()
    }
    render(){
        const {movies} = this.props
        console.log(movies, "card props")
        return(
            <div>
                <p>{movies.title}</p>
            </div>
        )
    }
}

export default Card;