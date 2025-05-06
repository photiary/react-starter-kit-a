import type { Meta, StoryObj } from '@storybook/react'

import { TheMenuFooter } from './TheMenuFooter'

const meta = {
  title: 'Components/Footer/TheMenuFooter',
  component: TheMenuFooter,
  parameters: {
    layout: 'fullscreen', // Using fullscreen layout since this is a footer component
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TheMenuFooter>

export default meta
type Story = StoryObj<typeof meta>

// Basic story with default rendering
export const Default: Story = { args: {} }
