export type ContactProps = {
    id : string
    contactName : string
    phoneNumber : string | number
    storage : "SIM" | "Device"
}

export type contactsListType = ContactProps[];

export type CantactInfoType = {
    contactName : string
    phoneNumber : string | number
}
