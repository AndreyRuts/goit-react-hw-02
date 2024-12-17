// import style from './Options.module.css';

const Options = () => { // <-- tut bilo props
    // const { name, tag, location, image, stats } = props 
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