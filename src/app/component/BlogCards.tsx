import React from "react";
import Image from "next/image";

type BlogProps = {
  title: string;
  description: string;
  date: string;
  image: string;
};

const BlogCard: React.FC<BlogProps> = ({ title, description, date, image }) => {
  return (
    <div className="grid-cols-1 lg:grid-cols-3 max-w-md bg-gray-300 rounded-xl shadow-lg overflow-hidden">
         <Image src={image} alt={title} width={450} height={450} />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600 text-sm">{date}</p>
        <p className="text-gray-700 mt-2">{description}</p>
        <a href="{`BlogDetailPage/${blogPost._id} " className="text-blue-500 text-sm font-medium">Read more →</a>
      </div>
    </div>
  );
};

export default BlogCard;
