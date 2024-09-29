
import style from './Options.module.css';

const Options = ({updateFeedback, resetFeedback, totalFeedback}) => {
  return (
    <div>
      <ul className= {style.buttonsList}>
        <li>
        <button className = {style.button} onClick={()=>updateFeedback("good")}>Good</button>
        </li>
        <li>
        <button className = {style.button} onClick={()=>updateFeedback("neutral")}>Neutral</button>
        </li>
        <li>
        <button className = {style.button} onClick={()=>updateFeedback("bad")}>Bad</button>
        </li>

        {totalFeedback > 0 && (
        <button className = {style.button}
         
          onClick={() => {
            resetFeedback();
          }}
        >
          Reset
        </button>
      )}
     </ul>  
    </div>
    
  );
};

export default Options;