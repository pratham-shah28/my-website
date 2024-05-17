// import React from 'react'

// export default function Projects() {
//   return (
//     <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
//   <div className="col-span-2">01</div>
//   <div className="col-span-2">02</div>
//   <div>03</div>
//   <div>04</div>
//   <div>05</div>
// </div>
//   )
// }
import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
}

// Optional: Define the dummy data directly within this component file
const dummyPosts: BlogPost[] = [
  {
    id: 1,
    title: "Blog Post 1",
    summary: "This is a summary of the first blog post.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Blog Post 2",
    summary: "This is a summary of the second blog post.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Blog Post 3",
    summary: "This is a summary of the third blog post.",
    imageUrl: "https://via.placeholder.com/150",
  },
  // Add more posts as needed
];

interface BlogGridProps {
  posts?: BlogPost[]; // posts is now optional and can be overridden by props
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts = dummyPosts }) => {
  // Use the provided posts prop or fallback to dummyPosts if not provided
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[800px]mt-[-96px] mx-10 md:mx-10 my-10 md:my-10">
      {posts.map((post) => (
        <div key={post.id} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={post.imageUrl} alt="Blog post image" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{post.title}</div>
            <p className="text-gray-700 text-base">
              {post.summary}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;