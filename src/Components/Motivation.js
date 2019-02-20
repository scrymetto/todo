import React from 'react';
import motivationCards from './motivationCards'

function MotivationCard(props) {
    return (
        <li>
            <img className="image" src={props.image} alt="картинка"/>
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