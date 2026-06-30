export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <ReviewsItem text={review.text} key={review.id} />
        ))}
      </ul>
    </div>
  );
};

const ReviewsItem = ({ text }) => {
  return <li>{text}</li>;
};
