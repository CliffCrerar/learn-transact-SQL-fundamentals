// @ts-nocheck

import React from 'react';

const Frame = ( { h3Heading, h5subNote, downloadLink } ) => {

    // function frameOnLoad ( ev ) {
    //     ev.nativeEvent.preventDefault();
    //     ev.persist();

    //     console.log( 'Frame loaded' );
    //     console.log( 'ev: ', ev );
    //     //console.log( 'ev: ', ev.target.contentWindow.document.body );
    // }
    return (
        <React.Fragment>

            <style jsx="true">{`
                .sql-snippet-frame{
                    border: 1px solid rgba(0,0,0,0.2);
                    border-radius: 7px;
                }
            `}</style>
            <h3>{h3Heading}</h3>
            <iframe name="sqlDemoDataSnippet"
                // onLoad={( ev ) => frameOnLoad( ev )}
                id="demoDatabaseSql"
                height="200px"
                width="100%"
                name="sqlSnippet"
                src={downloadLink + '?for=frame'}
                // src="https://express-micro-serverless.c1i44.now.sh/api/sqltechdocsnippet"
                className="sql-snippet-frame">
            </iframe>
            <h5><li>NOTE: {h5subNote}</li></h5>
            <code name="sqlCode"></code>

        </React.Fragment>
    )
}

export default Frame;