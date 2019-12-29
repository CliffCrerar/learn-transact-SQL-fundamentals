import React, { Component } from 'react'
import socialLinks, {
	Facebook,
	Twitter,
	Instagram,
	Pintrest,
	Github,
	StackOverflow,
	LinkedIn,
	Quora
} from '../../social-buttons'
class SocialLinks extends Component {
	constructor(props) {
		super(props)
		this.state = { height: 'auto', width: '30px' }
	}
	getLink = (sMediaName) => socialLinks.filter(link => link.name === sMediaName)[0].link;
	render() {

		return (
			<div className="social-icons">
				<style>{`
					.social-icons{
						display: flex;
						padding: 20px;
						justify-content: space-between;
						align-items: center;
					}
					.social-link{
						color:white;
					}
					.social-link:hover{
						color: tomato;
						transform: scale(1.2);
					}
					.social-link:visited{
						color: #FAFAFA;
					}
				`}</style>
				<div>
					<a className="social-link" target="_blank" href={this.getLink('facebook')}>
						<Facebook height={this.state.height} width={this.state.width} />
					</a>
				</div>
				<div>
					<a className="social-link" target="_blank" href={this.getLink('twitter')}>
						<Twitter height={this.state.height} width={this.state.width} />
					</a>
				</div>
				<div>
					<a className="social-link" target="_blank" href={this.getLink('instagram')}>
						<Instagram height={this.state.height} width={this.state.width} />
					</a>
				</div>
				<div>
					<a className="social-link" target="_blank" href={this.getLink('pintrest')}>
						<Pintrest height={this.state.height} width={this.state.width} />
					</a>
				</div>
				<div>
					<a className="social-link" target="_blank" href={this.getLink('github')}>
						<Github height={this.state.height} width={this.state.width} />
					</a>
				</div>
				<div>
					<a className="social-link" target="_blank" href={this.getLink('quora')}>
						<Quora height={this.state.height} width={this.state.width} />
					</a>
				</div>
				<div>
					<a className="social-link" target="_blank" href={this.getLink('stack-overflow')}>
						<StackOverflow height={this.state.height} width={this.state.width} />
					</a>
				</div>
				<div>
					<a className="social-link" target="_blank" href={this.getLink('linkedIn')}>
						<LinkedIn height={this.state.height} width={this.state.width} />
					</a>
				</div>

				{/* <img data-clicked="0" src={FSL + 'facebook.svg'} alt="social-icon facebook" />
				<img data-clicked="1" src={FSL + 'twitter.svg'} alt="social-icon twitter" />
				<img data-clicked="2" src={FSL + 'instagram.svg'} alt="social-icon instagram" />
				<img data-clicked="3" src={FSL + 'pinterest.svg'} alt="social-icon pintrest" />
				<img data-clicked="4" src={FSL + 'github.svg'} alt="social-icon github" />
				<img data-clicked="5" src={FSL + 'quora.svg'} alt="social-icon quora" />
				<img data-clicked="6" src={FSL + 'stack-overflow.svg'} alt="social-icon stack overflow" />
				<img data-clicked="7" src={FSL + 'linkedin.svg'} alt="social-icon stack linkedIn" /> */}
			</div>
		)
	}
}

export default SocialLinks;