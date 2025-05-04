"use client";

import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { Flex } from "../design-system";
import { ErrorIcon } from "../design-system/Input/ErrorIcon";
import { SuccessIcon } from "../design-system/Input/SuccessIcon";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        variant,
        ...props
      }) {
        return (
          <Toast key={id} variant={variant} {...props}>
            <div className="grid gap-1">
              <Flex align="center" gap={4}>
                {variant === "destructive" ? (
                  <ErrorIcon fill="white" width="40" height="40" />
                ) : (
                  <SuccessIcon
                    className="stroke-brand-primary"
                    width="40"
                    height="40"
                  />
                )}
                {title && <ToastTitle>{title}</ToastTitle>}
              </Flex>
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
