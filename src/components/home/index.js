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
            <div className="card " style={{ backgroundColor: "#696969" }}>
              <span className="p-3">
                <img
                  width={200}
                  src="./logo.png"
                  style={{
                    backgroundColor: "green",
                    borderRadius: 200,
                    padding: 30,
                  }}
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
              <div
                style={{ backgroundColor: "#07dbdb", fontSize: 20 }}
                className="text-white"
              >
                <span className="p-3">
                  System Management & Monitoring Battery Lead Acid For Electric
                  Car
                </span>
                <br />
              </div>

              <div
                style={{ backgroundColor: "green", fontSize: 20 }}
                className="text-white my-5"
              >
                <span className="p-3">
                  SY MONTIR LIAR merupakan sebuah perangkat yang terdiri dari
                  battery charger
                </span>
                <br />
              </div>
            </div>
            <span className="float-right mt-3">
              Powered By Mahasiswa Itera - Teknik Elektro
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Index;
