import React, { useState, createContext } from "react";

type SidebarContextProps = {
  sidebarToggle: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

type SidebarType = {
  children: React.ReactNode;
};

export const SidebarContext = createContext<SidebarContextProps>(
  {} as SidebarContextProps
);

export const SidebarProvider: React.FC<SidebarType> = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };
  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  return (
    <SidebarContext.Provider
      value={{ sidebarToggle, toggleSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
