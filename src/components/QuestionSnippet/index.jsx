import MnextMarkdown from '../services'

const QuestionSnippet = (props) =>{
    <div>
        <MnextMarkdown source={props.text}/>
    </div>
}

export default QuestionSnippet;