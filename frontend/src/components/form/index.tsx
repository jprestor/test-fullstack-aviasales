import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '@/ui/button';
import Frame from '@/ui/frame';

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Frame num={1} title="Оставь актуальный email">
        <input {...register('exampleRequired', { required: true })} />
      </Frame>
      {errors.exampleRequired && <span>This field is required</span>}
      <Button disabled type="submit">
        Я оставил
      </Button>
    </form>
  );
};

export default Form;
