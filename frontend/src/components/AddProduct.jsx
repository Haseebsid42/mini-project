import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const signUpSchema = Yup.object().shape({
  title: Yup.string().required('Enter Title'),
  price: Yup.number().required('Enter Price'),
  yearMade: Yup.number().required('Enter Year Made'),
  brand: Yup.string().required('Enter Brand'),
  description: Yup.string().required('Enter Description')
});

const AddProduct = () => {
  const navigate = useNavigate();
  const [selImg, setSelImg] = useState('');

  const productForm = useFormik({
    initialValues: {
      title: '',
      price: 0,
      yearMade: 0,
      brand: '',
      description: '',
      image: null,
      createdAt: new Date(),
    },
    onSubmit: async (values, { resetForm }) => {
      values.image = selImg;
      console.log(values);
     

      const res = await fetch('http://localhost:5000/product/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {'Content-Type' : 'application/json'}
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Product Added Successfully',
          text: 'Enjoy',
        });
        resetForm();
      }
      //code to connect backend
    },

    validationSchema: signUpSchema,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelImg(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  return (
    
    <div className="bg-light">
      <div className="container py-5">
        <div className="col-md-6 mx-auto">
          <div className="card shadow-lg">
            <div className="card-body p-5">
              <div className="my-5 text-center fs-3">Add Amazing Products Here🏚️</div>

              <form onSubmit={productForm.handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    onChange={productForm.handleChange}
                    value={productForm.values.title}
                  />
                  {productForm.errors.title && productForm.touched.title && (
                    <span style={{ color: 'red', fontSize: 10 }}>{productForm.errors.title}</span>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="price">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    onChange={productForm.handleChange}
                    value={productForm.values.price}
                  />
                  {productForm.errors.price && productForm.touched.price && (
                    <span style={{ color: 'red', fontSize: 10 }}>{productForm.errors.price}</span>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="yearMade">Year Made</label>
                  <input
                    type="number"
                    className="form-control"
                    id="yearMade"
                    name="yearMade"
                    onChange={productForm.handleChange}
                    value={productForm.values.yearMade}
                  />
                  {productForm.errors.yearMade && productForm.touched.yearMade && (
                    <span style={{ color: 'red', fontSize: 10 }}>{productForm.errors.yearMade}</span>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="brand">Brand</label>
                  <input
                    type="text"
                    className="form-control"
                    id="brand"
                    name="brand"
                    onChange={productForm.handleChange}
                    value={productForm.values.brand}
                  />
                  {productForm.errors.brand && productForm.touched.brand && (
                    <span style={{ color: 'red', fontSize: 10 }}>{productForm.errors.brand}</span>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    onChange={productForm.handleChange}
                    value={productForm.values.description}
                  />
                  {productForm.errors.description && productForm.touched.description && (
                    <span style={{ color: 'red', fontSize: 10 }}>{productForm.errors.description}</span>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="image">Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  
                </div>

               

                <button type="submit" className="my-5 btn btn-primary w-100">
                  Add ✓
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
