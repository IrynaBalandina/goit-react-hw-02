import { useState } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';

import './App.css'

function App() {
  const [reviews, setReviews] = useState({
    
      good: 0,
      neutral: 0,
      bad: 0
    
  });

  return (
    <>
      <div>
        
      </div>

  
      
 
     <Description/>
     <Options/>
     <Feedback/>
    </>
  )
}

export default App;
