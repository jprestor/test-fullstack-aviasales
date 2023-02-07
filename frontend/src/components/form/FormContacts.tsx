import cn from 'classnames';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';

import { FieldText } from '@/field';
import { Button, Form } from '@/ui';

interface IFormValues {
  email: string;
}

const FormContacts = () => {
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

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    try {
      // await submitRequest({ ...data, pageUrl: asPath });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 409) {
          setError('email', {
            type: 'exist',
            message: 'Почта уже зарегистрирована',
          });
        } else {
          reset();
        }
      } else {
        console.log('unexpected error: ', error);
      }
    }
  };

  return (
    <Form
      title="Оставь актуальный email"
      num={1}
      disabled={false}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FieldText name="email" placeholder="Ввести email" register={register} />

      {errors.email && (
        <div className="relative">
          <div
            className={cn(
              'absolute top-[4px] text-[9px]',
              errors.email.type === 'exist'
                ? 'text-[#FC1E1F]'
                : 'text-white opacity-50'
            )}
          >
            {errors.email.message}
          </div>
        </div>
      )}

      <Button
        className="mt-[26px] w-full"
        disabled={!isValid || isSubmitting}
        type="submit"
      >
        Я оставил
      </Button>
    </Form>
  );
};

export default FormContacts;
