import React from 'react';

import { themeConfig } from '../../../docz.config'


const GlobalCustom = () => {
    const colorPrimary = themeConfig.colors.primary;

    const colorSecondary = themeConfig.colors.secondary;

    return (
        <React.Fragment>
            <style jsx="true">{`
                :root{
                    --btn-color1: ${colorPrimary};
                }
                 
                :root{
                    --btn-color2: ${colorSecondary};
                }
                
                .btn-container-normal{
                    width: 100%;
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-between;
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