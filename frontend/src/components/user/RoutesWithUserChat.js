import { Outlet } from "react-router-dom";

import UserChatComponent from "./UserChatComponent";
const RoutesWithUserChat = () => {
  return (
    <>
      {" "}
      <UserChatComponent /> <Outlet />
    </>
  );
};

export default RoutesWithUserChat;
