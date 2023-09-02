import {
  PhoneNumberInput,
  contactNameInput,
  contactsListDrawer,
  contactsListElement,
  deviceStorage,
} from "./importer.js";
import { contactsList } from "./states.js";
import { CantactInfoType, ContactProps } from "./types.js";
import { creatListItem, validateFields } from "./functions.js";

export const showContactsBottonHandler = () => {
  contactsListDrawer?.classList.remove("hidden");
};
export const closeContactsDrawerHandler = () => {
  contactsListDrawer?.classList.add("hidden");
};

const validateCreatContact = (contactInfo: CantactInfoType) => {
  if (!validateFields(contactInfo.contactName, contactInfo.phoneNumber + "")) {
    alert("fill all fields");
    throw Error("fill all fields");
  }
};

export const handleCreateContact = () => {
  validateCreatContact({
    contactName: contactNameInput!.value,
    phoneNumber: PhoneNumberInput!.value,
  });

  const newContact: ContactProps = {
    id: crypto.randomUUID(),
    contactName: contactNameInput?.value ?? "",
    phoneNumber: PhoneNumberInput?.value ?? "",
    storage: deviceStorage?.checked ? "Device" : "SIM",
  };

  contactsList.push(newContact);

  const listItem = creatListItem({
    contactName: newContact.contactName,
    phoneNumber: newContact.phoneNumber,
  });
  contactsListElement?.appendChild(listItem);
};
