/**
 * COMING SOON
 * @summary Adds all sections not complete to a coming soon section.
 * @author Cliff Crerar
 * Created at     : 2019-05-19 19:41:26 
 * Last modified  : 2019-05-19 21:36:24
 */

( function () {

  var
    $ = document,
    navElements = $.getElementsByClassName( 'nav-link' ),
    comingSoonSections = [
      '#Query_execution_method', '#Reserved_words', '#Using_comments', '#Data_definition_language', '#Logical_operators', '#Joining_tables', '#Computation_and_Functions', '#Sub-queries', '#Transaction_concurrency', '#Transaction_control_language', '#Database_views', '#Importing_data', '#Exporting_data', '#Using_backups', '#Advanced_topics', '#Additional_resources'
    ],
    sectionNames = [];

  ( function () {
    comingSoonSection( removeElements() );
  }() )

  function removeElements() {
    for ( let i = 0; i < navElements.length; i++ ) {
      let
        thisNav = navElements[ i ],
        thisNavHref = thisNav.attributes.getNamedItem( 'href' ).nodeValue,
        thisNavAnchored = $.querySelector( thisNavHref );

      if ( comingSoonSections.includes( thisNavHref ) ) {
        //console.log('thisNavAnchored: ', thisNavAnchored.children[0].textContent.trim().replace('*', ''));
        Promise.resolve(
          sectionNames.push( thisNavAnchored.children[ 0 ].textContent.trim().replace( '*', '' ) )
        ).then( function () {
          thisNav.remove();
          thisNavAnchored.remove();
        } );
      }
    }
    //console.log('sectionNames: ', sectionNames);
    return sectionNames;
  };

  function comingSoonSection( headings ) {
    console.log( 'headings: ', headings );
    // Get and create new section elements
    let
      // Get parent elements
      mainEl = $.getElementById( 'main-doc' ),
      navLinksEl = $.getElementById( 'navLinks' ),
      // Create new elements
      newSectionEl = $.createElement( 'section' ),
      headerEl = $.createElement( 'header' ),
      listContainerEl = $.createElement( 'ul' ),
      listItem = $.createElement( 'li' ),
      anchorEl = $.createElement( 'a' );
    // Update elements
    newSectionEl.setAttribute( 'class', 'main-section' )
    newSectionEl.setAttribute( 'id', 'Coming_soon' );
    headerEl.innerHTML = "<h1>Coming Soon</h1>";
    newSectionEl.appendChild( headerEl ).appendChild( listContainerEl );
    anchorEl.href = '#Coming_soon';
    anchorEl.textContent = 'Coming Soon';
    anchorEl.classList.add( 'nav-link' );
    // Create lists
    headings.forEach( hdg => {
      let thisListItem = Object.assign( $.createElement( 'li' ), listItem );
      thisListItem.textContent = hdg;
      //console.log( 'thisListItem: ', thisListItem );
      listContainerEl.appendChild( thisListItem );
    } );
    // Append new elements to parent elements
    mainEl.appendChild( newSectionEl );
    navLinksEl.appendChild( anchorEl );
    //mainEl
    console.log( 'newSectionEl: ', newSectionEl );
  }
  return;
} )()