export default function Video({url}) {
    return (
      <video className="h-full lg:w-[400px] w-full rounded-lg" controls>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }