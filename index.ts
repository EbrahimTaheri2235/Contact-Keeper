import {
    submitButton,
    showContactsButton,
    closeDrawerButton,} from "./src/importer.js"
import {
    showContactsBottonHandler,
    closeContactsDrawerHandler,
    handleCreateContact} from "./src/events.js"

showContactsButton?.addEventListener("click", showContactsBottonHandler);
closeDrawerButton?.addEventListener("click",closeContactsDrawerHandler);
submitButton?.addEventListener("click",handleCreateContact);
