import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import Macintosh_HD from '@/assets/icons/Macintosh HD.png';
import Folder from '@/assets/icons/folder.png';
import File from '@/assets/icons/file.png';

export interface FinderData {
  id: string;
  title: string;
  type: 'file' | 'folder' | 'harddrive';
  locked?: boolean;
  iconImg: StaticImageData;
  content?: ReactNode | string;
  children?: FinderData[];
}
export const finderData: FinderData[] = [
  {
    id: 'macintosh-hd',
    title: 'Macintosh HD',
    type: 'harddrive',
    iconImg: Macintosh_HD,
    children: [
      {
        id: 'vol',
        title: '.vol',
        type: 'folder',
        iconImg: Folder,
        locked: true,
        children: []
      },
      {
        id: 'applications',
        title: 'Applications',
        type: 'folder',
        iconImg: Folder,
        children: []
      },
      {
        id: 'bin',
        title: 'bin',
        type: 'folder',
        iconImg: Folder,
        locked: true,
        children: []
      },
      {
        id: 'cores',
        title: 'cores',
        type: 'folder',
        iconImg: Folder,
        locked: true,
        children: []
      },
      {
        id: 'etc',
        title: 'etc',
        type: 'folder',
        iconImg: Folder,
        locked: true,
        children: []
      },
      {
        id: 'home',
        title: 'home',
        type: 'harddrive',
        iconImg: Macintosh_HD,
        locked: true,
        children: []
      },
      {
        id: 'library',
        title: 'Library',
        type: 'folder',
        iconImg: Folder,
        children: []
      },
      {
        id: 'opt',
        title: 'opt',
        type: 'folder',
        iconImg: Folder,
        locked: true,
        children: []
      },
      {
        id: 'private',
        title: 'private',
        type: 'folder',
        iconImg: Folder,
        locked: true,
        children: []
      },
      {
        id: 'sbin',
        title: 'sbin',
        type: 'folder',
        iconImg: Folder,
        locked: true,
        children: []
      },
      {
        id: 'system',
        title: 'System',
        type: 'folder',
        iconImg: Folder,
        children: []
      },
      {
        id: 'tmp',
        title: 'tmp',
        type: 'folder',
        locked: true,
        iconImg: Folder,
        children: []
      },
      {
        id: 'Users',
        title: 'Users',
        type: 'folder',
        iconImg: Folder,
        children: [
          {
            id: 'rasmuselmersson',
            title: 'rasmuselmersson',
            type: 'folder',
            iconImg: Folder,
            children: [
              {
                id: 'desktop',
                title: 'Desktop',
                type: 'folder',
                iconImg: Folder,
                children: [
                  {
                    id: 'pdf-llm-chat',
                    title: 'pdf-llm-chat',
                    type: 'folder',
                    iconImg: Folder,
                    children: []
                  },
                  {
                    id: '3d-print',
                    title: '3D Print',
                    type: 'folder',
                    iconImg: Folder,
                    children: [
                      {
                        id: 'molecule-lamp',
                        title: 'molecule lamp table',
                        type: 'folder',
                        iconImg: Folder,
                        children: [
                          {
                            id: '757832-molecule-table-lamp-60652a2d-b0c0-4fe1-b905-be38cdd8d535',
                            title:
                              '757832-molecule-table-lamp-60652a2d-b0c0-4fe1-b905-be38cdd8d535.pdf',
                            type: 'file',
                            iconImg: File
                          },
                          {
                            id: 'molecule-lamp-main-part',
                            title: 'molecule-lamp-main-part.stl',
                            type: 'file',
                            iconImg: File
                          },
                          {
                            id: 'molecule-lamp-cable-fix',
                            title: 'molecule-lamp-cable-fix.stl',
                            type: 'file',
                            iconImg: File
                          },
                          {
                            id: 'molecule-lamp-connector-outer-part',
                            title: 'molecule-lamp-connector-outer-part.stl',
                            type: 'file',
                            iconImg: File
                          },
                          {
                            id: 'molecule-lamp-stand',
                            title: 'molecule-lamp-stand.stl',
                            type: 'file',
                            iconImg: File
                          },
                          {
                            id: 'molecule-lamp-connector-inner-part',
                            title: 'molecule-lamp-connector-inner-part.stl',
                            type: 'file',
                            iconImg: File
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id: 'documents',
                title: 'Documents',
                type: 'folder',
                iconImg: Folder,
                children: [
                  {
                    id: 'about',
                    title: 'about',
                    type: 'folder',
                    iconImg: Folder,
                    children: [
                      {
                        id: 'about-bio',
                        title: 'bio.txt',
                        type: 'file',
                        iconImg: File,
                        content: (
                          <div className="py-1">
                            <div>
                              Hi, im Rasmus Elmersson. A Frontend developer from
                              Stockholm currently working on Regent Ab
                            </div>
                          </div>
                        )
                      },
                      {
                        id: 'about-interests',
                        title: 'interests.txt',
                        type: 'file',
                        iconImg: File,
                        content: 'Machine Learning / Fotball / Craftmanship'
                      },
                      {
                        id: 'about-contact',
                        title: 'contact.txt',
                        type: 'file',
                        iconImg: File,
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
                iconImg: Folder,
                children: [
                  {
                    id: 'car',
                    title: 'Car',
                    type: 'file',
                    iconImg: File
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'usr',
        title: 'usr',
        type: 'folder',
        iconImg: Folder,
        locked: true,
        children: []
      },
      {
        id: 'var',
        title: 'var',
        type: 'folder',
        iconImg: Folder,
        locked: true,
        children: []
      },
      {
        id: 'volumes',
        title: 'Volumes',
        type: 'folder',
        iconImg: Folder,
        locked: true,
        children: []
      }
    ]
  },
  {
    id: 'recent',
    title: 'Recent',
    type: 'folder',
    iconImg: Folder,
    children: []
  }
] as const;
