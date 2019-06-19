

import React from 'react'
import  MnextMarkdown from '../../services/mnext-martkdown'


function LandingTest(){

    return( 
        <React.Fragment>
            <MnextMarkdown source={
            `# Learning Transact SQL fundamentals { style="font-size:4em;align-text:center",}
## using Microsoft SQL server
            `}/>
        </React.Fragment>
        )
}

function LandSubHeading(){
    return <h2>using Microsoft SQL server</h2>
}

export  {LandingTest,LandSubHeading};