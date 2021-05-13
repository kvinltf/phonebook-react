import React, { useState } from "react";
import { defaultContactFormState } from "../state/contactFormState";
import { ContactApiService } from "../service/contactApiService";
import { ContactFormProps } from "../model/contactModel";

const ContactForm = (props: ContactFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState(defaultContactFormState);

  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);

    ContactApiService.createContact(formState)
      .then(props.onSuccessCreate)
      .catch((reason) => alert(reason.message))
      .finally(() => setIsLoading(false));
  }

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const {
      target: { name, value },
    } = event;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <span className="m-4">
        Name:{" "}
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleOnChange}
          required
        />
      </span>
      <span className="m-4">
        Contact Number:{" "}
        <input
          type="text"
          name="contactNumber"
          value={formState.contactNumber}
          onChange={handleOnChange}
          required
        />
      </span>

      <button disabled={isLoading}>Submit</button>
    </form>
  );
};

export default ContactForm;
