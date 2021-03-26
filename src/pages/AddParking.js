import React from "react";
import { Input, Label, Button, Select, Textarea } from "@windmill/react-ui";
import PageTitle from "../components/Typography/PageTitle";
import { CarIcon, ClockIcon, MailIcon, PhoneIcon, UserIcon } from "../icons";
import SectionTitle from "../components/Typography/SectionTitle";

function AddParking() {
  return (
    <>
      <PageTitle>Add Parking</PageTitle>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <SectionTitle>Vehicle Info</SectionTitle>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-grey-darker text-sm mb-2">
              Model
            </label>
            <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
              <input
                className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="user@wms.com"
              />
              <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                <CarIcon className="w-5 h-5" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label className="block tracking-wide text-grey-darker text-sm mb-2">
              Number
            </label>
            <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
              <input
                className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="user@wms.com"
              />
              <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                <CarIcon className="w-5 h-5" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label className="block tracking-wide text-grey-darker text-sm mb-2">
              Description
            </label>
            <Textarea
              className="mt-1"
              rows="3"
              placeholder="An Optional Description."
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3">
            <label
              className="block tracking-wide text-grey-darker text-sm mb-2"
              htmlFor="grid-state"
            >
              Vehicle Type
            </label>
            <div className="relative">
              <Select>
                <option>Light Duty</option>
                <option>Heavy Duty</option>
              </Select>
            </div>
          </div>
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-grey-darker text-sm mb-2">
              Availability
            </label>
            <Input disabled className="mt-1" value="Available" />
          </div>
          <div className="md:w-1/2 px-3">
            <label className="block tracking-wide text-grey-darker text-sm mb-2">
              Entry Time
            </label>
            <Input disabled className="mt-1" value={`${new Date()} `} />
          </div>
        </div>
        <SectionTitle>User Info</SectionTitle>
        <div className="mt-4">
          <Label>
            <span>Name</span>
            <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
              <input
                className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="Jhon Doe"
              />
              <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                <UserIcon className="w-5 h-5" aria-hidden="true" />
              </div>
            </div>
          </Label>
        </div>

        <div className="mt-4">
          <Label>
            <span>Email</span>
            <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
              <input
                type="email"
                className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="user@wms.com"
              />
              <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                <MailIcon className="w-5 h-5" aria-hidden="true" />
              </div>
            </div>
          </Label>
        </div>

        <div className="mt-4 mb-6">
          <Label>
            <span>Phone</span>
            <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
              <input
                type="tel"
                className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="Jhon Doe"
              />
              <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                <PhoneIcon className="w-6 h-6" aria-hidden="true" />
              </div>
            </div>
          </Label>
        </div>
        <SectionTitle>Parking Options</SectionTitle>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-grey-darker text-sm mb-2">
              Estimated Parking Duartion
            </label>
            <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
              <input
                className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="0"
              />
              <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                <ClockIcon className="w-5 h-5" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label className="block tracking-wide text-grey-darker text-sm mb-2">
              Fine/hour
            </label>
            <Input placeholder="0" />
          </div>
        </div>
        <div>
          <Label className="mt-6" check>
            <Input type="checkbox" checked disabled />
            <span className="ml-2">Email Parking Details to User</span>
          </Label>
        </div>
        <Label className="mt-6" check>
          <Input type="checkbox" checked disabled />
          <span className="ml-2">Accept Parking Terms</span>
        </Label>
        <div className="px-6 my-6">
          <Button>Add Entry</Button>
        </div>
      </div>
    </>
  );
}

export default AddParking;
