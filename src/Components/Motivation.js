import React from 'react';
import skeleton from './skeleton.gif'
import tomato from './tomato.png'
import morning from './morning.gif'

let motCards = [
    {
        id: 1,
        image: morning,
        question: 'Выспался?',
        advice: 'Попробуй лечь хоть раз раньше полуночи!',
    },
    {
        id: 2,
        image: tomato,
        question: 'Сколько помидорок посвятил JavaScript?',
        advice: 'Самое время ставить рекорды!',
    },
    {
        id: 3,
        image: skeleton,
        question: 'Давно ты вставал из-за компьютера?',
        advice: 'Пожалей свою спину и разомнись!',
    },
];

class MotivationCard extends React.Component {
    render() {
        return (
            <li>
                <img src={this.props.image} alt="картинка"/>
                <div>{this.props.question}</div>
                <div>{this.props.advice}</div>
            </li>
        )
    }
}

function Motivation() {
    return (
        <ul>
            {
                motCards.map(el => <MotivationCard
                key={el.id}
                image={el.image}
                question={el.question}
                advice={el.advice}/>)
            }
        </ul>
    )
}

export default Motivation