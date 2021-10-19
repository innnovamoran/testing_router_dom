import React, { createContext, ReactChildren, FC } from "react";
import PageOne from "../pages/stackone/pageOne";

type PropsContext = {
  children: ReactChildren;
};

type NavScreenType = {
  component: FC;
  path: string;
  label: string;
};

type navigationContextType = {
  stackNavigation: NavScreenType[];
};

export const NavigationContext = createContext<navigationContextType>({
  stackNavigation: [],
});

const NavigationProvider: FC<PropsContext> = ({ children }): JSX.Element => {
  return (
    <NavigationContext.Provider
      value={{
        stackNavigation: [
          {
            component: PageOne,
            path: "/one",
            label: "Nav to page one",
          },
          {
            component: PageOne,
            path: "/two",
            label: "Nav to page twoF",
          },
          {
            component: PageOne,
            path: "/three",
            label: "Nav to page three",
          },
        ],
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
export default NavigationProvider;
