"use client"; 

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";


export default function BlogDetailPage() {
  const blogPosts = [
  {
    id: "1",
    title: "Eye Glasses",
    description: "Upgrade Your Look with Trendy & Protective Sunglasses",
    date: "Jan 01, 2025",
    image: "/19.jpg", 
   price: "$45"
  },
  {
    id: "2",
    title: "Eye Glasses",
    description: "Enhance Your Vision with Stylish & Comfortable Eyeglasses",
    date: "jan 02, 2025",
    image: "/15.jpg",
    price: "$50"
  },
  {
    id: "3",
    title: "Eye Glasses",
    description: "upgrade Your Look with Your Vision with Stylish Protective  Eyeglasses",
    date: "jan 03, 2025",
    image: "/13.jpg",
    price: "$40"
  },
  {
    id: "4",
    title: "Eye Glasses",
    description: "Enhance Your Vision with Stylish  Eyeglasses",
    date: "jan 04, 2025",
    image: "/11.jpg", 
    price: "$41"
  },
  {
    id: "5",
    title: "Eye Glasses",
    description: "Enhance Your Vision with Stylish  Eyeglasses",
    date: "jan 05, 2025",
    image: "/1.jpg",
    price: "$40"
  },
  {
    id: "6",
    title: "Eye Glasses",
    description: "Enhance Your Vision with Stylish  Eyeglasses",
    date: "jan 06, 2025",
    image: "/3.jpg",
    price: "$34"
  }, 
  {
    id: "7",
    title: "Eye Glasses",
    description: "Enhance Your Vision with Stylish  Eyeglasses",
    date: "jan 07, 2025",
    image: "/4.jpg",
    price: "$40"
  },
   {
    id: "8",
    title: "Eye Glasses",
    description: "Enhance Your Vision with Stylish  Eyeglasses",
    date: "jan 08, 2025",
    image: "/2.jpg",
    price: "$22"
  },
  {
    id: "9",
    title: "Eye Glasses",
    description: "Upgrade Your Look with Trendy & Protective Sunglasses",
    date: "Jan 01, 2025",
    image: "/5.jpg", 
    price: "$40"
   
  },
  {
    id: "10",
    title: "Eye Glasses",
    description: "Enhance Your Vision with Stylish & Comfortable Eyeglasses",
    date: "jan 02, 2025",
    image: "/6.jpg",
    price: "$42"
  },
  {
    id: "11",
    title: "Eye Glasses",
    description: "upgrade Your Look with Your Vision with Stylish Protective  Eyeglasses",
    date: "jan 03, 2025",
    image: "/7.jpg",
    price: "$38"
  },
  {
    id: "12",
    title: "Eye Glasses",
    description: "Enhance Your Vision with Stylish  Eyeglasses",
    date: "jan 04, 2025",
    image: "/8.jpg",
    price: "$33"
  },
  {
    id: "13",
    title: "Eye Glasses",
    description: "Enhance Your Vision with Stylish  Eyeglasses",
    date: "jan 05, 2025",
    image: "/9.jpg",
    price: "$45"
  
  },
  {
    id: "14",
    title: "Eye Glasses",
    description: "Enhance Your Vision with Stylish  Eyeglasses",
    date: "jan 06, 2025",
    image: "/10.jpg",
    price: "$40"
  }, 
  {
    id: "15",
    title: "Eye Glasses",
    description: "Upgrade Your Look with Trendy & Protective Sunglasses",
    date: "Jan 01, 2025",
    image: "/18.jpg",
    price: "$20" 
   
  },
  {
    id: "16",
    title: "Eye Glasses",
    description: "Enhance Your Vision with Stylish & Comfortable Eyeglasses",
    date: "jan 02, 2025",
    image: "/16.jpg",
    price: "$25"
  },
  {
    id: "17",
    title: "Eye Glasses",
    description: "upgrade Your Look with Your Vision with Stylish Protective  Eyeglasses",
    date: "jan 03, 2025",
    image: "/12.jpg",
    price: "$30"
  },
  {
    id: "18",
    title: "Eye Glasses",
    description: "Enhance Your Vision with Stylish  Eyeglasses",
    date: "jan 04, 2025",
    image: "/14.jpg",
    price: "$28"
  },
  {
    id: "19",
    title: "Eye Glasses",
    description: "Enhance Your Vision with Stylish  Eyeglasses",
    date: "jan 04, 2025",
    image: "/17.jpg",
    price: "$35"
  },
];
console.log(blogPosts)
  const params = useParams();
  

  const blog = blogPosts.find((post) => post.id === params.id);

  if (!blog) {
    return <p className="text-center text-red-500">Blog not found!</p>;
  }

  // Related Posts (Same Category)
  const relatedPosts = blogPosts.filter((post) => post.price === blog.price && post.id !== blog.id);

  // Comments State
  const [comments, setComments] = useState([
    { name: "Ali", text: "Great Glasses quality" },
    { name: "Ayesha", text: "Very glade to see this quality.. thanks" },
  ]);
  const [newComment, setNewComment] = useState("");

  // Add Comment
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, { name: "Guest", text: newComment }]);
      setNewComment("");
    }
  };



  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-300">
      {/* Blog Content */}
      <Image className=" rounded-lg mb-4" src={blog.image} alt={blog.title} width={300} height={300}/>
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <p className="text-gray-600 text-sm">{blog.date}</p>
      <p className="text-gray-600 text-lg text-bold"> Glasses Price :{blog.price}</p>
      <p className="mt-4 text-gray-800">Stylish & Protective Eyewear for Every Occasion
      Discover the perfect blend of fashion and functionality with our premium collection of 
      sunglasses and eyeglasses. Whether you are looking for UV protection blue light 
      filtering or simply a stylish upgrade our eyewear is designed to suit every need. 
      Elevate your look while ensuring maximum comfort and durability. Shop now and see the 
      world in style</p>
      <div className="flex  items-center gap-5">
        <Link href={"/blogForm"}>
      <button className="p-2 rounded bg-blue-500 text-white">Order Now</button>
      </Link>
      <button className="p-2 rounded bg-blue-500 text-white">Add To Cart</button>
      </div>
     

      {/* Comments Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Comments</h2>
        <ul className="mt-4">
          {comments.map((comment, index) => (
            <li key={index} className="p-2 border-b">
              <strong>{comment.name}:</strong> {comment.text}
            </li>
          ))}
        </ul>
        {/* Add Comment Form */}
        <form onSubmit={handleCommentSubmit} className="mt-4">
          <input
            type="text"
            className="w-full p-2 border rounded mb-2"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Add Comment
          </button>
        </form>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {relatedPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <div className="p-4 border rounded-lg shadow hover:shadow-lg cursor-pointer">
                  <Image className=" object-cover rounded" src={post.image} alt={post.title}  width={200} height={40}/>
                  <h3 className="text-lg font-bold mt-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
