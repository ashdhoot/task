import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import isEmpty from "../../utils/isEmpty";

const EditProspect = () => {
  const { id } = useParams();

  const history = useHistory();

  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [source, setSource] = useState("");
  const [addedBy, setAddedBy] = useState("");
  const [date, setDate] = useState("");
  const [typeset, setTypeSet] = useState("");
  const [numbers, setNumbers] = useState("");
  const [details, setDetails] = useState("");
  const [customer, setCustomer] = useState({});

  const getCustomer = async () => {
    try {
      let response = await axios.get(`http://localhost:8000/customers/${id}`);
      console.log(response.data);
      setCustomer(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const editHandler = () => {
    let customer = {
      name,
      state,
      source,
      addedBy,
      date,
      typeset,
      numbers,
      details,
    };
    try {
      axios.put(`http://localhost:8000/customers/${id}`, customer);
      window.alert("Prospect Edited");
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!isEmpty(customer)) {
      setName(customer.name);
      setState(customer.state);
      setSource(customer.source);
      setAddedBy(customer.addedBy);
      setDate(customer.date);
      setTypeSet(customer.typeset);
      setNumbers(customer.numbers);
      setDetails(customer.details);
    }
  }, [customer]);

  useEffect(() => {
    getCustomer();
  }, []);

  return (
    <div>
      <div className="row d-flex justify-content-center">
        <h3 className="text-center">Edit </h3>
        <div className="col-lg-6 col-sm-12 col-ex-12">
          <div className="card">
            <div className="card-body">
              <form>
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
                <label htmlFor="">State</label>
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="form-control"
                />
                <label htmlFor="">Source</label>
                <input
                  type="text"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  className="form-control"
                />
                <label htmlFor="">Added By</label>
                <input
                  type="text"
                  value={addedBy}
                  onChange={(e) => setAddedBy(e.target.value)}
                  className="form-control"
                />
                <label htmlFor="">Date</label>
                <input
                  type="date"
                  value={date}
                  className="form-control"
                  onChange={(e) => setDate(e.target.value)}
                />
                <label htmlFor="">Set Type</label>
                <input
                  type="text"
                  className="form-control"
                  value={typeset}
                  onChange={(e) => setTypeSet(e.target.value)}
                />
                <label htmlFor="">Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={numbers}
                  onChange={(e) => setNumbers(e.target.value)}
                />
                <label htmlFor="">Detail</label>
                <input
                  type="text"
                  className="form-control"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
                <button className="btn btn-primary" onClick={editHandler}>
                  Edit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProspect;
