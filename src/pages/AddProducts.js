import React from "react";
import { Input, Label, Button, Select } from "@windmill/react-ui";
import PageTitle from "../components/Typography/PageTitle";
import { ProductIcon } from "../icons";

function addUser() {
  return (
    <>
      <PageTitle>Add Products</PageTitle>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="mt-4">
          <Label>
            <span>Product Name</span>
            <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
              <input
                className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="Jhon Doe"
              />
              <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                <ProductIcon className="w-6 h-6" aria-hidden="true" />
              </div>
            </div>
          </Label>
        </div>

        <div className="mt-4">
          <Label>
            <span>Product Category</span>
            <Select className="mt-1">
              <option>Google</option>
              <option>Microsoft</option>
              <option>Amazon</option>
            </Select>
          </Label>
        </div>

        <div className="mt-4">
          <Label>
            <span>Product Supplier</span>
            <Select className="mt-1">
              {" "}
              <option>Google</option>
              <option>Microsoft</option>
              <option>Amazon</option>
            </Select>
          </Label>
        </div>

        <div className="mt-4">
          <Label>In Stock</Label>
          <div className="mt-2">
            <Label radio>
              <Input
                onClick={(e) => {
                  document.querySelector(
                    "input[type='number']"
                  ).disabled = false;
                }}
                type="radio"
                value="personal"
                name="accountType"
              />
              <span className="ml-2">Yes</span>
            </Label>
            <Label className="ml-6" radio>
              <Input
                onClick={(e) => {
                  document.querySelector(
                    "input[type='number']"
                  ).disabled = true;
                }}
                type="radio"
                value="business"
                name="accountType"
              />
              <span className="ml-2">No</span>
            </Label>
          </div>
        </div>

        <div className="mt-4">
          <Label>
            <span>Number Of Products in Stock</span>
            <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
              <input
                type="number"
                className="password block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="1"
              />
              <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                <ProductIcon className="w-6 h-6" aria-hidden="true" />
              </div>
            </div>
          </Label>
        </div>
        <div className="px-6 my-6">
          <Button>Add Product</Button>
        </div>
      </div>
    </>
  );
}

export default addUser;
