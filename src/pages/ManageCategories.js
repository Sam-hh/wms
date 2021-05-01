import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import {
  Label,
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Pagination,
  Button,
} from "@windmill/react-ui";
import PageTitle from "../components/Typography/PageTitle";
import { BinIcon } from "../icons";
import SectionTitle from "../components/Typography/SectionTitle";

function ManageCategories() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  // pagination setup
  const [response, setResponse] = useState([]);
  const resultsPerPage = 10;
  const [totalResults, setTotalResults] = useState(20);
  const [showAlert, setShowAlert] = useState(false);
  const [alertcategory, setAlertCategory] = useState("");

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }
  const InputRef = useRef();
  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    (async () => {
      const categories = await Axios.get("/products/categories");
      setResponse(categories.data);
      console.log(categories.data.length);
      setTotalResults(categories.data.length);
      setData(
        categories.data.slice(
          (page - 1) * resultsPerPage,
          page * resultsPerPage
        )
      );
    })();
  }, [page]);

  return (
    <>
      <PageTitle>Manage Categories</PageTitle>
      <SectionTitle>Add Category</SectionTitle>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="mt-4">
          <Label>
            <span>Category Name</span>
            <div className="relative text-gray-500 focus-within:text-purple-600">
              <input
                ref={InputRef}
                className="block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="Shoes"
              />
              <button
                onClick={async () => {
                  const category = await Axios.post("/products/category", {
                    name: InputRef.current.value,
                  });
                  setShowAlert(true);
                  if (category.status < 400) {
                    if (data.length < 10) data.push(category.data);
                    setResponse((categories) => [...categories, category.data]);
                    setTotalResults((prevCount) => prevCount + 1);
                  }
                }}
                className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              >
                Add Category
              </button>
            </div>
          </Label>
        </div>
      </div>
      <SectionTitle>Manage Category</SectionTitle>
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Name</TableCell>
              <TableCell>Actions</TableCell>
              <TableCell>No Of Products</TableCell>
              <TableCell>Added</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {data.map((category) => (
              <TableRow key={category.id}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">{category.name}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="pl-2">
                  <span className="text-sm mx-4">
                    <span className="has-tooltip">
                      <span className="tooltip rounded shadow-lg p-1 bg-gray-500 text-white -mt-8 -ml-12">
                        Remove Category
                      </span>
                      <Button
                        icon={BinIcon}
                        onClick={() => setIsModalOpen(true)}
                        layout="link"
                        aria-label="Like"
                      />
                    </span>
                  </span>
                </TableCell>
                <TableCell>
                  <span className="mx-10">{category.products}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {new Date(category.dateAdded).toLocaleDateString()}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>
    </>
  );
}

export default ManageCategories;
