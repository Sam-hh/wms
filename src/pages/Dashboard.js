import React, { useEffect, useState } from 'react';
import {
  Label,
  Button,
  Textarea,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@windmill/react-ui';

import InfoCard from '../components/Cards/InfoCard';
import PageTitle from '../components/Typography/PageTitle';
import SectionTitle from '../components/Typography/SectionTitle';
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon, MailIcon } from '../icons';
import RoundIcon from '../components/RoundIcon';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState({});

  useEffect(() => {
    (async () => {
      const dashboard = await axios
        .get(`/dashboard`)
        .catch((err) => console.log(err.response));
      setData(dashboard.data);
    })();
  }, []);
  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total Customers" value={data.customers || 0}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Sales Value Today" value={`$ ${data.sales || 0}`}>
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="New Products" value={data.products || 0}>
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Notifications" value={data.notifications || 0}>
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>
      <SectionTitle>Create Notification</SectionTitle>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="mt-4">
          <Label>
            <span>Notification Title</span>
            <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
              <input
                id="title"
                className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="Jhon Doe"
              />
              <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                <MailIcon className="w-5 h-5" aria-hidden="true" />
              </div>
            </div>
          </Label>
        </div>
        <div className="-mx-3 md:flex my-6">
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
        <div className="px-6 my-6">
          <Button
            onClick={async () => {
              const notification = {
                title: document.querySelector('#title').value,
                description: document.querySelector('#description').value,
              };
              const newNotification = await axios
                .post('/dashboard/notification', notification)
                .catch(console.error);
              if (newNotification) {
                setModalStatus({
                  header: 'Notification added',
                  body: 'Notification Sent to all users',
                });
              } else {
                setModalStatus({
                  header: 'Cannot add notifcation',
                  body: 'Check the entry fields',
                });
              }
              setIsModalOpen(true);
            }}
          >
            Create Notification
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

export default Dashboard;
