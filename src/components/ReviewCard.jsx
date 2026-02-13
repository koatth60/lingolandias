import weronika from "../assets/weronika.jpg";
import { facebookReview } from "../assets/export";

const ReviewCard = ({ time }) => {
  const { created_time, reviewer, review_text, recommendation_type } = time;

  const formattedDate = new Date(created_time).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="pb-3 bg-[#43a047] rounded-lg overflow-hidden 2xl:w-[397px] lg:w-[390px] text-[#6a1b9a] mb-5 relative h-auto">
      <div className="bg-white py-10 px-6">
        <div className="flex mb-4">
          <img
            src={weronika}
            alt="avatar"
            className="w-20 h-20 rounded-full object-cover mr-4"
          />
          <div>
            <h2 className="text-xl font-bold">{reviewer}</h2>
            <p className="my-1">Type: {recommendation_type}</p>
            <p>{formattedDate}</p>
          </div>
        </div>
        <p className="text-lg">{review_text}</p>
      </div>

      <div className="absolute top-2 right-2 w-9">
        <img src={facebookReview} alt="facebook-logo" />
      </div>
    </div>
  );
};

export default ReviewCard;
