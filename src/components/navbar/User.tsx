import { deleteAuthenticationCookies } from "@/hooks/auth/auth";
import { getUser } from "@/services/user";
import UserDropdown from "./UserDropdown";
import { User as UserType } from "@/types/user";

const User = async ({ isMobileView = false }: { isMobileView?: boolean }) => {
  let user: UserType | undefined;

  try {
    user = await getUser();
  } catch (error) {
    return null;
  }

  return <UserDropdown userData={user} isMobileView={isMobileView} />;
};

export default User;
