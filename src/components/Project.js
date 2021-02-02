import React, {useState, useEffect} from 'react';

import sanityClient from '../client';

export default function Project() {
  // setup state
  const [projectData, setProjectData] = useState(null);

  // fetching data just once
  useEffect(() => {
    sanityClient.fetch(`*[_type == "project"]{
      title,
      date,
      description,
      siteUrl,
      githubUrl,
      mainImage,
      tags
    }`)
    .then(data => setProjectData(data))
    .catch(err => console.log(err));
  }, [])

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my projects</h2>
        <section className="grid grid-cols-2 gap-8">
          {projectData && projectData.map((project, index) => (
            <article className="relative rounded-lg shadow-xl bg-white p-16" key={index}>
              <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                <a 
                  href={project.siteUrl} 
                  title={project.title}
                  target="_blank"
                  rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <img 
                  src={project.mainImage.asset.url}
                  alt={project.mainImage.alt}
                  className="w-full h-full rounded-r"
                />
              <div className="text-gray-500 text-xs space-x-4">
                
                <p className="my-6 text-lg text-gray-700 leading-relaxed">{project.description}</p>
                <a 
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View The Project"
                  className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                >
                  View The Project
                </a>
                <br/>
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Github repository"
                  className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                >
                  View Github repository
                </a>
                
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
