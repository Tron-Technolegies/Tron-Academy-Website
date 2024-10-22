import React, { useState } from "react";
import FormInput from "../../FormInput";
import FormSelect from "../../FormSelect";
import { handleEnquiryFormClick } from "../../../utils/whatsApp";

export default function GetInTouchSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("Coding");
  const [message, setMessage] = useState("");
  return (
    <div className="lg:px-[120px] lg:py-20 px-10 py-5 inter-font ">
      <div className="get-in-touch-bg sm:px-10 sm:py-10 p-5 rounded-2xl flex md:flex-row flex-col gap-10 justify-between items-center">
        <div className="md:w-1/2 w-full flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h5 className="lg:text-6xl md:text-4xl text-2xl font-semibold">
              Get in Touch
            </h5>
            <p className="md:text-base text-sm">
              Have any questions? We’re here to help.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h5 className="lg:text-3xl md:text-xl text-lg font-semibold">
              Email
            </h5>
            <p className="md:text-base text-sm">contact@tronacademy.ae</p>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <FormInput
            title={"Name"}
            type={"text"}
            value={name}
            onchange={(e) => setName(e.target.value)}
          />
          <FormInput
            title={"Email"}
            type={"email"}
            value={email}
            onchange={(e) => setEmail(e.target.value)}
          />
          <FormSelect
            title={"What Course are you interested in"}
            list={["Coding", "Multimedia", "Digital Coding"]}
            value={course}
            onchange={(e) => setCourse(e.target.value)}
          />
          <div className="form-row">
            <label className="form-label">{"Message"}</label>
            <div className="flex items-center">
              <textarea
                className="w-full py-1 px-3 rounded-lg bg-white border border-gray-300 text-gray-900"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-primary"
            onClick={() =>
              handleEnquiryFormClick({ name, email, course, message })
            }
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
