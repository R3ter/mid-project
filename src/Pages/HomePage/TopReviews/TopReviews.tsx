import dayjs from "dayjs";
import Review from "../../../Components/Reviews/Review";
import { getTopReviews, IReview } from "../../../firebase/Reviews";
import { useFirebase } from "../../../Hooks/useFirebase";

export default () => {
  const { data, isLoading } = useFirebase(getTopReviews());
  return (
    <div>
      <h2>Top Reviews</h2>
      {!isLoading &&
        data &&
        data.map(({ Rate, comment, studentName, date }: IReview) => {
          return (
            <Review
              comment={comment}
              date={dayjs(date).format("MMM D, YYYY")}
              rate={Rate}
              studentName={studentName}
            />
          );
        })}
    </div>
  );
};
