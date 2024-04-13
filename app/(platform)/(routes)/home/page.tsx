import NewPost from '@/components/new-post';
import prisma from '@/lib/prisma';

const getPosts = async () => {
  const posts = await prisma.post.findMany();

  return posts;
};

const HomePage = async () => {
  const posts = await getPosts();

  return (
    <div>
      {posts?.map((post, index) => (
        <div key={index}>
          <div>{post?.code}</div>
          <div>{post?.description}</div>
          <div>{post?.authorId}</div>
        </div>
      ))}

      <NewPost />
    </div>
  );
};

export default HomePage;
