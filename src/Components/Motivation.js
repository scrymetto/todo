import React from 'react';
import motivationCards from './motivationCards'

function warning() {
    let warningCard = {
        1: 'AAAaaaAAAA!!',
        2: 'Please, STOP!!',
        3: 'NOOOOO!!',
        4: 'No, no, no, NOOOO!!',
        5: 'DON\'T DO IT!!'
    };
    let message = warningCard[Math.floor(1+Math.random()*4)];

    console.log(message)
}

function MotivationCard(props) {
    return (
        <li>
            <img className="image" src={props.image} alt="картинка" onMouseOver={warning}/>
            <div>{props.question}</div>
            <div>{props.advice}</div>
        </li>
    )
}

function Motivation() {
    return (
        <ul className="Motivation">
            {
                motivationCards.map(el => <MotivationCard
                    key={el.id}
                    image={el.image}
                    question={el.question}
                    advice={el.advice}/>)
            }
        </ul>
    )
}

export default Motivation