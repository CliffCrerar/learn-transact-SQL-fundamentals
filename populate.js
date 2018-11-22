/**
 * POPULATE THE MAIN SECTION WIHT SPECIAL DATA
 * @summary This script populates the main section with its content
 * @author Cliff Crerar
 * Created at     : 2018-11-13 23:27:13
 * Last modified  : 2018-11-22 04:50:56
 */

const demoSqlStr = demoSqlArr.join().replace(/>,</g, '><');
//console.log('demoSqlStr: ', demoSqlStr);
document.getElementById('demoDataSnippet').innerHTML = demoSqlStr;

//document.getElementById('Introduction').appendChild(introParagraph);
