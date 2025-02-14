import React from "react";
import Search from "@/app/ui/dashboard/search/Search";
import Pagination from "@/app/ui/pagination/Pagination";
import Link from "next/link";
import Image from "next/image";
import { fetchUsers } from "@/app/lib/data";

export default async function User() {
  const users = await fetchUsers();
  console.log(users);

  return (
    <div className="bg-bgSoft p-5 rounded-[10px] mt-5">
      page generator
    </div>
  );
}
