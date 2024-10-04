// src/lib/components/chip/chip.stories.ts
import { Meta, StoryObj } from '@storybook/angular';
import { ChipComponent } from './chip.component';
import { IChip } from '../../models'; // Импорт интерфейса

const meta: Meta<ChipComponent> = {
  title: 'UI/Components/Chip', // Заголовок компонента в Storybook
  component: ChipComponent,
  tags: ['autodocs'],
};

export default meta;

// Определение типа истории
type Story = StoryObj<ChipComponent & IChip>; // Добавляем интерфейс к типу истории

// Стандартная история с настройками по умолчанию
export const Default: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {
    title: 'Default Chip', // Замените на ваши свойства
    size: 'medium', // Добавьте размер, если есть
  },
};

// Пример пользовательской истории
export const WithCustomTitle: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {
    title: 'Custom Chip Title', // Пользовательский заголовок для этой истории
    size: 'large', // Настройки размера
  },
};

// Пример истории с изменяемым состоянием
export const Removable: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {
    title: 'Removable Chip', // Заголовок для удаляемого чипа
    size: 'small', // Размер для удаляемого чипа
  },
};
