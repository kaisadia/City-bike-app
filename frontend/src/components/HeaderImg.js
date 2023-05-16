import React from "react";

const HeaderImg = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(https://st.focusedcollection.com/14026668/i/650/focused_173747140-stock-photo-finland-helsinki-rental-bikes-city.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "400px",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              color: "white",
              fontSize: "35px",
              fontWeight: "bold",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              paddingTop: "75px",
            }}
          >
          </div>
        </div>
      </div>
      <h1>Hel City bike app</h1>
      <h3>Find information about Helsinki city bike stations, bike capacity and data about trips</h3>

    </section>
    
  );
};

export default HeaderImg