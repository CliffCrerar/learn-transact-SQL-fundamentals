/**
 * DEV SCR
 *
 * @summary For dev only hides sections completed
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-19 16:05:09
 * Last modified  : 2019-05-19 16:55:01
 */
var devMode = true;

( function () {
    devMode && runDevMode();
} )()

function runDevMode() {
    console.log( '!!!Application is in devmode' );
    devModeImages();
}

function runFFCMode() {
    return;
}

function devModeImages() {
    return;
}