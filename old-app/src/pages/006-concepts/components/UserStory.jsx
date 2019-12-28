import React from 'react';
// import { themeConfig } from '../../../../docz.config'
export default () => {
	return (
		<React.Fragment>


			<div className="user-story">
				<style jsx='true'>{`
    .user-story{
        background-color: #FFEE75;
        padding: 3vw;
        font-size: 1.2em;
    }
    .user-story hr{
        margin: 0px;
        border-bottom: 1px solid black;
    }
    .user-story span {
        text-align: justify !important;
    }
    .user-story li{
        font-size: 0.7em;
    }
    .user-story-heading{
        font-weight: bolder;
        font-size: 1.5em;
    }
    blockquote h3 {
        margin: 0 !important;
    }
`}</style>
				<span className="user-story-heading">Motor Vehicle Traders Ltd</span><br />
				<hr />
				<span>
					A used car sales business named <b>123 Sold (pty) ltd</b>, has many departments. Each department is managed by one person, this person, appointed as manager can only be in charge of one department.
			<sup className="circ-num">&#10112;</sup>
				</span><br /><br />
				<span>
					In the sales department, a salesman can advertise, and market any car. Any car may also be advertised by any salesman.
			<sup className="circ-num">&#10113;</sup>
				</span><br /><br />
				<span>
					<b>123 Sold (pty) ltd</b> is the holding company of a body shop next door, named <b>So Custom Body and Aftermarket Parts (pty) Ltd</b>. The body shop uses many different colours and shades, and in many cases cars are painted with different colours.
			<sup className="circ-num">&#10114;</sup>
				</span><br /><br />
				<span>
					A car always will have a base t1-color, but its panels can be painted in different colors, for example. The bonnet of the car be yellow, the roof can be green and trunk lid can be orange.
			<sup className="circ-num">&#10115;</sup>
				</span><br /><br />
				<span>
					So Custom Body and Aftermarket Parts must keep track of which colors are associated with which cars.
			<sup className="circ-num"></sup>
				</span><br /><br />
				<li>
					NOTE that the paragraphs are each numbered, this is for a reason which will become clear further down.
		</li>
			</div>
		</React.Fragment>
	)


}