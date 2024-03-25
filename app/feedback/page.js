"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Feedback() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (title && message) {
      const res = await fetch("http://localhost:3000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, message }),
      });

      if (res.ok) {
        router.push("/thank-you");
      }
    }
  };
  return (
    <div>
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
