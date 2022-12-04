import Avatar1 from '../../../assets/images/avatar/avatar.png';
import Avatar2 from '../../../assets/images/avatar/avatar2.png';
import Avatar3 from '../../../assets/images/avatar/ded.png';
import FeedImg from '../../../assets/images/feedItem.png';

import { FeedItemProps, FeedItemUserProps } from './types';

export const FeedItemData: FeedItemProps[] = [
  {
    avatarUrl: Avatar1,
    countEnd: '12',
    title: 'ETH never die',
    imgUrl: FeedImg,
    price: '0.27',
  },

  {
    avatarUrl: Avatar2,
    countEnd: '3',
    title: 'Future coming soon',
    imgUrl: FeedImg,
    price: '0.27',
  },

  {
    avatarUrl: Avatar1,
    countEnd: '4',
    title: 'Elon Musk silver coin 3d print',
    imgUrl: FeedImg,
    price: '0.27',
  },
];

export const FeedItemUserData: FeedItemUserProps[] = [
  {
    number: 6,
    startPrice: '1.00',
    creator: {
      avatarUrl: Avatar3,
      firstName: 'Enrico',
      lastName: 'Cole',
    },
  },
  {
    number: 4,
    startPrice: '1.00',
    creator: {
      avatarUrl: Avatar3,
      firstName: 'Enrico',
      lastName: 'Cole',
    },
  },
  {
    number: 2,
    startPrice: '2.456',
    creator: {
      avatarUrl: Avatar3,
      firstName: 'Enrico',
      lastName: 'Ledner',
    },
  },
  {
    number: 3,
    startPrice: '2.456',
    creator: {
      avatarUrl: Avatar3,
      firstName: 'Lorena',
      lastName: 'Ledner',
    },
  },
];
