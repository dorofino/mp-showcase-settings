import './App.css';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { Showcase } from './components/Showcase';
import { SettingsList } from './components/SettingsList';
export default function App() {
  const [sdk, setSdk] = useState(null);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.matterport.com/showcase-sdk/latest.js';
    document.body.appendChild(script);
    return () => {
      // clean up the script when the component in unmounted
      document.body.removeChild(script);
    };
  }, []);

  function handleConnect(mpSdk) {
    console.log('SDK Connected and Loaded', mpSdk);
    setSdk(mpSdk);
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <header>
          <h1>Showcase Settings</h1>
          <a href="https://goshow.me">GoShow.me</a>
        </header>
        <Showcase onConnect={handleConnect} />
        <Container maxWidth="md">
          <Box>
            <p>
              The Settings Namespace allows developers access to internal
              settings within Showcase. These internal settings are unsupported
              and may change. This playground will allow developers to
              experiment with all known settings.
            </p>
          </Box>
          <Box>
            <SettingsList sdk={sdk} />
          </Box>
          <Box>
            <h3>Changelog</h3>
            <ul>
              <li>2023/07/11 - Migrated to Refactored with React.js w/MUI</li>
              <li>2023/07/09 - Refactored with React.js</li>
              <li>
                2022/12/20 - Added deserialization for fill and stroke -- Cannot
                figure out how to get these values to update however...
              </li>
              <li>2022/10/27 - Text Inputs and Select Boxes are now active.</li>
            </ul>
            <p>
              <b>To-Do</b>
            </p>
            <ul>
              <li>Tooltips on settings to explain what the setting does.</li>
            </ul>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
