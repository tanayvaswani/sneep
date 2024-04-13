import { Card, CardContent, CardHeader } from '@/components/ui/card';
import prisma from '@/lib/prisma';
import { User2Icon } from 'lucide-react';
import Link from 'next/link';

const getUsers = async () => {
  const users = await prisma.user.findMany({});

  return users;
};

const UsersPage = async () => {
  const users = await getUsers();

  return (
    <div className="grid w-full grid-cols-1 items-center justify-center gap-4 px-4 py-16 md:grid-cols-4">
      {users?.map((user, index) => (
        <Link href={`/users/${user?.id}`} key={index}>
          <Card className="flex flex-col items-center justify-center bg-zinc-950">
            <CardHeader className="flex items-center gap-2 text-2xl">
              <User2Icon /> {user?.firstName} {user?.lastName}
            </CardHeader>

            <CardContent>{user?.email}</CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default UsersPage;
