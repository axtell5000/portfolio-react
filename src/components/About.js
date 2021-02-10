import React, {useEffect, useState} from 'react';
import imageUrlBuilder from '@sanity/image-url';
import BlockCOntent from '@sanity/block-content-to-react';

import sanityClient from '../client';
import aboutImg from '../about.jpg';

const builder = imageUrlBuilder(sanityCLient);

function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  // set up state
  const [author, setAuthor] = useState(null);
  // fetching data once
  useEffect(() => {
    sanityClient.fetch(`*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`)
    .then(data => setAuthor(data[0]))
    .catch(err => console.log(err));
  }, []);

  if (!author) return <div>Loading...</div>

  return (
    <main className="relative">
      <img src={aboutImg} alt="About us image" className="absolute w-full"/>
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          <img src={urlFor(author.authorImage).url()} alt={author.name} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"/>
          <div className="text-lg flex flex-column justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              Hi there. I am{" "}
              <span className="text-green-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockCOntent blocks={author.bio} projectId="x9oexwjk" dataset="production" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
