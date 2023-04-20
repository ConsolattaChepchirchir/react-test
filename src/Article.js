import React from 'react';

function Article(){
    let counter=0;
    function handleClick(event){
        
        counter++;
        document.getElementById('counter').textContent='Hello';
        alert(`I am a function component with state and I was clicked ${counter} times`);
    }
    return(
        <>
        <button onClick={handleClick}>
            Click here!
        </button>
        <p id="counter">State</p>
        </>
    )
    
}
export default Article;
