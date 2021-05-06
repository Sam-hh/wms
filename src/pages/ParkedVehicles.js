import React, { useState, useEffect } from 'react';
import PageTitle from '../components/Typography/PageTitle';
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
  Input,
} from '@windmill/react-ui';
import response from '../utils/demo/tableData';
import { BinIcon, SearchIcon } from '../icons';
import axios from 'axios';

function manageUsers() {
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

  const searchParking = () => {
    return (e) => {
      const searchPhrase = e.target.value;

      const matched = response.filter((e) => {
        if (e.modal.includes(searchPhrase) || e.number.includes(searchPhrase))
          return e;
      });
      setData(
        matched.slice((page - 1) * resultsPerPage, page * resultsPerPage)
      );
    };
  };

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    (async () => {
      const suppliers = await axios.get('/pms/parking');
      console.log(suppliers);
      setResponse(suppliers.data);
      setTotalResults(suppliers.data.length);
      setData(
        suppliers.data.slice((page - 1) * resultsPerPage, page * resultsPerPage)
      );
    })();
  }, [page]);

  return (
    <>
      <PageTitle>Manage Parked Vehicles</PageTitle>
      <div className="flex justify-center flex-1 mb-6">
        <div className="relative w-full max-w-xl focus-within:text-purple-500">
          <div className="absolute inset-y-0 flex items-center pl-2">
            <SearchIcon className="w-4 h-4" aria-hidden="true" />
          </div>
          <Input
            onChange={searchParking()}
            className="pl-8 text-gray-700"
            placeholder="Search By vehicle name or number"
            aria-label="Search"
          />
        </div>
      </div>
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Name/Id</TableCell>
              <TableCell>Actions</TableCell>
              <TableCell>Vehicle Type</TableCell>
              <TableCell>Parked At</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {data.map(
              (vehicle) =>
                vehicle && (
                  <TableRow key={vehicle._id}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <div>
                          <p className="font-semibold">{vehicle.modal}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {vehicle.number}
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
                            onClick={async () => {
                              const deletedParking = await axios
                                .delete(`/pms/parking/${vehicle._id}`)
                                .catch(console.error);
                              if (deletedParking) {
                                data.splice(
                                  data.findIndex((c) => c._id == vehicle._id),
                                  1,
                                  response[
                                    response.findIndex(
                                      (c) => c._id == vehicle._id
                                    ) + 1
                                  ]
                                );
                                response.splice(
                                  response.findIndex(
                                    (c) => c._id == vehicle._id
                                  ),
                                  1
                                );
                                setTotalResults((prevCount) => prevCount - 1);
                              }
                            }}
                            layout="link"
                            aria-label="Like"
                          />
                        </span>
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge
                        type={vehicle.type == 'l' ? 'primary' : 'success '}
                      >
                        {vehicle.type == 'l' ? 'Light Duty' : 'Heavy Duty'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {new Date(vehicle.entryTime).toLocaleDateString()}
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

export default manageUsers;
