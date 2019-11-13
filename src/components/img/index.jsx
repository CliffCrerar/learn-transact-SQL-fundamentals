import React,{Fragment} from 'react';

export default ({src, alt,divClass, imgClass,InjectElement})=>{
	const classes = {
		div:{
			display: 'inline-block',
			width: '100%'
		},
		img:{
			display: 'block',
			maxWidth: "100%",
			height: "auto"
		}
	},
	Injected = ()=>{
		// InjectElement
		//console.log('InjectElement: ', InjectElement);
		if(InjectElement){
			return <InjectElement/>
		}
		return (
			<Fragment/>
		)
	}
	imgClass ? console.log('not u') : console.log('u');
	// console.log('imgClass: ', imgClass);
	return (
	<div style={divClass?divClass:classes.div}>
		<img style={imgClass?imgClass:classes.img} src={src} alt={alt}/>
		<Injected/>
	</div>
	)
}