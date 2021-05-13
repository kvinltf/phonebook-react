import React, { useCallback, useEffect, useState } from "react";
import { ContactModel } from "./model/contactModel";
import ContactList from "./component/contactList";
import ContactForm from "./component/contactForm";
import { ContactApiService } from "./service/contactApiService";

const ContactPage = () => {
  const [contacts, setContacts] =
    useState<ContactModel[] | undefined>(undefined);

  const [contact, setContact] = useState<ContactModel | undefined>(undefined);

  const getAllContacts = useCallback(() => {
    ContactApiService.findAll()
      .then((value) => value.data)
      .then(setContacts);
  }, []);

  useEffect(getAllContacts, [getAllContacts]);

  function handleOnUpdate(contact: ContactModel) {
    ContactApiService.replaceContact(contact.id, {
      name: contact.name,
      contactNumber: contact.contactNumber,
    }).then(() => {
      setContact(undefined);
      getAllContacts();
    });
  }

  function handleOnDelete(contact: ContactModel) {
    ContactApiService.deleteById(contact.id).then(() => {
      setContact(undefined);
      getAllContacts();
    });
  }

  return (
    <>
      <div className="m-4 p-4 border border-black border-solid rounded">
        <ContactForm onSuccessCreate={getAllContacts} />
      </div>

      <hr />

      <div className="m-4 p-4 border border-black border-solid rounded">
        <ContactList
          contacts={contacts}
          selectedContact={contact}
          onContactSelect={setContact}
          onUpdate={handleOnUpdate}
          onDelete={handleOnDelete}
        />
      </div>
    </>
  );
};

export default ContactPage;
