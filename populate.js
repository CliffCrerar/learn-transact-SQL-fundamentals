/**
 * POPULATE THE MAIN SECTION
 * @summary This script populates the main section with its content
 * @author Cliff Crerar
 * Created at     : 2018-11-13 23:27:13
 * Last modified  : 2018-11-21 23:33:45
 */

const pEl = document.createElement('p'); // create a p element
const aEl = document.createElement('article') // create a div element
const dEl = document.createElement('div');
//const dp = new DOMParser();
//const parseHTML = dp.parseFromString;
pEl.classList = 'content-paragraph'; // add class to created p element


/**
 * This function either creates a paragraph element or returns HTML string of another type of element
 * @param {*} pElement the html paragraph element
 * @param {*} html_text the text to evaluate for paragraph creation
 */
const returnElementToAppend = (pElement, html_text) => {
    console.log('html_text: ', html_text);
    console.log('pElement: ', pElement);
    console.log('partext is H3: ', html_text.includes('</h3>'));
    console.log('partext is DIV: ', html_text.includes('</div>'));

    switch (html_text) {
        case html_text.includes('</h3>'): return html_text;
        case html_text.includes('</div>'): return html_text;
        default: return pElement.innerHTML = html_text;
    }

}


/**
 *
 * @param {*} pElement
 * @param {*} divElement
 * @param {*} content
 */

const populateFromContentObject = (pElement, aElement, dElement, content, callback) => {
    //console.log('content: ', content);
    //console.log('pElement: ', pElement);
    //console.log(Object.entries(content));
    const contentArr = Object.entries(content); // conver object to array
    /* LOOP TRHOUGH ALL THE SECTION CONTENT */
    contentArr.forEach((itm, im) => {
        // NOTE: itemp[0] is the section id
        const contentSection = aElement.cloneNode(true);
        const paragraphs = itm[1].textArr;
        const links = itm[1].links;
        contentSection.classList = itm[0] // create classlist
        // Loop through the paragraphs to create p elements for section content
        paragraphs.forEach(text => {
            const thisParEl = pElement.cloneNode(true);// Clone the par element
            // Insert text to cloned p element
            thisParEl.innerHTML = text
            //console.log('thisParEl: ', thisParEl);
            //const addToDom = returnElementToAppend(pElement, partext); // uses the function to store the element to add to the current doc section later added to DOM
            contentSection.appendChild(thisParEl); // insert p element into section div element
            //contentSection.appendChild(addToDom); // insert p element into section div element

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

    return callback()
}

populateFromContentObject(pEl, aEl, dEl, content, () => {
    console.log('Running callback');

})

// Other special ops;

//document.getElementById('Introduction').appendChild(introParagraph);
