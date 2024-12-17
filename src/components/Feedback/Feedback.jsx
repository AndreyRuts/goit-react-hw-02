// import style from './Feedback.module.css'

const Feedback = ({feedback}) => { // tut bilo {items}
    return (
        <div>
            <ul>
                <li>Good: {feedback.good}</li>
                <li>Neutral: {feedback.neutral}</li>
                <li>Bad: {feedback.bad}</li>
                {/* <li>Total:</li> */}
                {/* <li>Positive:</li> */}
            </ul>
        </div>
    )
}

export default Feedback;