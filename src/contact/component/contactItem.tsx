import React from "react";
import { ContactItemProps } from "../model/contactModel";

const ContactItem = (props: ContactItemProps) => {
  const {
    contact: { contactNumber, name },
  } = props;

  return (
    <>
      <div className="font-bold">{name}</div>
      <div>{contactNumber}</div>
    </>
  );
};

export default ContactItem;
