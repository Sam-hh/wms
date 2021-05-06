import React, { useState } from 'react';
import {
  Input,
  Label,
  Button,
  Select,
  Textarea,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@windmill/react-ui';
import PageTitle from '../components/Typography/PageTitle';
import { CarIcon, ClockIcon, MailIcon, PhoneIcon, UserIcon } from '../icons';
import SectionTitle from '../components/Typography/SectionTitle';
import axios from 'axios';

function AddParking() {
  const [user, setUser] = useState(null);
  const [modalStatus, setModalStatus] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                id="modal"
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
                id="number"
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
              id="description"
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
              <Select id="type">
                <option value="l">Light Duty</option>
                <option value="h">Heavy Duty</option>
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
            <span>Email</span>
            <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
              <input
                type="email"
                id="email"
                className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="user@wms.com"
                onBlur={async (e) => {
                  const user = await axios
                    .get(`/users/${e.target.value}`)
                    .catch((err) => console.error(err));
                  if (user) setUser(user.data);
                }}
              />
              <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                <MailIcon className="w-5 h-5" aria-hidden="true" />
              </div>
            </div>
          </Label>
        </div>
        <div className="mt-4">
          <Label>
            <span>Name</span>
            <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
              <input
                id="name"
                className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="Jhon Doe"
              />
              <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                <UserIcon className="w-5 h-5" aria-hidden="true" />
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
                id="phone"
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
                id="duration"
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
            <Input id="fine" placeholder="0" />
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
          <Button
            onClick={async () => {
              let userId = user ? user._id : undefined;
              if (!user) {
                let password = Math.random().toString(36).substring(2, 12);
                const data = {
                  name: document.querySelector('#name').value,
                  password,
                  email: document.querySelector('#email').value,
                  phone: document.querySelector('#phone').value,
                  accountType: 'c',
                };
                const newUser = await axios
                  .post('/users', data)
                  .catch((err) => console.error(err.response));
                if (newUser) userId = newUser.data._id;
                else {
                  setModalStatus({
                    header: 'Failed to Add parking',
                    body: 'Check the User Details',
                  });
                  setIsModalOpen(true);
                  return;
                }
              }
              const vehicle = {
                modal: document.querySelector('#modal').value,
                number: document.querySelector('#number').value,
                description: document.querySelector('#description').value,
                type: document.querySelector('#type').value,
                user: userId,
                fine: document.querySelector('#fine').value,
                duration: document.querySelector('#duration').value,
              };
              const newVehicle = await axios
                .post('/pms/parking', vehicle)
                .catch((err) => console.error(err.response));
              if (newVehicle) {
                setModalStatus({
                  header: 'Parking added',
                  body: 'Parking added with details specified',
                });
              } else {
                setModalStatus({
                  header: 'Failed to add parking details',
                  body: 'Check the entry fields',
                });
              }
              setIsModalOpen(true);
            }}
          >
            Add Entry
          </Button>
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

export default AddParking;
