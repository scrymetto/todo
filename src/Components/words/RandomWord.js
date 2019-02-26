import React from 'react';
import WORDS from './words';
import Button from '@material-ui/core/Button';


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
                <ul className="wordList">
                    <h2>Выучи новое слово:</h2>
                    <li className="wordEN">{this.state.word.wrd}</li>
                    <li className="wordDE">{this.state.word.deu}</li>
                </ul>
                <Button variant="raised"
                onClick = {this.handleClick}>Хочу ещё!</Button>
            </div>
        )
    }
}

export default RandomWord