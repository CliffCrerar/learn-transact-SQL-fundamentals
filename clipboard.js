/**
 * Script to copy to clipboard
 * @summary short description for the file
 * @author Cliff Crerar
 * Created at     : 2018-11-22 02:01:08
 * Last modified  : 2018-11-22 03:00:10
 */

var txt = document.getElementById('demoDataSnippet').textContent;
var btn = document.getElementById('copyToClipboard');

var clipboard =
{
    data: '',
    intercept: false,
    hook: function (evt) {
        if (clipboard.intercept) {
            evt.preventDefault();
            evt.clipboardData.setData('text/plain', clipboard.data);
            clipboard.intercept = false;
            clipboard.data = '';
        }
    }
};
window.addEventListener('copy', clipboard.hook);
btn.addEventListener('click', onButtonClick);
function onButtonClick() {

    clipboard.data = txt;

    if (window.clipboardData) {
        window.clipboardData.setData('Text', clipboard.data);
    }
    else {
        clipboard.intercept = true;
        document.execCommand('copy');
    }
}
