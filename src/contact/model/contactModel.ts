export interface ContactModel {
  id: number;
  name: string;
  contactNumber: string;
}

export interface ContactEditItemProps {
  contact: ContactModel;
  onUpdate: (contact: ContactModel) => void;
  onDelete: (contact: ContactModel) => void;
  onCancel: () => void;
}

export interface ContactItemProps {
  contact: ContactModel;
}

export interface ContactFormProps {
  onSuccessCreate: () => void;
}
export interface ContactListProps {
  contacts: ContactModel[] | undefined;
  selectedContact?: ContactModel;
  onContactSelect: (contact?: ContactModel) => void;
  onUpdate: (contact: ContactModel) => void;
  onDelete: (contact: ContactModel) => void;
}

export interface ContactFormState {
  name: string;
  contactNumber: string;
}
