import * as React from 'react';
import { extendTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import AllOutIcon from '@mui/icons-material/AllOut';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Box  from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MicIcon from '@mui/icons-material/Mic';
import  "./App.css"

const NAVIGATION = [
   
  {
    segment: 'orders',
    title: 'New Chat',
    icon: <AddIcon />,
  },

  {
    segment: 'box',
    title: '',
    icon: (
      <Box sx={{ width: 100,}}>
        
      </Box>
    ),
  },
  
  {
    segment: 'reports',
    title: 'Gem manager',
    icon: <AllOutIcon />,
    
  },
  {
    segment: 'help',
    title: 'Help',
    icon: <HelpOutlineIcon />,
  },
  {
    segment: 'activity',
    title: 'Activity',
    icon: <SettingsBackupRestoreIcon />,
  },
  {
    segment: 'settings',
    title: 'Settings',
    icon: <SettingsIcon />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}


export default function DashboardLayoutBasic(props) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Box
            sx={{
              backgroundImage: 'linear-gradient(to right,rgb(95, 98, 255),rgb(254, 138, 123))',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontWeight: 'bold',
              fontSize: '2.5rem',
              display: 'inline', 
            }}
          >
            <h2>Hello</h2>
          </Box>
          
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              display: "flex", 
              alignItems: "center", 
              padding: 1, 
              backgroundColor: "#fff", 
              borderRadius: "50px", 
            }}
          >
            <TextField
              fullWidth
              label="Ask Gemini"
              id="fullWidth"
              InputProps={{
                startAdornment: (
                  <AddIcon sx={{ cursor: 'pointer', marginRight: 1 }} />
                ),
                endAdornment: (
                  <MicIcon sx={{ cursor: 'pointer', marginLeft: 1 }} />
                ),
              }}
              sx={{
                '& .MuiInputBase-root': {
                  paddingRight: '20px',
                  borderRadius: "30px" 
                },
              }}
            />
          </Box>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}



