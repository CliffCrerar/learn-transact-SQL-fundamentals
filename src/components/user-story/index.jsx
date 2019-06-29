import React from 'react';
import MnextMarkdown from '../MnextMarkdown/mnext-markdown.jsx';
import UserStoryMd from './userstory.md';

md = require( 'markdown-it' ),
    //markdownItAttrs = require( 'markdown-it-attrs' );

// md.use( markdownItAttrs, {
//     // optional, these are default options
//     leftDelimiter: '{',
//     rightDelimiter: '}',
//     allowedAttributes: [] // empty array = all attributes are allowed
// } );


const UserStory = () => {
    return (
        <div>{md().render( UserStoryMd )}</div>
    )
}

export default UserStory;