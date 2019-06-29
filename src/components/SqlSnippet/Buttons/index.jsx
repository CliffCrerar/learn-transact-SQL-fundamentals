import React from 'react';
import { GlobalCustom } from '../../styles';
const Buttons = ( { downloadLink } ) => {

    const linkAndQuery = downloadLink + '?for=download'

    //var cbBtn = new Clipboard( '.clipBoardBtn' );
    //console.log( 'cbBtn: ', cbBtn );

    return (
        <React.Fragment>
            <GlobalCustom />
            <div className="btn-container-normal">
                <a href={linkAndQuery} id="download" download="Northwind-database.sql">
                    <button className="btn btn-primary">Download</button>
                </a>

                <a href={linkAndQuery} id="toClipboard">
                    <button className="btn btn-secondary clipBoardBtn">Copy to clipboard</button>
                </a>
            </div>

        </React.Fragment>
    )
}

export default Buttons;