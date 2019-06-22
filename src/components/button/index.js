import React from 'react'

const Button = () =>
    <button onClick={( ev ) => thisClick( ev )}>This is a clicker</button>

function thisClick( ev ) {
    ev.persist()
    console.log( 'this: ', ev );
    console.log( 'clickedy click fucker!' )
}

export default Button;