import Header from "../header";
function Index() {
  return (
    <>
      <Header />
      <div>
        <div className="container pt-5 pl-5">
          <div
            style={{
              marginLeft: "15%",
              marginTop: "2%",
              textAlign: "center",
              width: "100%",
              alignContent: "center",
            }}
          >
            <div className="card ">
              <h2 className="pt-5">Symontir</h2>
              <span className="p-3">
                <img
                  width={100}
                  height={100}
                  src="https://images.unsplash.com/photo-1534611238345-31c00a998587?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
              </span>
              <div
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  width: "98%",
                  height: 1,
                  backgroundColor: "black",
                }}
              ></div>
              <div style={{ backgroundColor: "blue" }} className="text-white">
                <span className="p-3">
                  System Management & Monitoring Battery Lead Acid For Electric
                  Car
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Index;
