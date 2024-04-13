import NewPost from '@/components/new-post';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import prisma from '@/lib/prisma';
import { ArrowBigDown, ArrowBigUp } from 'lucide-react';

const getPosts = async () => {
  const posts = await prisma.post.findMany();

  return posts;
};

const HomePage = async () => {
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-1 items-center gap-6 py-16 md:mx-auto md:max-w-screen-md">
      {posts?.map((post, index) => (
        <Card
          key={index}
          className="rounded-none border-none border-zinc-400 bg-transparent"
        >
          <CardHeader>
            <CardTitle>{post.description}</CardTitle>
          </CardHeader>

          <CardContent>{post.code}</CardContent>

          <CardFooter className="flex items-center justify-around border-b">
            <Button className="flex items-center">
              <ArrowBigUp /> {post.upvotes}
            </Button>

            <Button className="flex items-center">
              <ArrowBigDown /> {post.downvotes}
            </Button>
          </CardFooter>
        </Card>
      ))}

      <NewPost />
    </div>
  );
};

export default HomePage;
