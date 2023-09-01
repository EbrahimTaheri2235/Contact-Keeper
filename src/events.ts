import {
  PhoneNumberInput,
  contactNameInput,
  contactsListDrawer,
  contactsListElement,
  deviceStorage} from "./importer.js"
import {contactsList } from "./states.js";
import {ContactProps,} from "./types.js";


export const showContactsBottonHandler = ()=>{
  contactsListDrawer?.classList.remove("hidden");
}
export const closeContactsDrawerHandler = ()=>{
  contactsListDrawer?.classList.add("hidden");
}

export const handleCreateContact = () => {
  const newContact: ContactProps = {
    id: crypto.randomUUID(),
    contactName: contactNameInput?.value ?? "",
    phoneNumber: PhoneNumberInput?.value ?? "",
    storage: deviceStorage?.checked ? "Device" : "SIM",
  };
  contactsList.push(newContact);

  const listItem = document.createElement("li");
  listItem.className = "flex flex-col list-none py-4 px-1 ";
  const contactNameElement = document.createElement("h2");
  contactNameElement.className = "text-black";
  contactNameElement.innerText = newContact.contactName;
  const contactPhoneNumberElement = document.createElement("p");
  contactPhoneNumberElement.className = "text-slate-500";
  contactPhoneNumberElement.innerText = newContact.phoneNumber.toString();

  listItem.appendChild(contactNameElement);
  listItem.appendChild(contactPhoneNumberElement);

  contactsListElement?.appendChild(listItem);
}