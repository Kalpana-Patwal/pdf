import React from 'react';

const SolutionOptions = () => {
  const solutions = [
    {
      title: "iLovePDF Desktop",
      link: "iLovePDF Desktop",
      description: "Download the iLovePDF Desktop App to work with your favorite PDF tools on your Mac or Windows PC. Get a lightweight PDF app that helps you process heavy PDF tasks offline in seconds."
    },
    {
      title: "iLovePDF Mobile",
      link: "iLovePDF Mobile",
      description: "Get the iLovePDF Mobile App to manage documents remotely or on the move. Turn your Android or iPhone device into a PDF Editor & Scanner to annotate, sign, and share documents with ease."
    },
    {
      title: "iLoveIMG",
      link: "iLoveIMG",
      description: "iLoveIMG is the web app that helps you modify images in bulk for free. Crop, resize, compress, convert, and more. All the tools you need to enhance your images in just a few clicks."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-16">
        Looking for another solution?
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {solution.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {solution.description.split(solution.link)[0]}
              <a href="#" className="text-red-500 hover:underline">
                {solution.link}
              </a>
              {solution.description.split(solution.link)[1]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionOptions;