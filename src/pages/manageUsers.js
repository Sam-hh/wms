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
  Avatar,
  Badge,
  Pagination,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from '@windmill/react-ui';
import response from '../utils/demo/tableData';
import { resetIcon, SearchIcon } from '../icons';
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

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    (async () => {
      const suppliers = await axios.get('/users/');
      console.log(suppliers);
      setResponse(suppliers.data);
      setTotalResults(suppliers.data.length);
      setData(
        suppliers.data.slice((page - 1) * resultsPerPage, page * resultsPerPage)
      );
    })();
  }, [page]);

  const searchUser = () => {
    let orignalList = data;
    return (e) => {
      const searchPhrase = e.target.value;

      const matched = response.filter((e) => {
        if (e.name.includes(searchPhrase) || e.email.includes(searchPhrase))
          return e;
      });
      setData(
        matched.slice((page - 1) * resultsPerPage, page * resultsPerPage)
      );
    };
  };

  return (
    <>
      <PageTitle>Manage Users</PageTitle>
      <div className="flex justify-center flex-1 mb-6">
        <div className="relative w-full max-w-xl focus-within:text-purple-500">
          <div className="absolute inset-y-0 flex items-center pl-2">
            <SearchIcon className="w-4 h-4" aria-hidden="true" />
          </div>
          <Input
            onChange={searchUser()}
            className="pl-8 text-gray-700"
            placeholder="Search for Users"
            aria-label="Search"
          />
        </div>
      </div>
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Name</TableCell>
              <TableCell>Actions</TableCell>
              <TableCell>User Type</TableCell>
              <TableCell>Registered At</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {data.map((user) => (
              <TableRow key={user._id}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar
                      className="hidden mr-3 md:block"
                      src={
                        'https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82'
                      }
                      alt="User image"
                    />
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {user.job}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="pl-2">
                  <span className="text-sm">
                    <span className="has-tooltip">
                      <span className="tooltip rounded shadow-lg p-1 bg-gray-500 text-white -mt-8 -ml-6">
                        Reset Password
                      </span>
                      <Button
                        className="ml-4"
                        icon={resetIcon}
                        layout="link"
                        aria-label="Link"
                        onClick={async () => {
                          const User = await axios
                            .patch(`/users/reset/${user._id}`)
                            .catch(console.error);
                          if (User) {
                            setModalStatus({
                              header: 'Password Changed',
                              body: User.data.message,
                            });
                          } else {
                            setModalStatus({
                              header: 'Password Change Failed',
                              body: 'Please check the user id',
                            });
                          }
                          setIsModalOpen(true);
                        }}
                      />
                    </span>
                  </span>
                </TableCell>
                <TableCell>
                  <Badge type={user.accountType == 'c' ? 'primary' : 'success'}>
                    {user.accountType == 'c' ? 'Customer' : 'Employee'}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {new Date(user.registeredAt).toLocaleDateString()}
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
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalHeader>{modalStatus.header}</ModalHeader>
        <ModalBody>{modalStatus.body}</ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setIsModalOpen(false)}
            className="w-full sm:w-auto"
          >
            Proceed
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default manageUsers;
