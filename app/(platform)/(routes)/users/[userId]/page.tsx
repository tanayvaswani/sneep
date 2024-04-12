import prisma from '@/lib/prisma';

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
    <div>
      <div>{user?.email}</div>
      <div>{user?.firstName}</div>
      <div>{user?.lastName}</div>
    </div>
  );
};

export default UserProfilePage;
