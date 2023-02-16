import { Routes, Route, Link } from 'react-router-dom';
import { Home, Success } from '@/routes';

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[url(/back.jpg)] bg-cover bg-top">
      <div className="container py-[110px] sm:py-[50px]">
        <Link className="mb-[82px] block sm:mb-[55px]" to="me">
          <img src="/logo.svg" alt="Aviasales logo" />
        </Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
