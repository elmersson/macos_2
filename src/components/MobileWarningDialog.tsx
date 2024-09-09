'use client';
import React, { useState, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from './ui/alert-dialog';
import { useSystemStore } from './providers/store-provider';

const MobileWarningDialog = () => {
  const { closedIsPhone, setIsClosedPhone } = useSystemStore((state) => state);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      if (
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent
        )
      ) {
        setIsMobile(true);
      }
    };

    checkDeviceType();
  }, []);

  const handlePress = () => {
    setIsMobile(false);
    setIsClosedPhone(true);
  };

  return (
    <div>
      {isMobile && !closedIsPhone && (
        <AlertDialog open={isMobile}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Mobile and Tablet Support</AlertDialogTitle>
              <AlertDialogDescription>
                Mobile and tablet functionality is currently under development.
                Please use a laptop for an optimized experience.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handlePress}>
                Cancel
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
};

export default MobileWarningDialog;
