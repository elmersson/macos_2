/* eslint-disable no-unused-vars */
import { EmailAccountProps, EmailProps, initialEmailData } from '@/data/emails';
import { create, StoreApi } from 'zustand';
import { persist } from 'zustand/middleware';

export interface OutlookStore {
  emails: EmailAccountProps[];
  selectedAccount?: string;
  setSelectedAccount: (id: string) => void;
  selectedEmail?: string;
  setSelectedEmail: (id: string) => void;
  getEmailsForSelectedAccount: () => EmailProps[];
  getSelectedEmail: () => EmailProps | undefined;
  resetOutlookStore: () => void;
}

export const createOutlookStore = (): StoreApi<OutlookStore> => {
  return create<OutlookStore>()(
    persist(
      (set, get) => ({
        emails: initialEmailData,
        selectedAccount: undefined,
        setSelectedAccount: (id: string) => {
          const currentSelectedAccount = get().selectedAccount;
          if (currentSelectedAccount !== id) {
            set({ selectedAccount: id, selectedEmail: undefined });
          } else {
            set({ selectedAccount: id });
          }
        },
        setSelectedEmail: (id: string) => {
          const { emails, selectedAccount, selectedEmail } = get();

          if (selectedAccount && selectedEmail) {
            const account = emails.find((acc) => acc.id === selectedAccount);
            const email = account?.emails?.find(
              (email) => email.id === selectedEmail
            );

            if (email && !email.read) {
              email.read = true;
              set({ emails: [...emails] });
            }
          }

          set({ selectedEmail: id });
        },
        getEmailsForSelectedAccount: () => {
          const { emails, selectedAccount } = get();

          console.log(`Selected Account: ${selectedAccount}`);

          if (selectedAccount === 'all') {
            return emails.flatMap((account) => account.emails || []);
          }

          if (selectedAccount === 'favorites') {
            return emails.flatMap(
              (account) =>
                account.emails?.filter((email) => email.favorite) || []
            );
          }

          const account = emails.find(
            (account) => account.id === selectedAccount
          );
          console.log(`Emails for account: ${account?.emails}`);
          return account?.emails || [];
        },
        getSelectedEmail: () => {
          const { emails, selectedEmail } = get();
          for (const account of emails) {
            const email = account.emails?.find(
              (email) => email.id === selectedEmail
            );
            if (email) {
              return email;
            }
          }
          return undefined;
        },
        resetOutlookStore: () =>
          set({
            emails: initialEmailData,
            selectedAccount: undefined,
            selectedEmail: undefined
          })
      }),
      { name: 'outlook-store' }
    )
  );
};
