
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import { useState } from 'react';

import './App.css'

function App() {
const [reviews, setReviews] = useState({
	good: 0,
	neutral: 0,
	bad: 0
});

const updateFeedback = (feedbackType )=> {
  setReviews({...reviews, [feedbackType ]:reviews[feedbackType] = 1})
 }
  return (
    <>
      <div>
        
      </div>

  
      
 
     <Description/>
     <Options
     updateFeedback={updateFeedback}
     />
     <Feedback
     reviews = {reviews}
     />
    </>
  )
}


export default App;
