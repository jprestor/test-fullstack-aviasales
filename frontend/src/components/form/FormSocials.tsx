import { redirect } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import api from '@/src/api';

import { FieldSocialShare } from '@/field';
import { Button, Form } from '@/ui';
import { useAppSelector } from '@/hooks';

interface IFormValues {
  shared: boolean;
}

const FormSocials = () => {
  const { step, email } = useAppSelector((state) => state.form);

  const {
    setError,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormValues>({
    defaultValues: {
      shared: false,
    },
    resolver: yupResolver(
      Yup.object({
        shared: Yup.boolean().oneOf([true], 'Надо все же поделиться'),
      })
    ),
  });

  const onSubmit: SubmitHandler<IFormValues> = async () => {
    try {
      await api.post('/users/create', { email });
      redirect('/success');
    } catch (error) {
      console.log('unexpected error: ', error);
      setError('root.serverError', {
        message: 'Что-то пошло не так...',
      });
    }
  };

  const onShareLinkClick = () => setValue('shared', true);

  return (
    <Form
      title="Поделись с друзьями"
      num={2}
      disabled={step !== 2}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-4 gap-[20px]">
        <FieldSocialShare
          className="shadow-[-10px_0_20px_rgba(0,58,218,.35),0_4px_5px_rgba(0,12,35,.5)]"
          href="https://www.facebook.com/sharer/sharer.php?u=aviasales.ru"
          onClick={onShareLinkClick}
        >
          <img src="/facebook.svg" alt="facebook-share-link" />
        </FieldSocialShare>

        <FieldSocialShare
          className="-8px_-5px_20px_rgba(0,119,255,0.46),0_4px_5px_rgba(0,12,35,.5)"
          href="https://vk.com/share.php?url=aviasales.ru"
          onClick={onShareLinkClick}
        >
          <img src="/vk.svg" alt="vk-share-link" />
        </FieldSocialShare>

        <FieldSocialShare
          className="shadow-[-8px_3px_20px_rgba(0,158,255,.4),0_4px_5px_rgba(0,12,35,.5)]"
          href="https://twitter.com/intent/tweet?url=aviasales.ru"
          onClick={onShareLinkClick}
        >
          <img src="/twitter.svg" alt="twitter-share-link" />
        </FieldSocialShare>

        <FieldSocialShare
          className="shadow-[-10px_0_20px_rgba(255,0,108,.33),_0_4px_5px_rgba(0,12,35,.5)]"
          href="https://www.instagram.com"
          onClick={onShareLinkClick}
        >
          <img src="/instagram.svg" alt="instagram-share-link" />
        </FieldSocialShare>
      </div>

      {(errors.shared || errors.root?.serverError) && (
        <div className="relative">
          <div className="absolute top-[10px] text-[9px] text-[#FC1E1F]">
            {errors.shared?.message}
            {errors.root?.serverError.message}
          </div>
        </div>
      )}

      <Button
        className="mt-[28px] w-full"
        disabled={isSubmitting}
        type="submit"
      >
        Я поделился
      </Button>
    </Form>
  );
};

export default FormSocials;
