import React,{useState} from 'react'
import './App.css';

function App() {
const [isCheckedWhitelist,setCheckedWhitelist] = useState(false)
  return (
    <div className="container">
      <div className="row">
        <div className="Col-md-12">
          <button className="btn connectwalletBth btn-primary">Connect Wallet</button>
        </div>
      </div>
      <div className="row">
        <div className="block-content col-md-6">
          <div className="form-group">
            <label htmlFor="w-30">Checkwhitelist</label>
            <div className="input-group">
              <div className="input-group-prepend">
              </div>
              <input
                        type="text"
                        className="form-control"
                        name="placeName"
                        autoComplete="off"
                        placeholder="Address"
                      />
            </div>
          </div>
        </div>

        <div className="col-md-6">
        <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
              </div>
              <button onClick={()=>{setCheckedWhitelist(true)}} className="btn btn-success submitBtn">Checkwhitelist</button>

            </div>
          </div>
        </div>

       {isCheckedWhitelist ? (<span className="text-danger mt-2 ">True/False</span>) : null}

        </div>

        <div className="row mt-5">
        <div className="block-content col-md-6">
          <div className="form-group">
            <label htmlFor="w-30">Buy Quarters</label>
            <div className="input-group">
              <div className="input-group-prepend">
              </div>
              <input
                        type="text"
                        className="form-control"
                        name="placeName"
                        autoComplete="off"
                        placeholder="Quarter"
                      />
            </div>
          </div>
        </div>
        <div className="col-md-6">
        <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
              </div>
              <button className="btn btn-success submitBtn">Submit</button>

            </div>
          </div>
        </div>

        </div>
        <div className="row mt-5">
        <div className="block-content col-md-6">
          <div className="form-group">
            <label htmlFor="w-30">Sell Quarters</label>
            <div className="input-group">
              <div className="input-group-prepend">
              </div>
              <input
                        type="text"
                        className="form-control"
                        name="placeName"
                        autoComplete="off"
                        placeholder="Address"
                      />
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
        <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
              </div>
              <button className="btn btn-success submitBtn">submit</button>

            </div>
          </div>
        </div>

        </div>
      </div>
      );
}

      export default App;
