import { CardInfo, CardInfoProps } from './CardInfo';

export default {
  component: CardInfo,
};

const args: CardInfoProps = {
  avatar: '',
  contacts: '',
  description:
    'Я — то, кем ты хотел бы быть. Я выгляжу так, как ты мечтаешь выглядеть. ' +
    'Я умён, талантлив и, самое главное, свободен от всего, что сковывает тебя.',
  education: '',
  fullName: 'Павел Егоров',
  id: '',
  location: '',
  requirements: '',
  subjects: '',
};

export const Default = {
  args,
};
