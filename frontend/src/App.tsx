import { Routes, Route, Link } from 'react-router-dom';
import { Home, Success } from '@/routes';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[url(/back.jpg)] bg-cover bg-top">
      <div className="container pt-[11.5vh] pb-[40px] sm:py-[50px]">
        <Link className="mb-[9vh] block sm:mb-[55px]" to="/">
          <img className="w-[15.9vh]" src="/logo.svg" alt="Aviasales logo" />
        </Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>

      <Toaster />
    </div>
  );
};

export default App;
