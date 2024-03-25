import React, { useState } from "react";

const EditHackathonForm = ({ hackathon, onUpdate, onCancel }) => {
  const [updatedName, setUpdatedName] = useState(hackathon.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...hackathon, name: updatedName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={updatedName}
        onChange={(e) => setUpdatedName(e.target.value)}
      />
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditHackathonForm;
