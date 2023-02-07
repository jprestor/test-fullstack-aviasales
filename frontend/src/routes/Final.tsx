import { useState } from 'react';
import { Button } from '@/ui';

const Final = () => {
  return (
    <>
      <h1 className="mb-[35px] text-[40px] text-white font-bold uppercase leading-[58px]">
        класс! теперь ты
        <br />
        <span className="text-gradient">участвуешь в конкурсе</span>
      </h1>

      <p className="mb-[65px] max-w-[497px] text-[20px] font-bold leading-[150%]">
        Ты прошел все наши карты, но ты всегда можешь вызвать inDriver
        по-настоящему, для этого переходи по ссылке!
      </p>

      <Button className="max-w-[277px] w-full" to="/">
        Пройти игру заново
      </Button>
    </>
  );
};

export default Final;
