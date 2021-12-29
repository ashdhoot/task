import axios from "axios";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const pageSize = 10;
const ProspectSet = () => {
  const [customers, setCustomers] = useState([]);
  const [pageinatedPosts, setPaginatedPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [dataId, setDataId] = useState();

  const getCustomers = async () => {
    try {
      let response = await axios.get("http://localhost:8000/customers");
      setCustomers(response.data);
      console.log(response.data);
      setPaginatedPosts(_(response.data).slice(0).take(pageSize).value());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => getCustomers(), []);

  useEffect(() => {
    let data = customers.filter((customer) =>
      customer.typeset.toLowerCase().match(search.toLowerCase())
    );
    setPaginatedPosts([...data]);
  }, [search]); //search by set type

  const pageCount = customers ? Math.ceil(customers.length / pageSize) : 0;

  if (pageCount === 1) {
    return null;
  }
  const pages = _.range(1, pageCount + 1); //pagination

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const pageinatedPosts = _(customers)
      .slice(startIndex)
      .take(pageSize)
      .value();
    setPaginatedPosts(pageinatedPosts);
  };

  const handleDelete = () => {
    console.log(dataId);
    try {
      axios.delete(`http://localhost:8000/customers/${dataId}`);
      window.alert("Data deleted ");
      getCustomers();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="prospect__set">
      <div className="container">
        <div className="row mt-2">
          <div className="d-flex justify-content-between">
            <h2>Prospect Set </h2>
            <div className="search-bar">
              <form className="d-flex">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search Prospect Set"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" className="form-check-input" />
                  </th>
                  <th>Prospect Name</th>
                  <th>Demographic</th>
                  <th>Source</th>
                  <th>Added By</th>
                  <th>Data Added</th>
                  <th>Set Type</th>
                  <th>How Many</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {pageinatedPosts.map((customer, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value={customer.id}
                        onChange={(e) => setDataId(e.target.value)}
                      />
                    </td>
                    <td>{customer.name}</td>
                    <td>{customer.state}</td>
                    <td>{customer.source}</td>
                    <td>{customer.addedBy}</td>
                    <td>{customer.date}</td>
                    <td>{customer.typeset}</td>
                    <td>{customer.numbers}</td>
                    <td>{customer.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <Link to="/add-prospect">
              <button className="btn btn-info ms-2">Add Prospect Set</button>
            </Link>

            <Link to={`/edit-prospect/${dataId}`}>
              <button className="btn btn-info ms-2">Edit Prospect Set</button>
            </Link>

            <button className="btn btn-info ms-2" onClick={handleDelete}>
              Delete Prospect Set
            </button>
          </div>
          <div>
            <nav className="pagination">
              <ul className="pagination">
                {pages.map((page, index) => (
                  <li
                    className={
                      page === currentPage ? "page-item active" : "page-item"
                    }
                    key={index}
                  >
                    <p className="page-link" onClick={() => pagination(page)}>
                      {page}
                    </p>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProspectSet;
