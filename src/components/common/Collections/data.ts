import Ava from '../../../assets/images/avatar/avatar2.png';
import { User } from '../../../models/User';
import BigImg1 from '../../../assets/images/collections/big.png';
import SmallImg1 from '../../../assets/images/collections/small1.png';
import SmallImg2 from '../../../assets/images/collections/small2.png';
import SmallImg3 from '../../../assets/images/collections/small3.png';

export type CollectionsType = {
  creator: User;
  count: number;
  images: ImagesList[];
};

export interface ImagesList {
  img: string;
  title?: string;
  rows?: number;
  cols?: number;
}

export const itemCollectionData: CollectionsType[] = [
  {
    count: 28,
    creator: {
      avatarUrl: Ava,
      firstName: 'John',
      lastName: 'Doe',
    },
    images: [
      {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 3,
        cols: 6,
      },
      {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        cols: 2,
      },
      {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        cols: 2,
      },
      {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
      },
    ],
  },
  {
    count: 9,
    creator: {
      avatarUrl: Ava,
      firstName: 'Lisa',
      lastName: 'Done',
    },
    images: [
      {
        img: BigImg1,
        title: 'Breakfast',
        rows: 3,
        cols: 6,
      },
      {
        img: SmallImg1,
        title: 'Burger',
        cols: 2,
      },
      {
        img: SmallImg2,
        title: 'Camera',
        cols: 2,
      },
      {
        img: SmallImg3,
        title: 'Coffee',
        cols: 2,
      },
    ],
  },
  {
    count: 28,
    creator: {
      avatarUrl: Ava,
      firstName: 'John',
      lastName: 'Doe',
    },
    images: [
      {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 3,
        cols: 6,
      },
      {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        cols: 2,
      },
      {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        cols: 2,
      },
      {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
      },
    ],
  },
];

export const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 3,
    cols: 6,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
];
