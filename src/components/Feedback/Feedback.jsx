

const Feedback = ({reviews, totalFeedback}) => {
    return(
<div>
    <ul>
        <li>Good:{reviews.good}</li>
        <li>Neutral:{reviews.neutral}</li>
        <li>Bad:{reviews.bad}</li>
      
    </ul>
</div>
)};

export default Feedback;