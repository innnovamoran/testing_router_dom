import React, { createContext, ReactChildren, FC } from "react";

type PropsContext = {
  children: ReactChildren;
};

type navigationContextType = {
  stackNavigation: [];
};

export const NavigationContext = createContext<navigationContextType>({
  stackNavigation: [],
});

const NavigationProvider: FC<PropsContext> = ({ children }): JSX.Element => {
  return (
    <NavigationContext.Provider value={{ stackNavigation: [] }}>
      {children}
    </NavigationContext.Provider>
  );
};
export default NavigationProvider;
