import React, { useState, useEffect } from "react";
import PageTitle from "../components/Typography/PageTitle";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Badge,
  Pagination,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "@windmill/react-ui";
import response from "../utils/demo/tableData";
import { SearchIcon } from "../icons";

function manageUsers() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  return (
    <>
      <PageTitle>Sales</PageTitle>
      <div className="flex justify-center flex-1 mb-6">
        <div className="relative w-full max-w-xl focus-within:text-purple-500">
          <div className="absolute inset-y-0 flex items-center pl-2">
            <SearchIcon className="w-4 h-4" aria-hidden="true" />
          </div>
          <Input
            className="pl-8 text-gray-700"
            placeholder="Search By Product Name or purchase ID"
            aria-label="Search"
          />
        </div>
      </div>
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Product Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Purchase Method</TableCell>
              <TableCell>Purchased At</TableCell>
              <TableCell>Purchased By</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {data.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">{"Product Name"}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {"Purchase Id"}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="pl-2">
                  <span className="text-sm">$ {user.amount}</span>
                </TableCell>
                <TableCell className="pl-12">
                  <Badge type={user.status}>{user.status}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {new Date(user.date).toLocaleDateString()}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.name}</span>
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
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalHeader>Modal header</ModalHeader>
        <ModalBody>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et
          eligendi repudiandae voluptatem tempore!
        </ModalBody>
        <ModalFooter>
          <Button
            className="w-full sm:w-auto"
            layout="outline"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </Button>
          <Button className="w-full sm:w-auto">Accept</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default manageUsers;
