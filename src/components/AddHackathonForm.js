import React, { useState } from "react";

const AddHackathonForm = ({ onAdd }) => {
  const [hackathonName, setHackathonName] = useState("");
  const [hackathonDate, setHackathonDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!hackathonName || !hackathonDate) return;
    onAdd({ name: hackathonName, date: hackathonDate });
    setHackathonName("");
    setHackathonDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter hackathon name"
        value={hackathonName}
        onChange={(e) => setHackathonName(e.target.value)}
      />
      <input
        type="date"
        value={hackathonDate}
        onChange={(e) => setHackathonDate(e.target.value)}
      />
      <button type="submit">Add Hackathon</button>
    </form>
  );
};

export default AddHackathonForm;
