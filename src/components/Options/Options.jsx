// import style from './Options.module.css';


const Options = ({ updateFeedback, resetFeedBack, totalFeedback }) => {
    if (totalFeedback <= 0) {
        return (
        <>
            <div>
                <ul>
                    <button onClick={()=> updateFeedback('good')}>Good</button>
                    <button onClick={()=> updateFeedback('neutral')}>Neutral</button>
                    <button onClick={()=> updateFeedback('bad')}>Bad</button>
                </ul>
            </div>
        </>
        )
    } else {
        return (
            <>
            <div>
                <ul>
                    <button onClick={()=> updateFeedback('good')}>Good</button>
                    <button onClick={()=> updateFeedback('neutral')}>Neutral</button>
                    <button onClick={()=> updateFeedback('bad')}>Bad</button>
                    <button onClick={() => resetFeedBack()}>Reset</button>
                </ul>
            </div>
        </>
        )
    } 
}
export default Options;
