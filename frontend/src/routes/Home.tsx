import { FormContacts, FormSocials } from '@/forms';

const Home = () => {
  return (
    <>
      <h1 className="mb-[4vh] text-[5vh] font-bold uppercase leading-[140%] text-white">
        все круто! теперь
        <br />
        <span className="text-gradient">выигрывай путешествие</span>
      </h1>

      <p className="mb-[5.5vh] max-w-[52vh] text-[2.5vh] font-bold leading-[150%]">
        Чтобы участвовать в розыгрыше путешествия, оставь актуальную почту и
        поделись с друзьями
      </p>

      <div className="flex sm:flex-col">
        <FormContacts />
        <FormSocials />
      </div>
    </>
  );
};

export default Home;
