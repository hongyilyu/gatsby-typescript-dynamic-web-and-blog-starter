import React from 'react';
import TagChip from './tag-chip.component';
import TagHashTag from './tag-hashtag.component';

export enum TagStyle {
  CHIP = 'Chip',
  HASHTAG = 'Hashtag',
}

export interface TagProps {
  name: string;
  href?: string;
  last?: boolean;
}

const mySwitchStatement = (tagStyle: TagStyle): React.FC<TagProps> => {
  switch (tagStyle) {
    case TagStyle.CHIP:
      return TagChip;
    case TagStyle.HASHTAG:
      return TagHashTag;
    default:
      return TagHashTag;
  }
};

const TagList: React.FC<{ tags: string[]; tagStyle: TagStyle }> = ({
  tags,
  tagStyle,
}) => {
  const Tag = mySwitchStatement(tagStyle);
  return (
    <>
      {tags.map((tag, i) => {
        return <Tag name={tag} key={tag} last={i === tags.length - 1} />;
      })}
    </>
  );
};

export default TagList;
