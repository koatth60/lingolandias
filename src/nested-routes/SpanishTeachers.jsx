import { Carousel, IconButton } from "@material-tailwind/react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { HorizontalCard } from "../components/HorizontalCard";

export function CarouselCustomArrows() {
  return (
    <div>
      <Header />
      <section className="flex flex-col teachers items-center h-screen font-satoshi 2xl:px-[330px] lg:px-[50px] md:px-[30px] relative py-[140px] max-lg:mb-[260px] max-md:mb-[360px] max-md:px-2">
        <h2 className="xl:text-5xl lg:text-2xl max-lg:text-xl text-white font-bold mb-4 text-center">
          To są nasi nauczyciele{" "}
          <span className="xl:text-5xl lg:text-2xl max-lg:text-2xl font-bold bg-[#43a047] text-white xl:w-[220px] md:w-[150px] max-md:w-[130px] max-md:text-center rounded-2xl px-2 pb-1 ">
            hiszpańskiego
          </span>
        </h2>
        <p className="text-xl text-white text-left max-w-[1000px] mb-6">
          Nasi nauczyciele języka hiszpańskiego są nie tylko wykwalifikowani i
          kompetentni, ale również pełni entuzjazmu i energii. Ich podejście do
          nauczania jest innowacyjne i interaktywne, co sprawia, że zajęcia są
          nie tylko efektywne, ale również inspirujące. Wiedzą jak zainteresować
          uczniów i zachęcić ich do aktywnego udziału w procesie nauki.
        </p>
        

        <Carousel
          className="rounded-xl max-w-[68rem] min-h-[26rem]"
          transition={{ duration: 1 }}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4 bg-white rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-white rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          <div>
            <HorizontalCard />
          </div>
          <div>
            <HorizontalCard />
          </div>
          <div>
            <HorizontalCard />
          </div>
        </Carousel>
      </section>
      <Footer />
    </div>
  );
}
