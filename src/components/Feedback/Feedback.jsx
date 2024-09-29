import  style from "./Feedback.module.css";

const Feedback = ({reviews, positiveFeedback, totalFeedback}) => {
    return(
<div>
    
    <ul className ={style.list}>
        <li className = {style.listItem}>Good:{reviews.good}</li>
        <li className = {style.listItem}>Neutral:{reviews.neutral}</li>
        <li className = {style.listItem}>Bad:{reviews.bad}</li>
        <li className = {style.listItem}>Total:{totalFeedback}</li>
        <li className = {style.listItem}>Positive:{positiveFeedback}%</li>
      
    </ul>
</div>
)};

export default Feedback;