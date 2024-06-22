// import dynamic from "next/dynamic";
// const App = dynamic(() => import("./app"), { ssr: false });

import { isAdmin } from "@/lib/admin";
import { redirect } from "next/navigation";
import { App } from "./app";

const AdminPage = async () => {
  if (!isAdmin()) {
    return redirect("/");
  }
  return <App />;
};

export default AdminPage;
