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

export interface TheDialogProps {
  /** Whether the dialog is open */
  open: boolean;
  /** Function to call when the dialog state changes */
  onOpenChange: (open: boolean) => void;
  /** The title of the dialog */
  title: string;
  /** The description text of the dialog */
  description: string;
  /** The label for the OK button */
  okButtonLabel: string;
  /** The label for the Cancel button */
  cancelButtonLabel: string;
  /** Function to call when the OK button is clicked */
  onOk?: () => void;
  /** Function to call when the Cancel button is clicked */
  onCancel?: () => void;
  /** Whether to position the cancel button on the right */
  isRightCancelButton?: boolean;
  /** Additional class name for styling */
  className?: string;
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
  className,
}: TheDialogProps) => {
  const handleOk = () => {
    onOk?.();
    onOpenChange(false);
  };

  const handleCancel = () => {
    onCancel?.();
    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className={className}>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex w-full gap-2">
          {isRightCancelButton ? (
            <>
              <AlertDialogAction 
                onClick={handleOk}
                className="flex-[7]"
              >
                {okButtonLabel}
              </AlertDialogAction>
              <AlertDialogCancel 
                onClick={handleCancel}
                className="flex-[3]"
              >
                {cancelButtonLabel}
              </AlertDialogCancel>
            </>
          ) : (
            <>
              <AlertDialogCancel 
                onClick={handleCancel}
                className="flex-[3]"
              >
                {cancelButtonLabel}
              </AlertDialogCancel>
              <AlertDialogAction 
                onClick={handleOk}
                className="flex-[7]"
              >
                {okButtonLabel}
              </AlertDialogAction>
            </>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TheDialog;
