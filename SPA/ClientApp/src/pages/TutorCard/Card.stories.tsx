import { Card, CardInfoProps } from './Card';
import { Default as ContactModalStory } from '../../components/modals/ContactModal.stories';
import { StoryObj } from '@storybook/react';
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
  isLoading: false,
  job: '',
};

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args,
};

export const Loading: Story = {
  args: { ...Default.args, isLoading: true },
};
