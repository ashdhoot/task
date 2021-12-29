import React, { useState } from "react";
import axios from "axios";
import { useHistory, useParams, withRouter } from "react-router-dom";

const AddProspect = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [source, setSource] = useState("");
  const [addedBy, setAddedBy] = useState("");
  const [date, setDate] = useState("");
  const [typeset, setTypeSet] = useState("");
  const [numbers, setNumbers] = useState("");
  const [details, setDetails] = useState("");

  const addHandler = () => {
    console.log("add");
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
      axios.post("http://localhost:8000/customers", customer);
      window.alert("Prospect added");
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="row d-flex justify-content-center">
        <h3 className="text-center">Add </h3>
        <div className="col-lg-6 col-sm-12 col-ex-12">
          <div className="card">
            <div className="card-body">
              <form action="">
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
                <button className="btn btn-primary" onClick={addHandler}>
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AddProspect);
