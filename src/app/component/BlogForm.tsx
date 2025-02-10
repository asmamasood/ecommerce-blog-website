"use client";  // Next.js Client Component

import { useState } from "react";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, description, date, image });
    // Yahan API ya state update kar sakti hain
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
      <input className="w-full p-2 border rounded mb-2" type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <textarea className="w-full p-2 border rounded mb-2" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <input className="w-full p-2 border rounded mb-2" type="date" onChange={(e) => setDate(e.target.value)} />
      <input className="w-full p-2 border rounded mb-2" type="text" placeholder="Image URL" onChange={(e) => setImage(e.target.value)} />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default BlogForm;
