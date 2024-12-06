import React, { createContext, useState } from "react";

export const CourseContext = createContext();

const CourseContextProvider = ({ children }) => {
  const [active, setActive] = useState("Digital Marketing");
  return (
    <CourseContext.Provider value={{ active, setActive }}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContextProvider;
