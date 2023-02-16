import { FormContacts, FormSocials } from '@/components/form';

const Home = () => {
  return (
    <>
      <h1 className="mb-[35px] text-[40px] font-bold uppercase leading-[58px] text-white">
        все круто! теперь
        <br />
        <span className="text-gradient">выигрывай путешествие</span>
      </h1>

      <p className="mb-[48px] max-w-[444px] text-[20px] font-bold leading-[150%]">
        Чтобы участвовать в розыгрыше путешествия, оставь актуальную почту и
        поделись с друзьями
      </p>

      <div className="grid max-w-[584px] grid-cols-2 gap-[24px] sm:grid-cols-1">
        <FormContacts />
        <FormSocials />
      </div>
    </>
  );
};

export default Home;
