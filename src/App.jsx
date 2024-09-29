
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import { useState } from 'react';
import Notifications from './components/Notifications/Notifications';
import './App.css'

function App() {
const [reviews, setReviews] = useState({
	good: 0,
	neutral: 0,
	bad: 0
});

const updateFeedback = (feedbackType )=> {
  setReviews({...reviews, [feedbackType ]:reviews[feedbackType] + 1});
 };
 const totalFeedback = reviews.good + reviews.neutral + reviews.bad;

 function resetFeedback() {
  setReviews({
    good: 0,
    neutral: 0,
    bad: 0,
  });
}
 
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
     
     /> :
      (<Notifications
      message = {"No feedback yet"}
      />) 
        }
 
    
</div>
  );
};


export default App;
