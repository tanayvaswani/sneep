import { Post } from '@prisma/client';

type PostCardType = {};

const PostCard = ({
  description,
  code,
  published,
  upvotes,
  downvotes,
  comments,
  authorId,
}: Post) => {
  return <div>{}</div>;
};

export default PostCard;
