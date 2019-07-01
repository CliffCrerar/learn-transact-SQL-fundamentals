import React, { Component } from 'react'
import SVGInject from '@iconfu/svg-inject';

class SocialLinks extends Component {
    constructor ( props ) {
        super( props )
        this.state = { someState: 'someState' }
        this.FSL = 'https://s3-eu-west-1.amazonaws.com/cdn-aws-infinityarc.tk/files/icons-social-fa-svq-sq/';
        //this.FSL = 'https://icons-social-fa-svq-sq.c1i44.now.sh/';
        // https://s3-eu-west-1.amazonaws.com/cdn-aws-infinityarc.tk/files/icons-social-fa-svq-sq/facebook.svg
    }
    socialLinkClickHandle ( ev ) {
        ev.persist();
        const targetClicked = ev.target.dataset.clicked === undefined ? ev.target.parentElement.dataset.clicked : ev.target.dataset.clicked;
        const socialSelection = require( './sociallinks' )[targetClicked];
        const anchorEl = document.createElement( 'a' );
        anchorEl.setAttribute( 'href', socialSelection.link );
        anchorEl.setAttribute( 'target', '_blank' );
        anchorEl.click();
    }
    componentDidMount () {
        ( function () {
            document.querySelectorAll( '.social-icon img' ).forEach( e => {
                e.classList.add( 'social-svg' );
                e.onClick = ( ev => this.socialLinkClickHandle( ev ) )
                SVGInject( e );
            } );
        }() )
    }
    render () {
        const FSL = this.FSL;
        return (
            <div className="social-icon" onClick={ev => this.socialLinkClickHandle( ev )}>
                <style>{`
                .social-svg{
                    height: 30px;
                    animate: 1s linear;
                }
                .social-svg:hover{
                    transform: scale(1.2);
                    color: #3890C5;
                }
                .social-svg:visited{
                    color: #3890C5;
                }
                .social-icon{
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-around;
                    padding: 15px 0 !important;
                }
            `}</style>
                <img data-clicked="0" src={FSL + 'facebook.svg'} alt="social icon facebook" />
                <img data-clicked="1" src={FSL + 'twitter.svg'} alt="social icon twitter" />
                <img data-clicked="2" src={FSL + 'instagram.svg'} alt="social icon instagram" />
                <img data-clicked="3" src={FSL + 'pinterest.svg'} alt="social icon pintrest" />
                <img data-clicked="4" src={FSL + 'github.svg'} alt="social icon github" />
                <img data-clicked="5" src={FSL + 'quora.svg'} alt="social icon quora" />
                <img data-clicked="6" src={FSL + 'stack-overflow.svg'} alt="social icon stack overflow" />
                <img data-clicked="7" src={FSL + 'linkedin.svg'} alt="social icon stack linkedIn" />
            </div>
        )
    }
}

export default SocialLinks;