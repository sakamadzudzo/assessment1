import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Layout from "./components/Layout";
import Theme from "./custome-theme";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import myLocalStorage from "./myLocalStorage";

function App() {

  if (!myLocalStorage.getItem('token') && window.location.pathname !== '/login') {
    window.location.href = '/login';

  }

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
          <ToastContainer />
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;