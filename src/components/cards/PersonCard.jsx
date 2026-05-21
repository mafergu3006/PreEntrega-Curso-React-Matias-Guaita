const PersonCard = ({ person }) => {
  return (
    <div style={{
      background: "#333",
      padding: "10px",
      borderRadius: "8px",
      width: "150px"
    }}>
      <h4>{person.name}</h4>
      <p>{person.role}</p>
    </div>
  );
};

export default PersonCard;