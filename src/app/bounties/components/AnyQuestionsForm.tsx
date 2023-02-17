"use client";
import { useState } from "react";
import { SimpleDropdown, TextArea, TextInput } from "@/components";

export const AnyQuestionsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // TODO
  };

  return (
    <div className="flex flex-col gap-6 px-16">
      <TextInput
        id="name"
        label="Name"
        type="text"
        placeholder="Write your full name"
        value={name}
        onChange={setName}
      />

      <TextInput
        id="email"
        label="Email"
        type="text"
        placeholder="E.g. example@gmail.com"
        value={email}
        onChange={setEmail}
      />

      <SimpleDropdown
        label="Subject"
        placeholder="Select"
        value={subject}
        onChange={setSubject}
        options={[
          { label: "General Enquiry", value: "general-enquiry" },
          { label: "Lorem", value: "lorem" },
          { label: "Ipsum", value: "ipsum" },
        ]}
      />

      <TextArea
        id="message"
        label="Message"
        placeholder="Write your query here"
        value={message}
        onChange={setMessage}
      />

      <button onClick={handleSubmit} className="sc__btn">
        Submit
      </button>
    </div>
  );
};
