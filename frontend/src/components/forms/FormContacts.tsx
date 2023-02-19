import cn from 'classnames';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';

import { FieldText } from '@/fields';
import { Button, Form } from '@/ui';
import { setStep, setUserEmail, checkUser } from '@/store/form/formSlice';
import { useAppSelector, useAppDispatch } from '@/hooks';

interface IFormValues {
  email: string;
}

const FormContacts = () => {
  const dispatch = useAppDispatch();
  const { step, status } = useAppSelector((state) => state.form);

  const {
    register,
    reset,
    setError,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<IFormValues>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(
      Yup.object({
        email: Yup.string()
          .email('Неверный формат почты')
          .required('Это поле обязательное'),
      })
    ),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IFormValues> = async ({ email }) => {
    try {
      const isUserExist = await dispatch(checkUser(email)).unwrap();
      if (isUserExist) {
        setError('email', {
          type: 'exist',
          message: 'Почта уже зарегистрирована',
        });
      } else {
        dispatch(setUserEmail(email));
        dispatch(setStep(2));
        toast.success('Отлично! Теперь поделись с друзьями');
      }
    } catch (error) {
      if (isAxiosError(error)) {
        reset();
      } else {
        console.log('unexpected error: ', error);
        setError('root.serverError', {
          message: 'Что-то пошло не так...',
        });
      }
    }
  };

  return (
    <Form
      title="Оставь актуальный email"
      num={1}
      disabled={step !== 1}
      onSubmit={handleSubmit(onSubmit)}
      className="mr-[2.8vh] sm:mr-0 sm:mb-[2.8vh]"
    >
      <FieldText name="email" placeholder="Ввести email" register={register} />

      {(errors.email ?? errors.root?.serverError) && (
        <div className="relative">
          <div
            className={cn(
              'absolute top-[0.7vh] text-[1.03vh]',
              errors.email?.type === 'required' ||
                errors.email?.type === 'email'
                ? 'text-white opacity-50'
                : 'text-[#FC1E1F]'
            )}
          >
            {errors.email?.message ?? errors.root?.serverError.message}
          </div>
        </div>
      )}

      <Button
        className="mt-[3vh] w-full"
        disabled={!isValid || isSubmitting}
        loading={status === 'loading' && step === 1}
        type="submit"
      >
        Я оставил
      </Button>
    </Form>
  );
};

export default FormContacts;
