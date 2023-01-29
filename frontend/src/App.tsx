import { useState } from 'react';
import Form from '@/components/form';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-[url(/back.jpg)] bg-no-repeat bg-top">
      <div className="container py-[110px]">
        <a
          className="block mb-[84px]"
          href="https://aviasales.ru/"
          target="_blank"
        >
          <img src="/logo.svg" alt="Aviasales logo" />
        </a>

        <h1 className="mb-[40px] text-[40px] text-white font-bold uppercase leading-[60px]">
          все круто! теперь
          <br />
          <span className="text-gradient">выигрывай путешествие</span>
        </h1>

        <p className="mb-[48px] max-w-[444px] text-[20px] font-bold">
          Чтобы участвовать в розыгрыше путешествия, оставь актуальную почту и
          поделись с друзьями
        </p>

        <Form />
      </div>
    </div>
  );
};

export default App;
