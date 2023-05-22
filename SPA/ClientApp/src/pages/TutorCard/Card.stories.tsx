import { Card, CardInfoProps } from './Card';

export default {
  component: Card,
};

const args: CardInfoProps = {
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
