import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { TheDialog } from './TheDialog'

const meta = {
  title: 'Components/Dialog/TheDialog',
  component: TheDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    okButtonLabel: { control: 'text' },
    cancelButtonLabel: { control: 'text' },
    open: { control: 'boolean' },
    isRightCancelButton: { control: 'boolean' },
    isOneButton: { control: 'boolean', description: 'Show only the OK button' },
    type: {
      control: 'select',
      options: ['warning', 'error', 'info'],
      description:
        'Dialog type affecting title color (warning: orange, error: red, info: green)',
    },
    onOpenChange: { action: 'onOpenChange' },
    onOk: { action: 'onOk' },
    onCancel: { action: 'onCancel' },
  },
  args: {
    onOpenChange: fn(),
    onOk: fn(),
    onCancel: fn(),
  },
} satisfies Meta<typeof TheDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    open: true,
    title: 'Are you sure?',
    description:
      'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    okButtonLabel: 'Continue',
    cancelButtonLabel: 'Cancel',
  },
}

export const Warning: Story = {
  args: {
    open: true,
    title: 'Warning',
    description:
      'You are about to delete this item. This action cannot be undone.',
    okButtonLabel: 'Delete',
    cancelButtonLabel: 'Cancel',
    type: 'warning',
  },
}

export const Information: Story = {
  args: {
    open: true,
    title: 'Information',
    description:
      'Your account has been successfully created. You can now log in with your credentials.',
    okButtonLabel: 'OK',
    cancelButtonLabel: 'Close',
    type: 'info',
  },
}

export const Error: Story = {
  args: {
    open: true,
    title: 'Error',
    description:
      'An error occurred while processing your request. Please try again later.',
    okButtonLabel: 'Try Again',
    cancelButtonLabel: 'Cancel',
    type: 'error',
  },
}

export const RightCancelButton: Story = {
  args: {
    open: true,
    title: 'Confirm Action',
    description: 'Are you sure you want to proceed with this action?',
    okButtonLabel: 'Yes, Proceed',
    cancelButtonLabel: 'No, Cancel',
    isRightCancelButton: true,
  },
}

export const OneButton: Story = {
  args: {
    open: true,
    title: 'Notification',
    description: 'Your changes have been saved successfully.',
    okButtonLabel: 'Got it',
    cancelButtonLabel: 'Cancel',
    isOneButton: true,
    type: 'info',
  },
}
