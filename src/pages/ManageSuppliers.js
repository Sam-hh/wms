import React, { useState, useEffect } from 'react';
import Axios from 'axios';
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
  HelperText,
} from '@windmill/react-ui';
import PageTitle from '../components/Typography/PageTitle';
import response from '../utils/demo/tableData';
import { BinIcon, UserIcon, MailIcon, PhoneIcon } from '../icons';
import SectionTitle from '../components/Typography/SectionTitle';

function addUser() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  // pagination setup
  const [response, setResponse] = useState([]);
  const resultsPerPage = 10;
  const [totalResults, setTotalResults] = useState(20);
  const [showAlert, setShowAlert] = useState(false);
  const [alertcategory, setAlertCategory] = useState(true);

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    (async () => {
      const suppliers = await Axios.get('/products/suppliers');
      setResponse(suppliers.data);
      setTotalResults(suppliers.data.length);
      setData(
        suppliers.data.slice((page - 1) * resultsPerPage, page * resultsPerPage)
      );
    })();
  }, [page]);

  return (
    <>
      <PageTitle>Manage Suppliers</PageTitle>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="mt-4">
          <Label>
            <span>Name</span>
            <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
              <input
                className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="Jhon Doe"
                id="name"
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
                id="email"
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
                id="phone"
              />
              <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                <PhoneIcon className="w-6 h-6" aria-hidden="true" />
              </div>
            </div>
          </Label>
        </div>

        <div className="px-6 my-6">
          <Button
            onClick={async () => {
              const supplier = {
                name: document.querySelector('#name').value,
                email: document.querySelector('#email').value,
                phone: document.querySelector('#phone').value,
              };
              const supplierInfo = await Axios.post(
                '/products/supplier',
                supplier
              ).catch(console.error);
              setShowAlert(true);
              if (supplierInfo) {
                if (data.length < 10) data.push(supplierInfo.data);
                setResponse((suppliers) => [...suppliers, supplierInfo.data]);
                setTotalResults((prevCount) => prevCount + 1);
                setAlertCategory(true);
              } else setAlertCategory(false);
            }}
          >
            Add Supplier
          </Button>
        </div>
        {showAlert && (
          <HelperText valid={alertcategory} invalid={!alertcategory}>
            {alertcategory
              ? 'Supplier created'
              : 'Failed to create the Supplier'}
          </HelperText>
        )}
      </div>
      <SectionTitle>Manage Suppliers</SectionTitle>
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
            {data.map(
              (supplier) =>
                supplier && (
                  <TableRow key={supplier._id}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <div>
                          <p className="font-semibold">{supplier.name}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="pl-2">
                      <span className="text-sm mx-4">
                        <span className="has-tooltip">
                          <span className="tooltip rounded shadow-lg p-1 bg-gray-500 text-white -mt-8 -ml-12">
                            Remove Supplier
                          </span>
                          <Button
                            icon={BinIcon}
                            onClick={async () => {
                              const deletedSupplier = await Axios.delete(
                                `/products/supplier/${supplier._id}`
                              ).catch(console.error);
                              if (deletedSupplier) {
                                data.splice(
                                  data.findIndex((c) => c._id == supplier._id),
                                  1,
                                  response[
                                    response.findIndex(
                                      (c) => c._id == supplier._id
                                    ) + 1
                                  ]
                                );
                                response.splice(
                                  response.findIndex(
                                    (c) => c._id == category._id
                                  ),
                                  1
                                );
                                setTotalResults((prevCount) => prevCount - 1);
                              }
                            }}
                            layout="link"
                            aria-label="Link"
                          />
                        </span>
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="mx-10">{supplier.supplies}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {new Date(supplier.dateAdded).toLocaleDateString()}
                      </span>
                    </TableCell>
                  </TableRow>
                )
            )}
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

export default addUser;
