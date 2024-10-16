import React from "react";
import FormInput from "../../FormInput";
import FormSelect from "../../FormSelect";

export default function GetInTouchSection() {
  return (
    <div className="px-[120px] py-20 inter-font ">
      <div className="get-in-touch-bg px-10 py-10 rounded-2xl flex justify-between items-center">
        <div className="w-1/2 flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h5 className="text-6xl font-semibold">Get in Touch</h5>
            <p className="text-base">
              Have any questions? We’re here to help.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h5 className="text-3xl font-semibold">Email</h5>
            <p className="text-base">contact@tronacademy.ae</p>
          </div>
        </div>
        <div className="w-1/2">
          <FormInput title={"Name"} type={"text"} />
          <FormInput title={"Email"} type={"email"} />
          <FormSelect
            title={"What Course are you interested in"}
            list={["Coding", "Multimedia", "Digital Coding"]}
          />
          <div className="form-row">
            <label className="form-label">{"Message"}</label>
            <div className="flex items-center">
              <textarea
                className="w-full py-1 px-3 rounded-lg bg-white border border-gray-300 text-gray-900"
                rows={5}
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
