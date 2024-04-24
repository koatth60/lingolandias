import React from "react";
// import PostsComponent from "../components/ReviewsComponent";

const Reviews = () => {
  return (
    <section className=" w-full flex justify-center md:px-[30x]">
      <div className="h-auto font-satoshi lg:max-w-[1245px] relative lg:my-[80px] max-lg:mb-[260px] max-md:mb-[360px] md:mx-[30px] max-md:px-2">
        <h2 className=" font-bold text-center text-6xl text-white max-xl:text-3xl mt-8">
          And this is what hundreds of our students say about Lingolandias
        </h2>
        <div className="flex flex-col  gap-8 bg-white rounded-3xl shadow-xl">
          {/* <PostsComponent/> */}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
