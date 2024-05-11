export interface NoteAppProps {
  dir: string;
  folders: FolderProps[];
}

export interface FolderProps {
  id: string;
  title: string;
  notes: Note[];
  folder?: FolderProps[];
}

export interface Note {
  id: string;
  title: string;
  timeStamp: Date;
  content: string;
}

export const starterNotes: FolderProps[] = [
  {
    id: 'folder1',
    title: 'Work',
    notes: [
      {
        id: 'work-meeting-notes',
        title: 'Meeting Notes',
        timeStamp: new Date('2024-05-09'),
        content: 'text'
      },
      {
        id: 'work-project-ideas',
        title: 'Project Ideas',
        timeStamp: new Date('2024-05-02'),
        content: 'text'
      },
      {
        id: 'work-cv',
        title: 'CV',
        timeStamp: new Date('2023-04-01'),
        content: 'text'
      },
      {
        id: 'work-personal-letter',
        title: 'Personal Letter',
        timeStamp: new Date('2023-05-02'),
        content: 'text'
      }
    ],
    folder: [
      {
        id: 'subfolder1',
        title: 'Reviews',
        notes: [
          {
            id: 'note3',
            title: 'Annual Review',
            timeStamp: new Date('2024-05-03'),
            content: 'text'
          }
        ]
      }
    ]
  },
  {
    id: 'folder2',
    title: 'Personal',
    notes: [
      {
        id: 'note4',
        title: 'Grocery List',
        timeStamp: new Date('2024-05-04'),
        content: 'text'
      },
      {
        id: 'note5',
        title: 'Book Recommendations',
        timeStamp: new Date('2024-05-05'),
        content: 'text'
      }
    ]
  }
];
