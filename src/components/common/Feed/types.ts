import { User } from '../../../models/User';

export type FeedItemUserProps = {
  number: number;
  startPrice: string;
  creator: User;
};

export type FeedItemProps = {
  imgUrl: string;
  price: string;
  countEnd: string | number;
  title: string;
  avatarUrl: string;
};
