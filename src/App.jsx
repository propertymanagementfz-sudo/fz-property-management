import React from "react";

const portfolioProperties = [
  {
    title: "3050 Artesian Drive",
    city: "Mississauga, Ontario",
    type: "Commercial Plaza",
    image: "/images/3050-artesian.png"
  },
  {
    title: "3955 Erin Centre Blvd",
    city: "Mississauga, Ontario",
    type: "Retail Plaza",
    image: "/images/3395 Erin Cente Blvd.png"
  },
  {
    title: "295 Eglinton Avenue East",
    city: "Mississauga, Ontario",
    type: "Commercial Plaza",
    image: "/images/295 Egliton Ave E.png"
  },
  {
    title: "2292 Dundas Street West",
    city: "Mississauga, Ontario",
    type: "Automotive Commercial",
    image: "/images/dundas.png"
  },
  {
    title: "310 Kenilworth Avenue North",
    city: "Hamilton, Ontario",
    type: "Industrial Yard",
    image: "/images/kenilworth.jpg"
  },
  {
    title: "297 Queenston Road",
    city: "Hamilton, Ontario",
    type: "Commercial Automotive",
    image: "/images/queenstone.png"
  }
];

export default function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>FZ Property Management</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        {portfolioProperties.map((property, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden"
            }}
          >
            <img
              src={property.image}
              alt={property.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover"
              }}
            />

            <div style={{ padding: "15px" }}>
              <h2>{property.title}</h2>
              <p>{property.city}</p>
              <p>{property.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
