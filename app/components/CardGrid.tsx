"use client";

import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import axios from "axios";

interface User {
  ID: string;
  JobTitle: string;
  EmailAddress: string;
  FirstNameLastName: string;
  Email: string;
  Phone: string;
  Company: string;
}

interface GridProps {
  currentPage: number;
}

const CardGrid: React.FC<GridProps> = ({ currentPage }) => {
const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchThisPage = currentPage <= 1 ? currentPage : (currentPage - 1) * 10;
    const baseURL = `https://give-me-users-forever.vercel.app/api/users/${fetchThisPage}/next`;
    axios
      .get(baseURL)
      .then((response) => {
        if (response.data && Array.isArray(response.data.users)) {
          console.log("response.data.users:  ", response.data.users);
          setUsers(response.data.users);
        } else {
          console.error("Unexpected response data:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [currentPage]);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 p-4">
      {users.map((user, index) => (
        <UserCard
          key={index}
          ID={user.ID}
          JobTitle={user.JobTitle}
          EmailAddress={user.EmailAddress}
          FirstNameLastName={user.FirstNameLastName}
          Email={user.Email}
          Phone={user.Phone}
          Company={user.Company}
        />
      ))}
    </div>
  );
};

export default CardGrid;
