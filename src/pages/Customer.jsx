import React, { useState, useRef } from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

const Customer = () => {
  const customerData = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890" },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "9876543210",
    },
    {
      id: 3,
      name: "Alice Brown",
      email: "alice@example.com",
      phone: "5551234567",
    },
    { id: 4, name: "Tom Lee", email: "tom@example.com", phone: "9871112222" },
    {
      id: 5,
      name: "Chris Evan",
      email: "chris@example.com",
      phone: "9999999999",
    },
  ];

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const addModalRef = useRef(null);
  const deleteModalRef = useRef(null);
  const editModalRef = useRef(null);

  const openAddModal = () => {
    if (window.bootstrap && window.bootstrap.Modal) {
      const modal = new window.bootstrap.Modal(addModalRef.current);
      modal.show();
    }
  };
  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    new window.bootstrap.Modal(editModalRef.current).show();
  };

  const handleDelete = (customer) => {
    setSelectedCustomer(customer);
    new window.bootstrap.Modal(deleteModalRef.current).show();
  };

  const confirmDelete = () => {
    alert(`Deleted customer with ID: ${selectedCustomer.id}`);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1 p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">Customer List</h2>
          <button className="btn btn-success" onClick={openAddModal}>
            <i className="fas fa-plus me-2"></i> Add Customer
          </button>
        </div>

        <div className="table-responsive bg-white rounded shadow p-3">
          <table className="table table-bordered text-center align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th style={{ width: "180px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customerData.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-primary me-2"
                      onClick={() => handleEdit(customer)}>
                      ✏️ Edit
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(customer)}>
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />

      {/* Add Modal */}
      <div
        className="modal fade"
        tabIndex="-1"
        ref={addModalRef}
        aria-labelledby="addCustomerModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addCustomerModalLabel">
                Add Customer
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input type="tel" className="form-control" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Save Customer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        ref={deleteModalRef}
        aria-labelledby="deleteModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">
                Confirm Deletion
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              Are you sure you want to delete{" "}
              <strong>{selectedCustomer?.name}</strong>?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        ref={editModalRef}
        aria-labelledby="editModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">
                Edit Customer
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    defaultValue={selectedCustomer?.name}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    defaultValue={selectedCustomer?.email}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    defaultValue={selectedCustomer?.phone}
                    className="form-control"
                  />
                </div>
                <div className="text-end">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
