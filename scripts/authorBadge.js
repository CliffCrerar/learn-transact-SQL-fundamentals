
( function () {

  var mainEl = document.getElementById( 'main-doc' )

  var authorEl = document.createElement( 'div' );

  authorEl.innerHTML = `
    <section>
    <script src="https://platform.linkedin.com/badges/js/profile.js" type="text/javascript"></script>
    <div class="LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="horizontal" data-vanity="cliff-crerar" data-version="v1">
        <a class="LI-simple-link" href='https://za.linkedin.com/in/cliff-crerar?trk=profile-badge'>Clifford Crerar</a>
    </div>
    </section>
  `

  mainEl.appendChild( authorEl );

} )();


