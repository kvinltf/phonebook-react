import React from "react";
import { ContactListProps } from "../model/contactModel";
import ContactItem from "./contactItem";
import ContactEditItem from "./contactEditItem";

const ContactList = ({
  contacts,
  onContactSelect,
  selectedContact,
  onUpdate,
  onDelete,
}: ContactListProps) => {
  function handleOnCancel() {
    onContactSelect(undefined);
  }

  if (!contacts) {
    return <div>Loading...</div>;
  } else if (!contacts.length) {
    return <div>Empty Contact</div>;
  }

  return (
    <>
      {contacts!!.map((value) => {
        const isSelected = selectedContact?.id === value.id;
        const className = `p-2 m-2 rounded hover:bg-gray-200 ${
          isSelected ? "border border-black border-solid" : ""
        }`;

        function handleContactOnClick() {
          return onContactSelect(value);
        }

        return (
          <div
            key={value.id}
            className={className}
            onClick={handleContactOnClick}
          >
            {isSelected ? (
              <ContactEditItem
                contact={value}
                onUpdate={onUpdate}
                onCancel={handleOnCancel}
                onDelete={onDelete}
              />
            ) : (
              <ContactItem contact={value} />
            )}
          </div>
        );
      })}
    </>
  );
};

export default ContactList;
