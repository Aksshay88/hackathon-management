import React, { useState } from "react";
import AddHackathonForm from "./AddHackathonForm";
import EditHackathonForm from "./EditHackathonForm";
import Timer from "./Timer";

const HackathonList = () => {
  const [hackathons, setHackathons] = useState([]);
  const [editingHackathon, setEditingHackathon] = useState(null);

  const addHackathon = ({ name, date }) => {
    setHackathons([...hackathons, { id: Date.now(), name, date }]);
  };

  const deleteHackathon = (id) => {
    setHackathons(hackathons.filter((hackathon) => hackathon.id !== id));
  };

  const editHackathon = (hackathon) => {
    setEditingHackathon(hackathon);
  };

  const updateHackathon = (updatedHackathon) => {
    setHackathons(
      hackathons.map((hackathon) =>
        hackathon.id === updatedHackathon.id ? updatedHackathon : hackathon,
      ),
    );
    setEditingHackathon(null);
  };

  return (
    <div>
      <h2>Hackathon Management</h2>
      <ul>
        {hackathons.map((hackathon) => (
          <li key={hackathon.id}>
            {editingHackathon === hackathon ? (
              <EditHackathonForm
                hackathon={hackathon}
                onUpdate={updateHackathon}
                onCancel={() => setEditingHackathon(null)}
              />
            ) : (
              <>
                {hackathon.name} - {hackathon.date}
                <button onClick={() => editHackathon(hackathon)}>Edit</button>
                <button onClick={() => deleteHackathon(hackathon.id)}>
                  Delete
                </button>
                <Timer hackathonDate={hackathon.date} />
              </>
            )}
          </li>
        ))}
      </ul>
      <AddHackathonForm onAdd={addHackathon} />
    </div>
  );
};

export default HackathonList;
