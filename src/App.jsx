
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import { useEffect, useState } from 'react';
import Notifications from './components/Notifications/Notifications';
import './App.css'

function App() {
const [reviews, setReviews] = useState(()=>{
  const saveUserState = window.localStorage.getItem("reviewsValue");

return(
  saveUserState
  ? JSON.parse(saveUserState) :
  {
  good: 0,
	neutral: 0,
	bad: 0
}
);
})

useEffect(() => {
  localStorage.setItem("reviewsValue", JSON.stringify(reviews));
}, [reviews]);

  function updateFeedback(feedbackType) {
    setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
  }
 const totalFeedback = reviews.good + reviews.neutral + reviews.bad;

 function resetFeedback() {
  setReviews({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  
}
 const positiveFeedback = Math.round((reviews.good / totalFeedback) * 100);
  return (
   
      <div>
        
     <Description/>
     
  
     <Options
     updateFeedback={updateFeedback}
     totalFeedback={totalFeedback}
     resetFeedback={resetFeedback}
    
     />

{ totalFeedback > 0 ?  
     <Feedback
     reviews = {reviews}
     totalFeedback={totalFeedback}
     positiveFeedback = {positiveFeedback}
     
     /> :
      (<Notifications
      message = {"No feedback yet"}
      />) 
        }
 
    
</div>
  );
};


export default App;
