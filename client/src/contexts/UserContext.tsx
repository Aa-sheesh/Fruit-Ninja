import React, { createContext, useContext, useState, useEffect } from "react";

interface UserContextType {
  userName: string;
  setUserName: (name: string) => void;
  userMobile: string;
  setUserMobile: (mobile: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => {
  const [userName, setUserName] = useState<string>("");
  const [userMobile, setUserMobile] = useState<string>("");

  useEffect(() => {
    const savedUserName = localStorage.getItem("fruitNinjaUserName");
    const savedUserMobile = localStorage.getItem("fruitNinjaUserMobile");
    if (savedUserName) setUserName(savedUserName);
    if (savedUserMobile) setUserMobile(savedUserMobile);
  }, []);

  useEffect(() => {
    localStorage.setItem("fruitNinjaUserName", userName);
    localStorage.setItem("fruitNinjaUserMobile", userMobile);
  }, [userName, userMobile]);

  return (
    <UserContext.Provider value={{ userName, setUserName, userMobile, setUserMobile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
