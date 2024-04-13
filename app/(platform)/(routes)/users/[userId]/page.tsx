import prisma from '@/lib/prisma';
import { Edit2Icon, User2Icon } from 'lucide-react';

const getUser = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};

const UserProfilePage = async ({ params }: { params: { userId: string } }) => {
  const user = await getUser(Number(params.userId));

  return (
    <div className="flex items-center justify-between p-3 md:rounded-xl md:p-6">
      <div className="flex w-full items-center justify-between md:px-6">
        <div className="flex items-center gap-3 md:gap-6">
          <div className="rounded-full bg-zinc-800">
            <User2Icon className="h-16 w-16 p-4 text-neutral-300 md:h-32 md:w-32 md:p-8" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-semibold text-zinc-300 md:text-3xl">
              {user?.firstName} {user?.lastName}
            </h1>

            <h2 className="text-base font-semibold text-zinc-500 md:text-lg">
              @{user?.username}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-zinc-400 md:text-base">
          <Edit2Icon className="h-4 w-4" /> Edit Profile
        </div>
      </div>

      {/* TODO: Add users posts */}
      <div></div>
    </div>
  );
};

export default UserProfilePage;
