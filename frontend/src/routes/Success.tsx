import { Button } from '@/ui';

const Success = () => {
  return (
    <>
      <h1 className="mb-[4vh] text-[5vh] font-bold uppercase leading-[140%] text-white">
        класс! теперь ты
        <br />
        <span className="text-gradient">участвуешь в конкурсе</span>
      </h1>

      <p className="mb-[7.3vh] max-w-[56.4vh] text-[2.5vh] font-bold leading-[150%]">
        Ты прошел все наши карты, но ты всегда можешь вызвать inDriver
        по-настоящему, для этого переходи по ссылке!
      </p>

      <Button className="w-full max-w-[31.5vh]" to="/">
        Пройти игру заново
      </Button>
    </>
  );
};

export default Success;
