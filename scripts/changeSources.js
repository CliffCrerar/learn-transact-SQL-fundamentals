/**
 * DEV SCR
 *
 * @summary For dev only hides sections completed
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-19 16:05:09
 * Last modified  : 2019-05-19 20:50:12
 */

(function() {

  var comSec = [
    'Introduction', 'About_this_document', 'Getting_started', 'Creating_the_demo_database', 'Concepts_and_Semantics', 'Database_objects', 'Data_types' /*,'Data_query_language',*'Data_manipulation_language','Data_definition_language','Logical_operators','Joining_tables','Computation_and_Functions','Sub-queries','Transaction_concurrency','Transaction_control_language','Database_views','Importing_data','Exporting_data','Using_backups','Advanced_topics','Additional_resources'*/
  ]
  var allSec = ['Introduction', 'About_this_document', 'Getting_started', 'Creating_the_demo_database', 'Concepts_and_Semantics', 'Database_objects', 'Data_types', 'Data_query_language', 'Data_manipulation_language', 'Data_definition_language', 'Logical_operators', 'Joining_tables', 'Computation_and_Functions', 'Sub-queries', 'Transaction_concurrency', 'Transaction_control_language', 'Database_views', 'Importing_data', 'Exporting_data', 'Using_backups', 'Advanced_topics', 'Additional_resources'];

  (function() {
    prodMode ? runProdMode() : runDevMode();
    !prodMode && console.log('!!!Application is in devmode');
  })()

  function runProdMode() {
    prodModeImages();
  }

  function runDevMode() {
    completedSections();
  }

  function runFFCMode() {
    return;
  }

  function prodModeImages() {
    const imgArr = document.getElementsByTagName('img');
    for (let i = 0; i < imgArr.length; i++) {
      let thisImg = imgArr[i];
      // @ts-ignore
      let thisSrc = thisImg.attributes.getNamedItem('src').nodeValue;
      let newSrc = newOrigin + thisSrc.substring(1, thisSrc.length);
      thisImg.src = newSrc;
    }
    //$( '#ffc.img.logo' ).attr( 'src', './images/freeCodeCamp.png' )
    return;
  }

  function completedSections() {
    const sections = document.getElementsByTagName('section');
    for (let i = 0; i < sections.length; i++) {
      var thisSection = sections[i];
      if (comSec.includes(thisSection.id)) {
        thisSection.classList.add('drafted')
          //console.log('thisSection.classList: ', thisSection.classList)
      }
    }
  }

  return;
}())