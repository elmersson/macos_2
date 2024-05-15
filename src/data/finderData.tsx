import { iTerm2Data } from './Apps';

export const finderData: iTerm2Data[] = [
  {
    id: 'recent',
    title: 'Recent',
    type: 'folder',
    children: []
  },
  {
    id: 'applications',
    title: 'Applications',
    type: 'folder',
    children: []
  },
  {
    id: 'desktop',
    title: 'Desktop',
    type: 'folder',
    children: []
  },
  {
    id: 'documents',
    title: 'Documents',
    type: 'folder',
    children: [
      {
        id: 'about',
        title: 'about',
        type: 'folder',
        children: [
          {
            id: 'about-bio',
            title: 'bio.txt',
            type: 'file',
            content: (
              <div className="py-1">
                <div>
                  Hi, im Rasmus Elmersson. A Frontend developer from Stockholm
                  currently working on Regent Ab
                </div>
              </div>
            )
          },
          {
            id: 'about-interests',
            title: 'interests.txt',
            type: 'file',
            content: 'Machine Learning / Fotball / Craftmanship'
          },
          {
            id: 'about-contact',
            title: 'contact.txt',
            type: 'file',
            content: (
              <ul className="list-disc ml-6">
                <li>
                  Email:{' '}
                  <a
                    className="text-blue-300"
                    href="mailto:elmerssonrasmus@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    elmerssonrasmus@gmail.com
                  </a>
                </li>
                <li>
                  Github:{' '}
                  <a
                    className="text-blue-300"
                    href="https://github.com/elmersson"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @elmersson
                  </a>
                </li>
                <li>
                  Linkedin:{' '}
                  <a
                    className="text-blue-300"
                    href="https://www.linkedin.com/in/rasmus-elmersson-79a161174/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    rasmus-elmersson
                  </a>
                </li>
                <li>
                  Personal Website:{' '}
                  <a
                    className="text-blue-300"
                    href="https://rasmuselmersson.se"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://rasmuselmersson.se
                  </a>
                </li>
              </ul>
            )
          }
        ]
      }
    ]
  },
  {
    id: 'downloads',
    title: 'Downloads',
    type: 'folder',
    children: [
      {
        id: 'car',
        title: 'Car',
        type: 'file'
      }
    ]
  }
] as const;
