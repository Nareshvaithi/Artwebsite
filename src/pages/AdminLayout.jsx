import React from "react";
import { Outlet } from "react-router-dom";
// import Admin from "../components/adminPanel/admin";
import AdminNav from "../components/adminPanel/AdminNav";
import AdminSidebar from "../components/adminPanel/AdminSidebar";


function AdminLayout() {
  return (
    <div>
      <AdminNav />
      <AdminSidebar />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
