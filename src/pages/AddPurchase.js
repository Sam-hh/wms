import React, { useState, useEffect } from 'react';
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
import { MailIcon, PhoneIcon, UserIcon, ProductIcon } from '../icons';
import SectionTitle from '../components/Typography/SectionTitle';
import axios from 'axios';

function AddPurchase() {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);
  const [user, setUser] = useState(null);
  const [modalStatus, setModalStatus] = useState({});

  useEffect(() => {
    (async () => {
      const categories = await axios.get('/products/categories');
      console.log(categories);
      setCategories(categories.data);
      setSelectedCategory(categories.data[0]._id);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const products = await axios
        .get(`/products/${selectedCategory}`)
        .catch((err) => console.log(err.response));
      setProducts(products.data);
      setProductPrice(products.data[0].price);
    })();
  }, [selectedCategory]);
  return (
    <>
      <PageTitle>Add purchase</PageTitle>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <SectionTitle>Product Info</SectionTitle>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3">
            <label
              className="block tracking-wide text-grey-darker text-sm mb-2"
              htmlFor="grid-state"
            >
              Category
            </label>
            <div className="relative">
              <Select
                id="category"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {!categories.length && <option>Loading</option>}
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </Select>
            </div>
          </div>
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-grey-darker text-sm mb-2">
              Product
            </label>
            <Select
              id="product"
              onChange={(e) =>
                setProductPrice(
                  products.find((p) => p._id == e.target.value).price
                )
              }
            >
              {!products.length && <option>Loading</option>}
              {products.map((product) => (
                <option key={product._id} value={product._id}>
                  {product.name}
                </option>
              ))}
            </Select>
          </div>
          <div className="md:w-1/2 px-3">
            <label className="block tracking-wide text-grey-darker text-sm mb-2">
              Quantity
            </label>
            <Input
              id="quantity"
              type="number"
              className="mt-1"
              defaultValue={1}
              onChange={(e) => setProductQuantity(e.target.value)}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-grey-darker text-sm mb-2">
              Price
            </label>
            <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
              <input
                readOnly
                id="price"
                className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="₹"
                value={productPrice * productQuantity}
              />
              <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                <ProductIcon className="w-6 h-6" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label className="block tracking-wide text-grey-darker text-sm mb-2">
              Included Tax(%)
            </label>
            <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
              <input
                id="tax"
                className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="₹"
                defaultValue={0}
              />
              <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                <ProductIcon className="w-6 h-6" aria-hidden="true" />
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

        <SectionTitle>User Info</SectionTitle>
        <div className="mt-4">
          <div className="mt-4">
            <Label>
              <span>Email</span>
              <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                <input
                  id="email"
                  type="email"
                  onBlur={async (e) => {
                    const user = await axios
                      .get(`/users/${e.target.value}`)
                      .catch((err) => console.error(err));
                    if (user) setUser(user);
                  }}
                  className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                  placeholder="user@wms.com"
                />
                <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                  <MailIcon className="w-5 h-5" aria-hidden="true" />
                </div>
              </div>
            </Label>
          </div>
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
                placeholder="900909090"
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
              let userId = user ? user._id : undefined;
              if (!user) {
                let password = Math.random().toString(36).substring(2, 12);
                const user = {
                  name: document.querySelector('#name').value,
                  password,
                  email: document.querySelector('#email').value,
                  phone: document.querySelector('#phone').value,
                  accountType: 'c',
                };
                const newUser = await axios
                  .post('/users', user)
                  .catch((err) => console.error(err.response));
                userId = newUser.data._id;
              }

              const Purchase = {
                category: document.querySelector('#category').value,
                product: document.querySelector('#product').value,
                quantity: document.querySelector('#price').value,
                tax: document.querySelector('#tax').value,
                price: document.querySelector('#price').value,
                description: document.querySelector('#description').value,
                user: userId,
              };
              const newPurchase = await axios
                .post('/shop', Purchase)
                .catch((err) => console.error(err));
              if (newPurchase) {
                setModalStatus({
                  header: 'Purchase added',
                  body: 'Purchase added with details specified',
                });
              } else {
                setModalStatus({
                  header: 'Purchase failed',
                  body: 'Check the entry fields',
                });
              }
              setIsModalOpen(true);
            }}
          >
            Add Purchase
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

export default AddPurchase;
