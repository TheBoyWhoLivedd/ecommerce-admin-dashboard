"use client";

import * as React from "react";

import { useConfig } from "@/hooks/use-config";

export function ThemeSwitcher() {
  const [config] = useConfig();
  React.useEffect(() => {
    document.body.classList.forEach((className) => {
      if (className.match(/^theme.*/)) {
        document.body.classList.remove(className);
      }
    });

    const theme = config.theme;

    if (theme) {
      return document.body.classList.add(`theme-${theme}`);
    }
  }, [config]);

  return null;
}

// export function ThemeSwitcher() {
//   const [config] = useConfig();
//   console.log(config);
//   const segment = useSelectedLayoutSegment();
//   console.log("SEGMENT", segment);

//   React.useEffect(() => {
//     document.body.classList.forEach((className) => {
//       if (className.match(/^theme.*/)) {
//         document.body.classList.remove(className);
//       }
//     });

//     const theme = segment === "(dashboard)" ? config.theme : null;
//     console.log("THEME", theme);
//     if (theme) {
//       return document.body.classList.add(`theme-${theme}`);
//     }
//   }, [segment, config]);

//   return null;
// }
