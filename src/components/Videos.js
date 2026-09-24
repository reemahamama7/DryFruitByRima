import React from "react";

const Videos = () => {
  const videos = [
    {
      title: "Health & Beauty Benefits of Pistachios",
      url: "https://www.youtube.com/embed/example1", // Replace with real YouTube links
    },
    {
      title: "Amazing Benefits of Cashew Nuts",
      url: "https://www.youtube.com/embed/example2",
    },
    {
      title: "Dry Fruits And Their Beauty Benefits",
      url: "https://www.youtube.com/embed/example3",
    },
    {
      title: "Benefits of Dry Fruits | Health Benefits",
      url: "https://www.youtube.com/embed/example4",
    },
  ];

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold text-[#805e36]">Videos</h2>
        <div className="mt-2 border-t-2 border-[#805e36] w-16 mx-auto"></div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <iframe src={video.url} title={video.title} className="w-full h-48 rounded-lg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              <p className="mt-2 text-lg font-medium text-gray-800">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
