import React, { useState } from "react";
import { ContactEditItemProps } from "../model/contactModel";

const ContactEditItem = ({
  contact,
  onCancel,
  onDelete,
  onUpdate,
}: ContactEditItemProps) => {
  const { contactNumber, id, name } = contact;

  const [formState, setFormState] = useState({
    name,
    contactNumber,
  });

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();
    onUpdate({
      id: id,
      contactNumber: formState.contactNumber,
      name: formState.name,
    });
  }

  function handleOnDelete(event: React.MouseEvent) {
    event.stopPropagation();
    onDelete(contact);
  }

  function handleOnCancel(event: React.MouseEvent) {
    event.stopPropagation();
    onCancel();
  }

  return (
    <form className="flex" onSubmit={handleOnSubmit}>
      <div className="flex-1">
        <div>
          name:{" "}
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          contact number:{" "}
          <input
            type="text"
            name="contactNumber"
            value={formState.contactNumber}
            onChange={handleOnChange}
            required
          />
        </div>
      </div>
      <div className="flex">
        <button type="submit">Update</button>
        <button type="button" onClick={handleOnDelete}>
          Delete
        </button>
        <button type="button" onClick={handleOnCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ContactEditItem;
