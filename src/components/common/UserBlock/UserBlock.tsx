import React from 'react';

import InfoBox from '../InfoBox/InfoBox';

export type UserBlockProps = {
  avatarUrl: string;
  title: string;
  name: string;
};

const UserBlock = ({ avatarUrl, title, name }: UserBlockProps) => (
  <InfoBox imgUrl={avatarUrl} topLabel={title} bottomLabel={name} />
);

export default UserBlock;
