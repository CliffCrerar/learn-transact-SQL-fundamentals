import React, { Component } from 'react';
import SocialLinks from './links.jsx'

function linkedInFunction ( c ) {
	c.LIRenderAll = function () {
		function t ( a ) { return Array.prototype.slice.call( a.attributes ).filter( function ( a ) { return -1 !== a.name.lastIndexOf( "data-key-", 0 ) } ).map( function ( a ) { return encodeURIComponent( a.name.replace( "data-", "" ).toLowerCase() ) + "\x3d" + encodeURIComponent( a.value ) } ) } function u ( a ) {
			var d = a.getAttribute( "data-size" ), b = a.getAttribute( "data-locale" ), e = a.getAttribute( "data-type" ), v = a.getAttribute( "data-theme" ), c = a.getAttribute( "data-vanity" ), g = a.getAttribute( "data-version" ), h = a.getAttribute( "data-ei" ),
				k = a.getAttribute( "data-entity" ), l = a.getAttribute( "data-iscreate" ), f = Math.round( 1E6 * Math.random() ), h = h ? "https://badges.linkedin-ei.com/" : "https://badges.linkedin.com/", b = ["locale\x3d" + encodeURIComponent( b ), "badgetype\x3d" + encodeURIComponent( e ), "badgetheme\x3d" + encodeURIComponent( v ), "uid\x3d" + encodeURIComponent( f ), "version\x3d" + encodeURIComponent( g )]; "v2" === g ? ( h += "view", b.push( "badgesize\x3d" + encodeURIComponent( d ) ), b.push( "entity\x3d" + encodeURIComponent( k ) ), b = b.concat( t( a ) ) ) : ( h += "profile", b.push( "maxsize\x3d" +
					encodeURIComponent( d ) ), b.push( "trk\x3d" + encodeURIComponent( "profile-badge" ) ), b.push( "vanityname\x3d" + encodeURIComponent( c ) ) ); l && b.push( "fromCreate\x3dtrue" ); d = h + "?" + b.join( "\x26" ); a.setAttribute( "data-uid", f ); a = document.createElement( "script" ); a.src = d; p.push( a ); document.body.appendChild( a )
		} function q ( a, d ) { if ( "SCRIPT" !== a.tagName || r[a.src] || d && ( !d || a.getAttribute( "data-isartdeco" ) ) ) for ( var b = 0, e = a.childNodes; b < e.length; )q( e[b++], d ); else a.parentNode.replaceChild( w( a ), a ), r[a.src] = !0; return a } function w ( a ) {
			for ( var d =
				document.createElement( "script" ), b = a.attributes.length - 1; 0 <= b; b-- )d.setAttribute( a.attributes[b].name, a.attributes[b].value ); return d
		} function x () { if ( m >= n && 0 < n || m >= g.length ) delete c.LIBadgeCallback, p.map( function ( a ) { document.body.removeChild( a ) } ) } var m = 0, n = 0, p = [], r = {}, g = Array.prototype.slice.call( document.querySelectorAll( ".LI-profile-badge, .LI-entity-badge" ) ), k, l, f, s; k = 0; for ( l = g.length; k < l; k++ )f = g[k], s = f.getAttribute( "data-rendered" ), s || ( n++ , f.setAttribute( "data-rendered", !0 ), u( f ) ); c.LIBadgeCallback =
			function ( a, d ) { m++; var b, e, c, f; b = 0; for ( l = g.length; b < l; b++ )e = g[b], f = e.getAttribute( "data-iscreate" ), c = parseInt( e.getAttribute( "data-uid" ), 10 ), c === d && ( c = document.createElement( "div" ), c.innerHTML = a, e.appendChild( c ), q( e, f ) ); x() }
	}; "complete" === document.readyState ? c.LIRenderAll() : c.addEventListener( "load", c.LIRenderAll, !1 )
}

const Badge = ( { callBadge } ) => {
	if ( !callBadge ) return (
		<div >
			<span style={{ fontSize: '5em', padding: '0px 20px' }}>&#128528;</span>
			<div style={{ width: '100%', textAlign: 'center', fontSize: '2em' }}>Cliff</div>
		</div>
	);
	return (
		<div className="LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="cliff-crerar">
			<a className="LI-simple-link" href='https://za.linkedin.com/in/cliff-crerar?trk=profile-badge'>Clifford Crerar</a>
		</div>
	)
}

class AboutAuthor extends Component {
	constructor ( props ) {
		super( props )
		this.state = { callBadge: true }
		console.log( 'this.props.callBadge: ', this.props.callBadge );
	}



	componentDidCatch ( error, info ) { console.log( 'info: ', info ); console.log( 'error: ', error ) }
	componentWillMount () {
		console.log( 'will mount' );
		//linkedInFunction( window );
		// <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
		//fetch( 'https://platform.linkedin.com/badges/js/profile.js' )

	}
	componentDidMount () {
		console.log( 'Component mounted' );

		if ( this.props.callBadge !== this.state.callBadge ) {
			this.setState( { callBadge: true } );
		} else {
			this.state.callBadge && linkedInFunction( window );
		}

	}
	componentDidUpdate ( prevProps, prevState ) {
		console.log( 'did update' );
		//console.log( 'prevState: ', prevState );
		//console.log( 'prevProps: ', prevProps );
		linkedInFunction( window );
	}
	componentWillUnmount () {
		// console.log( 'un mount' );
	}

	render () {
		return (
			<div className="about-author" >
				<style>{`
                    .profile-some-creds {
                        display: flex;
                        flex-flow: row wrap;
                        align-items: center;
                        align-content: stretch;
                    }
                    .author-creds {
                        margin-left: 15px;
                        align-self: stretch;
                        background: #3890C5;
                        width: auto;
                        color: white;
                        flex: 1;
                    }
                    .more-links{
                        margin-top: 15px;
                        width: calc(100%-20px);
                        background: grey;
                        color: white
                    }
                    .these-boxes{
                        border-radius: 2px;
                        box-shadow: 0 0 2px rgba(0,0,0,0.24);
                        padding: 10px 20px 5px 25px;
                    }
                `}</style>
				<div className="profile-some-creds">
					<Badge callBadge={this.state.callBadge} />
					<div className="author-creds these-boxes">
						<h2>Credentials:</h2>
						<ul>
							<li>
								<h5>Data Administrator - 10 years+</h5>
								<span>Oracle &#xb7; SQL Server &#xb7; Visual FoxPro  (when its was still cool)</span>
							</li>
							<li>
								<h5>Accounting consultant &#xb7; specialist - 6 years</h5>
								<span>Asset management &#xb7 Reconciliation specialist &#xb7; Excel Expert &#xb7; project based strategies &#xb7; trends identification &#xb7; reporting</span>
							</li>
							<li>
								<h5>ERP Solutions Architect 1.5 years</h5>
								<span>Enterprise System setup and configuration &#xb7; Oracle e-business suite &#xb7; JD Edwards &#xb7; Data design documentation &#xb7;
								System Administration: Analytics configuration kit &#xb7; <a href="https://quick.aclessentials.com/html/">QuiCK</a></span>
							</li>
							<li>
								<h5>Solutions Architect | Software development - 2 year hobbyist, 2 year professional</h5>
								<span>ACL &#xb7; HTML &#xb7; CSS/SCSS &#xb7; JavaScript/jQuery &#xb7; React &#xb7; Angular2 &#xb7; webpack &#xb7; markdown &#xb7; NextJS &#xb7; NodeJS &#xb7; PostgreSQL &#xb7; Material Design &#xb7; Azure &#xb7; Google Cloud &#xb7; AWS &#xb7; .NET &#xb7; Serverless </span>
							</li>
						</ul>
					</div>
				</div>
				<div className="more-links these-boxes">

					<SocialLinks />

				</div>
			</div >
		)
	}
}

export default AboutAuthor;