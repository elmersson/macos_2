export interface EmailAccountProps {
  id: string;
  emails?: EmailProps[];
}

export interface EmailProps {
  id: string;
  from: string;
  to: string[];
  cc?: string[];
  bcc?: string[];
  subject: string;
  body: string;
  sentDate: Date;
  receivedDate: Date;
  read: boolean;
  flagged: boolean;
  pinned: boolean;
  favorite: boolean;
  folder: string;
}

export const initialEmailData: EmailAccountProps[] = [
  {
    id: 'rasmus.elmersson@regent.se',
    emails: [
      {
        id: 'regent-email-1',
        from: 'ceo@bigcorp.com',
        to: ['rasmus.elmersson@regent.se'],
        subject: 'A Big Thanks from BigCorp!',
        body: 'Dear Rasmus,\n\nThank you for your incredible support during our system upgrade. We couldn’t have done it without you! Your expertise in navigating complex challenges is truly appreciated.\n\nBest,\nBigCorp CEO',
        sentDate: new Date('2024-06-01T08:30:00Z'),
        receivedDate: new Date('2024-06-01T08:31:00Z'),
        read: true,
        flagged: false,
        pinned: false,
        favorite: true,
        folder: 'inbox'
      },
      {
        id: 'regent-email-2',
        from: 'janitor@bigcorp.com',
        to: ['rasmus.elmersson@regent.se'],
        subject: 'Unexpected Help!',
        body: 'Hi Rasmus,\n\nI just wanted to say thank you for fixing the vending machine in the break room. It’s been the highlight of everyone’s day!\n\nCheers,\nBigCorp Janitor',
        sentDate: new Date('2024-06-02T09:15:00Z'),
        receivedDate: new Date('2024-06-02T09:16:00Z'),
        read: false,
        flagged: false,
        pinned: true,
        favorite: false,
        folder: 'inbox'
      }
    ]
  },
  {
    id: 'rasmus.elmersson@martinservera.se',
    emails: [
      {
        id: 'martinservera-email-1',
        from: 'support@datadog.com',
        to: ['rasmus.elmersson@martinservera.se'],
        subject: 'Thank You for Your Feedback!',
        body: 'Hello Rasmus,\n\nWe appreciate your feedback on our new monitoring tool. Your insights have been invaluable in helping us improve our services.\n\nRegards,\nDataDog Support Team',
        sentDate: new Date('2024-06-03T10:00:00Z'),
        receivedDate: new Date('2024-06-03T10:01:00Z'),
        read: true,
        flagged: true,
        pinned: false,
        favorite: true,
        folder: 'inbox'
      },
      {
        id: 'martinservera-email-2',
        from: 'expo-team@expo.io',
        to: ['rasmus.elmersson@martinservera.se'],
        subject: 'Expo Rocks!',
        body: 'Hey Rasmus,\n\nThank you for your continuous support and enthusiasm for Expo. We love hearing how you use our tools to build awesome apps!\n\nBest,\nThe Expo Team',
        sentDate: new Date('2024-06-04T11:30:00Z'),
        receivedDate: new Date('2024-06-04T11:31:00Z'),
        read: false,
        flagged: false,
        pinned: true,
        favorite: false,
        folder: 'inbox'
      },
      {
        id: 'martinservera-email-3',
        from: 'support@firebase.google.com',
        to: ['rasmus.elmersson@martinservera.se'],
        subject: 'Firebase Forever!',
        body: 'Hi Rasmus,\n\nYour dedication to Firebase is amazing! Thanks for helping us make the internet a better place.\n\nCheers,\nFirebase Team',
        sentDate: new Date('2024-06-05T12:00:00Z'),
        receivedDate: new Date('2024-06-05T12:01:00Z'),
        read: true,
        flagged: true,
        pinned: false,
        favorite: true,
        folder: 'inbox'
      },
      {
        id: 'martinservera-email-4',
        from: 'redux-support@redux.js.org',
        to: ['rasmus.elmersson@martinservera.se'],
        subject: 'Redux Rules!',
        body: 'Hey Rasmus,\n\nThank you for your amazing contributions to the Redux community. Your insights have helped us tremendously.\n\nBest,\nRedux Support Team',
        sentDate: new Date('2024-06-06T13:00:00Z'),
        receivedDate: new Date('2024-06-06T13:01:00Z'),
        read: true,
        flagged: false,
        pinned: true,
        favorite: false,
        folder: 'inbox'
      },
      {
        id: 'martinservera-email-5',
        from: 'tamagui-team@tamagui.dev',
        to: ['rasmus.elmersson@martinservera.se'],
        subject: 'Tamagui Thanks You!',
        body: 'Hello Rasmus,\n\nYour feedback on Tamagui has been incredibly helpful. Thanks for being an awesome user!\n\nBest,\nThe Tamagui Team',
        sentDate: new Date('2024-06-07T14:00:00Z'),
        receivedDate: new Date('2024-06-07T14:01:00Z'),
        read: true,
        flagged: false,
        pinned: true,
        favorite: true,
        folder: 'inbox'
      }
    ]
  }
];
