import React from 'react';


const GlobalCustom = () => {
    return (
        <React.Fragment>
            <style jsx="true">{`
                :root{
                    --btn-color1: tomato;
                }
                 
                :root{
                    --btn-color2: khaki;
                }

                body{
                    box-sizing: border-box;
                    min-width: 100vw;
                    min-height: 100vh;
                    word-break: break-word;
                    font-kerning: auto;
                    font-variant: normal;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    text-rendering: optimizeLegibility;
                    hyphens: auto;
                    text-align: center;
                }
                
                .btn-container-normal{
                    width: 100%;
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-between;
                    margin-bottom: 20px;
                }
                .btn {
                    font-size: 1em;
                    padding: 15px 30px;
                    border: 0px transparent;
                    border-radius: 5px;
                }
                .btn-primary {
                    background: var(--btn-color1);
                    color: white;
                }
                .btn-secondary{
                    background: var(--btn-color2);
                    color: grey;
                }
            `}</style>
        </React.Fragment>
    )
}

export default GlobalCustom