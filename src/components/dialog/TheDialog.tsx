import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Ban, CircleAlert, CircleCheck, CircleX, Info } from 'lucide-react'

export interface TheDialogProps {
  /** Whether the dialog is open */
  open: boolean
  /** Function to call when the dialog state changes */
  onOpenChange: (open: boolean) => void
  /** The title of the dialog */
  title: string
  /** The description text of the dialog */
  description: string
  /** The label for the OK button */
  okButtonLabel: string
  /** The label for the Cancel button */
  cancelButtonLabel: string
  /** Function to call when the OK button is clicked */
  onOk?: () => void
  /** Function to call when the Cancel button is clicked */
  onCancel?: () => void
  /** Whether to position the cancel button on the right */
  isRightCancelButton?: boolean
  /** The type of dialog affecting title color (warning: orange, error: red, info: green) */
  type?: 'warning' | 'error' | 'info'
  /** Additional class name for styling */
  className?: string
}

/**
 * A dialog component for confirmations or alerts
 */
export const TheDialog = ({
  open,
  onOpenChange,
  title,
  description,
  okButtonLabel,
  cancelButtonLabel,
  onOk,
  onCancel,
  isRightCancelButton = false,
  type,
  className,
}: TheDialogProps) => {
  const handleOk = () => {
    onOk?.()
    onOpenChange(false)
  }

  const handleCancel = () => {
    onCancel?.()
    onOpenChange(false)
  }

  // Determine title color based on type
  const getTitleColorClass = () => {
    switch (type) {
      case 'warning':
        return 'text-orange-500'
      case 'error':
        return 'text-red-500'
      case 'info':
        return 'text-green-500'
      default:
        return ''
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className={`${className}`}>
        {type === 'info' && (
          <div className="absolute top-0 left-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 animate-[rotateY_1000ms_ease-out_infinite_500ms] items-center justify-center rounded-full bg-white">
            <Info className="h-12 w-12 text-green-500" />
          </div>
        )}
        {type === 'warning' && (
          <div className="absolute top-0 left-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 animate-[rotateY_1000ms_ease-out_infinite_500ms] items-center justify-center rounded-full bg-white">
            <CircleAlert className="h-12 w-12 text-orange-500" />
          </div>
        )}
        {type === 'error' && (
          <div className="absolute top-0 left-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 animate-[rotateY_1000ms_ease-out_infinite_500ms] items-center justify-center rounded-full bg-white">
            <Ban className="h-12 w-12 text-red-500" />
          </div>
        )}
        <AlertDialogHeader>
          <AlertDialogTitle className={getTitleColorClass()}>
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex w-full gap-2">
          {isRightCancelButton ? (
            <>
              <AlertDialogAction onClick={handleOk} className="flex-[7]">
                <CircleCheck className="mr-2 h-4 w-4" />
                {okButtonLabel}
              </AlertDialogAction>
              <AlertDialogCancel onClick={handleCancel} className="flex-[3]">
                <CircleX className="mr-2 h-4 w-4" />
                {cancelButtonLabel}
              </AlertDialogCancel>
            </>
          ) : (
            <>
              <AlertDialogCancel onClick={handleCancel} className="flex-[3]">
                <CircleX className="mr-2 h-4 w-4" />
                {cancelButtonLabel}
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleOk} className="flex-[7]">
                <CircleCheck className="mr-2 h-4 w-4" />
                {okButtonLabel}
              </AlertDialogAction>
            </>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default TheDialog
