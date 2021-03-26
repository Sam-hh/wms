import React from "react";
import { Input, Label, Button } from "@windmill/react-ui";
import PageTitle from "../components/Typography/PageTitle";
import { LockIcon, MailIcon, PhoneIcon, UserIcon } from "../icons";

function addUser() {
  return (
    <>
      <PageTitle>Add Users</PageTitle>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
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

        <div className="mt-4">
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

        <div className="mt-4">
          <Label>Account Type</Label>
          <div className="mt-2">
            <Label radio>
              <Input type="radio" value="personal" name="accountType" />
              <span className="ml-2">Employee</span>
            </Label>
            <Label className="ml-6" radio>
              <Input type="radio" value="business" name="accountType" />
              <span className="ml-2">Customer</span>
            </Label>
          </div>
        </div>

        <div className="mt-4">
          <Label>
            <span>Password</span>
            <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
              <input
                type="password"
                className="password block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="***********"
              />
              <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                <LockIcon className="w-4 h-4" aria-hidden="true" />
              </div>
            </div>
          </Label>
        </div>
        <div>
          <Label className="mt-6" check>
            <Input
              type="checkbox"
              onClick={(e) => {
                document.querySelector(".password").disabled = e.target.checked
                  ? true
                  : false;
              }}
            />
            <span className="ml-2">Auto Generate Password</span>
          </Label>
        </div>
        <Label className="mt-6" check>
          <Input type="checkbox" />
          <span className="ml-2">
            Ask This User To Change Password On First Login
          </span>
        </Label>
        <div className="px-6 my-6">
          <Button>
            Create account
            <span className="ml-2" aria-hidden="true">
              +
            </span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default addUser;
