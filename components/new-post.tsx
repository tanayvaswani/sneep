'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const NewPost = () => {
  return (
    <Dialog>
      <DialogTrigger>New Post</DialogTrigger>

      <DialogContent>
        <DialogHeader className='flex flex-col items-center justify-center w-full'>
          <DialogTitle>Create new post</DialogTitle>

          <DialogDescription className="flex w-full flex-col items-center justify-center gap-4 pt-6">
            <div className="w-full space-y-1">
              <Label>Description</Label>
              <Input className="bg-zinc-900" />
            </div>

            <div className="w-full space-y-1">
              <Label>Code</Label>
              <Input className="bg-zinc-900"  />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default NewPost;
