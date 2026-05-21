import PersonCard from "../cards/PersonCard";

const Footer = () => {
  const people = [
    { name: "Juan Pérez", role: "Presidente" },
    { name: "María Gómez", role: "Diseñadora" },
    { name: "Franco López", role: "Diseñador" },
  ];

  return (
    <footer style={{ background: "#DFDFDF", color: "#4b5565", padding: "20px", paddingLeft: "40px" }}>
      <div>
        <h3>Tienda Azul</h3>
      </div>

      <div style={{ display: "flex", gap: "10px", marginTop: "15px", color: "#bfc2c7", paddingLeft: "5vw" }}>
        {people.map((person, index) => (
          <PersonCard key={index} person={person} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;