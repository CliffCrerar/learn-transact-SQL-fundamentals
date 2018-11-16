/**
 * POPULATE THE MAIN SECTION
 * @summary This script populates the main section with its content
 * @author Cliff Crerar
 * Created at     : 2018-11-13 23:27:13
 * Last modified  : 2018-11-15 22:36:18
 */

const pEl = document.createElement('p'); // create a p element
const divEl = document.createElement('article') // create a div element
pEl.classList = 'content-paragraph'; // add class to created p element
const populateFromContentObject = (pElement, divElement, content, callback) => {
    //console.log('content: ', content);
    //console.log('pElement: ', pElement);
    //console.log(Object.entries(content));
    const contentArr = Object.entries(content); // conver object to array
    /* LOOP TRHOUGH ALL THE SECTION CONTENT */
    contentArr.forEach((itm, im) => {
        // NOTE: itemp[0] is the section id
        const contentSection = divElement.cloneNode(true);
        const paragraphs = itm[1].textArr;
        const links = itm[1].links;
        contentSection.classList = itm[0] // create classlist
        // Loop through the paragraphs to create p elements for section content
        paragraphs.forEach(partext => {
            //console.log('partext: ', partext);
            const thisParEl = pElement.cloneNode(true);// Clone the par element
            thisParEl.innerHTML = partext; // Insert text to cloned p element
            //console.log('thisParEl: ', thisParEl);
            contentSection.appendChild(thisParEl); // insert p element into section div element
        });
        console.log('contentSection: ', contentSection);
        document.getElementById(itm[0]).appendChild(contentSection);


        // test for links and then populate
        if (links != undefined) {
            console.log('Links exist');
            // Loop through link object
            for (var ln in links) {
                const thisLink = links[ln];
                console.log('ln: ', ln);
                console.log('thisLink: ', thisLink);
                document.getElementById(ln).setAttribute('href', thisLink);
            }
            console.log('links: ', links);
        }
        else {
            console.log('No links exist');
        }
        // insert paragraphs into page
    });
    // Add some glyph for special messages
    callback();
}

populateFromContentObject(pEl, divEl, content, function () {
    document.getElementsByClassName('question').appendChild(questionSvg);
});

//document.getElementById('Introduction').appendChild(introParagraph);
