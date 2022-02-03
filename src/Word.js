import './Word.css'

function Word(props) {
    return (
        <span className="word" onDrop={props.drop} onDragOver={props.dragOver}>{props.word}</span>
    );
}

export default Word;