import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ImageLight from '../assets/img/login-office.jpeg';
import ImageDark from '../assets/img/login-office-dark.jpeg';
import {
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@windmill/react-ui';
import axios from 'axios';

function Login() {
  const history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState({});
  return (
    <>
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                aria-hidden="true"
                className="object-cover w-full h-full dark:hidden"
                src={ImageLight}
                alt="Office"
              />
              <img
                aria-hidden="true"
                className="hidden object-cover w-full h-full dark:block"
                src={ImageDark}
                alt="Office"
              />
            </div>
            <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">
                <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Login
                </h1>
                <Label>
                  <span>Email</span>
                  <Input
                    id="email"
                    className="mt-1"
                    type="email"
                    placeholder="john@doe.com"
                  />
                </Label>

                <Label className="mt-4">
                  <span>Password</span>
                  <Input
                    id="password"
                    className="mt-1"
                    type="password"
                    placeholder="***************"
                    onKeyDown={(e) => {
                      if (e.keyCode == 13)
                        document.querySelector('button').click();
                    }}
                  />
                </Label>

                <Button
                  onClick={async () => {
                    const user = await axios
                      .post('/login', {
                        email: document.querySelector('#email').value,
                        password: document.querySelector('#password').value,
                      })
                      .catch((err) =>
                        setModalStatus({
                          header: 'Login Unsucessful',
                          body: err.response.data.message,
                        })
                      );
                    if (user) {
                      localStorage.setItem('authToken', user.data.token);
                      localStorage.setItem('userType', user.data.userType);
                      history.push('/app');

                      if (user.data.userType == 'c')
                        localStorage.setItem('userID', user.data._id);
                    } else {
                      setIsModalOpen(true);
                    }
                  }}
                  className="mt-4"
                  block
                >
                  Log in
                </Button>
              </div>
            </main>
          </div>
        </div>
      </div>
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

export default Login;
