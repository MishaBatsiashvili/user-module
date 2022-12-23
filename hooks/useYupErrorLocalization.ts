import { useEffect, useState } from 'react';
import { setLocale } from 'yup';
import { useTranslation } from 'next-i18next';
import { LocaleObject } from 'yup/lib/locale';
import { useRouter } from 'next/router';

const useYupErrorLocalizations = () => {
   const { t } = useTranslation('errors');
   const [data, setData] = useState<LocaleObject | null>(null);
   const router = useRouter();

   useEffect(() => {
      const object: LocaleObject = {
         mixed: {
            required: t('required') as string,
            default: 'Invalid Field'
         },
         string: {
            email: t('invalidEmail') as string,
         },
      };

      setLocale(object);
      setData(object);

   }, [t]);

   return data;
};

export default useYupErrorLocalizations;
