import React, { useState, useEffect } from 'react';
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
} from '@windmill/react-ui';
import PageTitle from '../components/Typography/PageTitle';
import response from '../utils/demo/tableData';
import { BinIcon } from '../icons';
import SectionTitle from '../components/Typography/SectionTitle';
import axios from 'axios';

function Refunds() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // pagination setup
  const [response, setResponse] = useState([]);
  const resultsPerPage = 10;
  const [totalResults, setTotalResults] = useState(20);
  const [modalStatus, setModalStatus] = useState({});

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    (async () => {
      const suppliers = await axios.get('/shop/refunds');
      setResponse(suppliers.data);
      setTotalResults(suppliers.data.length);
      setData(
        suppliers.data.slice((page - 1) * resultsPerPage, page * resultsPerPage)
      );
    })();
  }, [page]);
  return (
    <>
      <PageTitle>Manage Categories</PageTitle>
      <SectionTitle>Issue Refunds</SectionTitle>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="mt-4">
          <Label>
            <span>Purchase ID</span>
            <div className="relative text-gray-500 focus-within:text-purple-600">
              <input
                id="refund"
                className="block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="ID"
              />
              <button
                onClick={async () => {
                  const purchaseId = document.querySelector('#refund')
                    .nodeValue;
                  const refund = await axios
                    .delete(`/shop/${purchaseId}`)
                    .catch((err) => console.error(err));
                }}
                className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              >
                Issue Refund
              </button>
            </div>
          </Label>
        </div>
      </div>
      <SectionTitle>Recently Issued Refunds</SectionTitle>
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Product Name/ID</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Purchased At</TableCell>
              <TableCell>Refunded At</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {data.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">{'Product Name'}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {'Product ID'}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="pl-2">
                  <span className="text-sm mx-4">
                    <span className="has-tooltip">
                      <span className="tooltip rounded shadow-lg p-1 bg-gray-500 text-white -mt-8 -ml-10">
                        Remove From Parking
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
                  <span className="mx-4">50</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {new Date(user.date).toLocaleDateString()}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {new Date(user.date).toLocaleDateString()}
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

export default Refunds;
