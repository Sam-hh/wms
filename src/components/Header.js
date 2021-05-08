import React, { useContext, useState, useEffect } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import { BellIcon, MenuIcon, OutlineLogoutIcon, UserIcon } from '../icons';
import {
  Avatar,
  Badge,
  Dropdown,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@windmill/react-ui';
import { useHistory } from 'react-router';
import axios from 'axios';

function Header() {
  const [notifications, setNotification] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState({});

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + localStorage.getItem('authToken');
    axios.defaults.headers.common['X-USER-ID'] = localStorage.getItem('userID');
    const ws = new WebSocket('ws://localhost:2002/get');
    ws.onerror = console.error;
    ws.onopen = console.log;
    ws.onmessage = (e) => console.log(e);

    (async () => {
      const { data } = await axios.get('/dashboard/notifications');
      setNotification(data);
    })();
  }, []);

  const history = useHistory();
  const { toggleSidebar } = useContext(SidebarContext);

  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  }

  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

  return (
    <>
      <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
        <div className="container flex items-center justify-end h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
          <button
            className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
            onClick={toggleSidebar}
            aria-label="Menu"
          >
            <MenuIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <ul className="flex items-center flex-shrink-0 space-x-6">
            <li className="relative">
              <button
                className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                onClick={handleNotificationsClick}
                aria-label="Notifications"
                aria-haspopup="true"
              >
                <BellIcon className="w-5 h-5" aria-hidden="true" />
                <span
                  aria-hidden="true"
                  className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                ></span>
              </button>

              <Dropdown
                align="right"
                isOpen={isNotificationsMenuOpen}
                onClose={() => setIsNotificationsMenuOpen(false)}
              >
                {notifications.map((notification) => (
                  <DropdownItem
                    key={notification._id}
                    onClick={() => {
                      if (notification.description) {
                        setModalStatus({
                          header: notification.title,
                          body: notification.description,
                        });
                        setIsModalOpen(true);
                      }
                    }}
                    tag="a"
                    href="#"
                    className="justify-between"
                  >
                    <span>{notification.title}</span>
                    <Badge type="danger">1</Badge>
                  </DropdownItem>
                ))}
              </Dropdown>
            </li>
            {/* <!-- Profile menu --> */}
            <li className="relative">
              <button
                className="rounded-full focus:shadow-outline-purple focus:outline-none"
                onClick={handleProfileClick}
                aria-label="Account"
                aria-haspopup="true"
              >
                <Avatar
                  className="align-middle"
                  src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                  alt=""
                  aria-hidden="true"
                />
              </button>
              <Dropdown
                align="right"
                isOpen={isProfileMenuOpen}
                onClose={() => setIsProfileMenuOpen(false)}
              >
                <DropdownItem
                  onClick={() => {
                    localStorage.removeItem('authToken');
                    localStorage.removeItem('userType');
                    history.push('/');
                  }}
                >
                  <OutlineLogoutIcon
                    className="w-4 h-4 mr-3"
                    aria-hidden="true"
                  />
                  <span>Log out</span>
                </DropdownItem>
              </Dropdown>
            </li>
          </ul>
        </div>
      </header>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalHeader>{modalStatus.header}</ModalHeader>
        <ModalBody>{modalStatus.body}</ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setIsModalOpen(false)}
            className="w-full sm:w-auto"
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Header;
