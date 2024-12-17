import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';


// import userData from './userData.json';
// import friends from './friends.json';
// import transactions from './transactions.json';


const App = () => { 
    const feedBackState = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    
    

    // const updateFeedback = feedbackType => {
    //     // Тут використовуй сеттер, щоб оновити стан
    // }

    return (
        <>
            <Description />
            <Options feedback={feedBackState}/>
            <Feedback feedback={feedBackState} />
        </>
    );
};
export default App;