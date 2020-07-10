import Clock from "react-digital-clock";
import { useEffect, useState } from "react";
import { Button, Collapse } from "react-bootstrap";
function Nav() {
  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);
  const today = new Date();
  useEffect(() => {
    setDate(today.toDateString());
  }, []);

  return (
    <div
      className="nav flex-column navbar-expand-lg float-left col-md-3 col-lg-3 col-sm-1"
      aria-orientation="vertical"
      style={{
        position: "absolute",
        left: 0,
        top: 54,
        backgroundImage: "url(bata1.jpg)",
        height: "150%",
        zIndex: 99,
      }}
    >
      <div style={{ fontSize: 28, textAlign: "center" }} className="p-4">
        <Clock />
        <span style={{ fontSize: 15, color: "white" }}>{date}</span>
      </div>

      <div className="col-auto">
        <label className="sr-only" htmlFor="inlineFormInputGroup">
          Search
        </label>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fa fa-search"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            id="inlineFormInputGroup"
            placeholder="Search"
          />
        </div>
      </div>

      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="m-2"
      >
        Data Pengisian
      </Button>
      <Collapse
        in={open}
        className="mx-2"
        style={{
          backgroundColor: "white",
          textAlign: "center",
          height: "100%",
        }}
      >
        <div style={{ backgroundColor: "gray" }} className="row">
          <div className="col">
            <a href="/dashboard">
              <div style={{ margin: 14 }}>
                <i className="fa fa-plug"> </i> 3 July 2020
                <div style={{ height: 2, backgroundColor: "black" }} />
              </div>
            </a>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default Nav;
