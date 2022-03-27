import { ReactComponent as StarImage } from 'assets/images/star.svg';
import { Review } from 'type/review';

type Props = {
    review: Review;
}

const ListReview = ({ review } : Props) => {
  return (
    <div className="card-container-list">
      <div className="name-title-evaluation">
        <StarImage />
        <h3>{review.user.name}</h3>
      </div>
      <div className="card-evaluation">
        <p>{review.text}</p>
      </div>
    </div>
  );
};
export default ListReview;
