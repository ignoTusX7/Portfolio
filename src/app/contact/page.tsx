"use client";
import Button from "@/components/Button";
import React, { useState } from "react";
import axios from "axios";

interface ContactData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [data, setData] = useState<ContactData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({
      ...data,
      [e.target.name as keyof ContactData]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(data);
    const res = await axios.post("/api/email", {
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    });
    console.log(res);
  };
  return (
    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block mb-2 text-gray-50">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={handleChange}
            className="block w-full p-2 rounded-md bg-white/20 border-gray-500 border focus:border-blue-500 focus:ring-blue-500 focus:ring-1 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-gray-50">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
            className="block w-full p-2 rounded-md bg-white/20 border-gray-500 border focus:border-blue-500 focus:ring-blue-500 focus:ring-1 focus:outline-none "
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-gray-50">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={data.message}
            onChange={handleChange}
            className="block w-full p-2 rounded-md bg-white/20 border-gray-500 border focus:border-blue-500 focus:ring-blue-500 focus:ring-1 focus:outline-none"
            rows={4}
          ></textarea>
        </div>
        <div className="mt-2">
          <Button type="submit" className="bg-white/35 " label="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
