import React from 'react';
import WORDS from './words';

class RandomWord extends React.Component {

    constructor() {
        super();
        this.state = {
            word: RandomWord.getRandomWord()
        };
        this.handleClick = this.handleClick.bind(this)
    }

    static getRandomWord() {
        return WORDS[Math.floor(1 + Math.random() * 2801)]
    }

    handleClick() {
        this.setState({word: RandomWord.getRandomWord()})
    }

    render() {
        return (
            <div>
                <ul> Выучи новое слово:
                    <li>{this.state.word.wrd}</li>
                    <li>{this.state.word.deu}</li>
                </ul>
                <button onClick={this.handleClick}>Хочу ещё!</button>
            </div>
        )
    }
}

export default RandomWord