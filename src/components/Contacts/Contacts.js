import React from "react";

export default function Contacts(props) {
  return (
    <div>
      <ul>
        {props.contact.map((contact) => (
          <li key={contact.id}>
            <p>{contact.text}</p>
            <p>{contact.number}</p>
            <button onClick={() => props.deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
