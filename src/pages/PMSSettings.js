import React from "react";
import { Input, Label, Button, Select, Textarea } from "@windmill/react-ui";
import PageTitle from "../components/Typography/PageTitle";
import { CarIcon, ClockIcon, MailIcon, PhoneIcon, UserIcon } from "../icons";
import SectionTitle from "../components/Typography/SectionTitle";

function PMSSettings() {
  return (
    <>
      <PageTitle>Manage PMS</PageTitle>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <SectionTitle>PMS Options</SectionTitle>
        <div className="-mx-3 flex mb-6">
          <div className="w-1/2 px-3 mb-6 md:mb-0">
            <span className="text-grey-darker text-sm">
              Allow Parking / Use Of PMS
            </span>
          </div>
          <div className="w-1/2 px-3">
            <label
              htmlFor="toogleA"
              className="flex items-center cursor-pointer"
              style={{
                marginLeft: "85%",
              }}
            >
              <div className="relative">
                <input id="toogleA" type="checkbox" className="hidden" />
                <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner" />
                <div className="toggle__dot absolute w-6 h-6 bg-gray-200 rounded-full shadow inset-y-0 left-0" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PMSSettings;
