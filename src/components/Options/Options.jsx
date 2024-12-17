// import style from './Options.module.css';
// import { useState } from "react";

const Options = () => {
    // const [optData, setOptData] = useState()

    return (
        <>
            <div>
                <ul>
                    <button>Good</button>
                    <button>Neutral</button>
                    <button>Bad</button>
                    {/* <button>Reset</button> */}
                </ul>
            </div>
        </>
    )
}

export default Options;

//  const [good, setGood] = useState(1);
//     const [neutral, setNeutral] = useState(1);
//     const [bad, setBad] = useState(1);

//     const handleGood = () => {
//         setGood(prev => prev + 1);
//         console.log('good is:', good);
//         return good;
//     }
//     const handleNeutral = () => {
//         setNeutral(prev => prev + 1);
//         console.log('neutral is:', neutral);
//         return neutral;
//     }
//     const handleBad = () => {
//         setBad(prev => prev + 1);
//         console.log('bad is:', bad);
//         return bad;
//     }