import { Routes, Route, Link } from 'react-router-dom';
import { Home, Final } from '@/routes';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[url(/back.jpg)] bg-no-repeat bg-top">
      <div className="container py-[110px]">
        <Link className="block mb-[82px]" to="me">
          <img src="/logo.svg" alt="Aviasales logo" />
        </Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
