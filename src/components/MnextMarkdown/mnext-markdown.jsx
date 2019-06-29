/**
import { ReactMarkdown } from 'react-markdown/with-html';
 * RENDERS MARKDOWN
 * @summary And add functionality to add attributes
 * @author Cliff Crerar
 * Created at     : 2019-06-18 01:45:54 
 * Last modified  : 2019-06-18 02:02:43
 */

const
    React = require( 'react' ),
    ReactMarkdown = require( 'react-markdown/with-html' ),
    md = require( 'markdown-it' )(),
    markdownItAttrs = require( 'markdown-it-attrs' );

md.use( markdownItAttrs, {
    // optional, these are default options
    leftDelimiter: '{',
    rightDelimiter: '}',
    allowedAttributes: [] // empty array = all attributes are allowed
} );

function MnextMarkdown ( { source } ) {
    return <ReactMarkdown source={md.render( source )} escapeHtml={true} />
}

export default MnextMarkdown;