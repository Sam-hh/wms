import React, { useState, useEffect } from 'react';
import {
  Input,
  Label,
  Button,
  Select,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@windmill/react-ui';
import PageTitle from '../components/Typography/PageTitle';
import { ProductIcon } from '../icons';
import axios from 'axios';

function addUser() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [modalStatus, setModalStatus] = useState({});

  useEffect(() => {
    (async () => {
      const categories = await axios
        .get('/products/categories')
        .catch(console.error);
      const suppliers = await axios
        .get('/products/suppliers')
        .catch(console.error);
      setCategories(categories.data);
      setSuppliers(suppliers.data);
    })();
  }, []);
  return (
    <>
      <PageTitle>Add Products</PageTitle>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="mt-4">
          <Label>
            <span>Product Name</span>
            <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
              <input
                id="name"
                className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="Apple iPhone"
              />
              <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                <ProductIcon className="w-6 h-6" aria-hidden="true" />
              </div>
            </div>
          </Label>
        </div>

        <div className="mt-4">
          <Label>
            <span>Product Category</span>
            <Select id="category" defaultValue="default" className="mt-1">
              <option value="default" disabled hidden>
                Select a category
              </option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </Select>
          </Label>
        </div>

        <div className="mt-4">
          <Label>
            <span>Product Supplier</span>
            <Select id="supplier" defaultValue="default" className="mt-1">
              {' '}
              <option value="default" hidden disabled>
                Select a supplier
              </option>
              {suppliers.map((supplier) => (
                <option key={supplier._id} value={supplier._id}>
                  {supplier.name}
                </option>
              ))}
            </Select>
          </Label>
        </div>

        <div className="mt-4">
          <Label>In Stock</Label>
          <div className="mt-2">
            <Label radio>
              <Input defaultChecked type="radio" value="true" name="inStock" />
              <span className="ml-2">Yes</span>
            </Label>
            <Label className="ml-6" radio>
              <Input type="radio" value="" name="inStock" />
              <span className="ml-2">No</span>
            </Label>
          </div>
        </div>

        <div className="mt-4">
          <Label>
            <span>Price</span>
            <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
              <input
                id="price"
                type="number"
                className="password block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="1"
                defaultValue="0"
              />
              <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                <ProductIcon className="w-6 h-6" aria-hidden="true" />
              </div>
            </div>
          </Label>
        </div>
        <div className="px-6 my-6">
          <Button
            onClick={async () => {
              const product = {
                name: document.querySelector('#name').value.trim(),
                supplier: document.querySelector('#supplier').value,
                category: document.querySelector('#category').value,
                price: document.querySelector('#price').value,
                inStock: document.querySelector('input[name="inStock"]')
                  .checked,
              };
              // console.log(product);
              const newProduct = await axios
                .post('/products/add', product)
                .catch((err) =>
                  setModalStatus({
                    header: 'Cannot create the product',
                    body: err.response.data.message,
                  })
                );
              if (newProduct) {
                setModalStatus({
                  header: 'Product Created',
                  body: 'The product entry was added to databse.',
                });
                document.querySelector('#name').value = '';
                document.querySelector('#supplier').value = '';
                document.querySelector('#category').value = '';
                document.querySelector('#price').value = '';
              }
              setIsModalOpen(true);
            }}
          >
            Add Product
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

export default addUser;
