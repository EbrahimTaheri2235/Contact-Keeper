import { CantactInfoType } from "./types";

export const creatListItem = (cantactInfo: CantactInfoType):HTMLLIElement => {
  const listItem = document.createElement("li");
  listItem.className = "flex flex-col list-none py-4 px-1 ";

  const contactNameElement = document.createElement("h2");
  contactNameElement.className = "text-black";
  contactNameElement.innerText = cantactInfo.contactName;

  const contactPhoneNumberElement = document.createElement("p");
  contactPhoneNumberElement.className = "text-slate-500";
  contactPhoneNumberElement.innerText = cantactInfo.phoneNumber.toString();

  listItem.appendChild(contactNameElement);
  listItem.appendChild(contactPhoneNumberElement);

  return listItem;
};

export const validateFields = (...fields: string[]): boolean => {
    return fields.every((field) => !!field.toString());
  };