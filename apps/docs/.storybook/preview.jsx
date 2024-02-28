import React, { useEffect } from 'react';
import { addons } from "@storybook/preview-api";
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';


const ThemeContext = React.createContext();
// get channel to listen to event emitter
const channel = addons.getChannel();

// create a component that listens for the DARK_MODE event
function ThemeWrapper(props) {
  // this example uses hook but you can also use class component as well
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    // listen to DARK_MODE event
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
  }, [channel, setDark]);

  // render your custom theme provider
  return (
    <ThemeContext.Provider value={isDark ? darkTheme : defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
}


export const parameters = {
  darkMode: {
    classTarget: "html",
    dark: themes.dark,
    darkClass: ["dark"],
    light: themes.light,
    lightClass: ["light"],
    stylePreview: true,
    userHasExplicitlySetTheTheme: false,
  },
}


export const decorators = [renderStory => <ThemeWrapper>{renderStory()}</ThemeWrapper>]