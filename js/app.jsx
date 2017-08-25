import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    function genNumber(){
        return Math.round( Math.random() * 9 + 1 );
    }

    const a = genNumber();

    const result = prompt(`Wylosowano liczbę od 1 do 10, jaka to liczba?`);
    const correct = a;
    let answer;

    if(result == correct) {
        answer = <div>To ta liczba</div>
    } else if(correct > result) {
        answer = <div>Za mała liczba</div>
    } else {
        answer = <div>Za duża liczba</div>

    }
    ReactDOM.render(
        answer,
        document.getElementById('app')
    );
});
