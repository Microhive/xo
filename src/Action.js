import './Action.css'

function Action(props) {

    return (
        <span className="action" draggable onDragStart={props.dragStart}>{props.symbol}</span>
    );
}

export default Action;