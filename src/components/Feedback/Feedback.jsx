

const Feedback = ({reviews, positiveFeedback, totalFeedback}) => {
    return(
<div>
    
    <ul>
        <li>Good:{reviews.good}</li>
        <li>Neutral:{reviews.neutral}</li>
        <li>Bad:{reviews.bad}</li>
        <li>Total:{totalFeedback}</li>
        <li>Positive:{positiveFeedback}</li>
      
    </ul>
</div>
)};

export default Feedback;