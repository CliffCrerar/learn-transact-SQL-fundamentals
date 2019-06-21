function StyledComponent = (props) =>{
    console.log('props: ', props);
    
    return (
        <div className={props.style}>
            {props.content}
        </div>
    )

}

module.exports StyledComponent;