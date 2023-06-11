import { Card, CardInfoProps } from './Card';
import { Default as ContactModalStory } from '../../components/ContactsModal/ContactModal.stories';
export default {
  component: Card,
};

const args: CardInfoProps = {
  contacts: ContactModalStory.args.contacts,
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
