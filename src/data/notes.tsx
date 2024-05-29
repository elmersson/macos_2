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

const profile = `PROFILE
Experienced Lead Frontend/Full Stack Developer with extensive expertise in React and React Native. Currently leading the development of a major app for Sweden’s largest wholesaler using Expo and React Native with Redux, machine learning, mentoring junior developers, and driving innovative solutions. Adept at working both independently and as part of a team to deliver high-quality, user-centric applications.

EXPERIENCE
Lead Frontend/Full Stack Developer
Regent
February 2023 – Present
Leading the creation of the company's first app using Expo and React Native with Redux. Collaborating with cross-functional teams to ensure seamless integration and high performance. Working with machine learning to enhance app functionalities. Mentoring junior developers and conducting code reviews to maintain code quality.

React Frontend Developer
Springpixel
August 2020 – February 2023
Led a team of three developers, bridging the gap between
developers and customers. Implemented functionalities
using React and Typescript. Created user design,
conducted user interviews, and managed the entire UX
flow. Utilized tools such as Adobe XD, Illustrator, After Effects,
and Blender for design and animations.

Frontend Developer (React, React Native)
We Know IT
August 2019 – February 2020
Developed multiple business websites and mobile apps
using React and React Native. Engaged with businesses to
discuss code requirements and project estimations.
Collaborated closely with another developer in pair
programming setups.
`;

const personalLetter = `Born 1995 in Örebro`;

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
        content: profile
      },
      {
        id: 'work-personal-letter',
        title: 'Personal Letter',
        timeStamp: new Date('2023-05-02'),
        content: personalLetter
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
