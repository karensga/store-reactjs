import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Login from './pages/Login'
import Signup from './pages/Signup'

const theme = {
  primary: "#184A2C",
  secondary: '#EBFDF2',
  third: '#76B536'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
