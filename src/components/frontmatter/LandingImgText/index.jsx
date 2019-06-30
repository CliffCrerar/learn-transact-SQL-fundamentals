import React from 'react';
import config from '../../../../docz.config.js';
console.log( 'config: ', config );
//src="https://zeit-optipng-server-01.c1i44.now.sh/learnsql/cloudsql-server.png"

function LandingImgtext () {
	return (
		<div className="landing-img-text">
			<style jsx="true">{`
                .landing-img-text{
                    display: flex;
                    flex-flow: row wrap;
                    align-items: center;
                }
                .landing-img-text h2{
                    margin: 0 !important;  
                }
                .landing-img-text div {
                    margin-left: -30px;
                }
				ul{
					list-style-type: square;
				}

				li::before{
					color: var(--btn-color1);
				}

            `}</style>
			<img
				style={{ width: '300px' }}
				src="https://zeit-optipng-server-01.c1i44.now.sh/learnsql/database-icon-05x.png"
				alt="Azure TSQL image" />
			<div>

				<h2>Reasons to learn SQL:</h2>
				<ul>
					<li>Structured Query Language is <b>for everyone.</b></li>
					<li>SQL is <b>closely related</b> to natural language and SQL is <b>easy to learn.</b></li>
					<li>It is a <b>data language.</b></li>
					<li>All major enterprise systems use <b>Relational Databases.</b></li>
					<li>Its <b>NOT only</b> for data administrators and programmers</li>
					<li><b>Directly ask questions</b> of your data.</li>
					<li><b>Ask it anything you want</b> in <b>any way you want.</b></li>
					<li>If you are a <a href="https://en.wikipedia.org/wiki/Knowledge_worker">knowledge worker</a>, then SQL is for you.</li>
				</ul>

			</div>
		</div>
	)
}

export default LandingImgtext;