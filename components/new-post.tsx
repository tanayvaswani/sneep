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
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

// TODO: MAKE THIS A FORM
const NewPost = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>New Post</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className="flex w-full flex-col items-center justify-center">
          <DialogTitle className="space-y-1 text-center">
            <h1 className="text-base text-zinc-200 md:text-xl">Create New Post</h1>
            <p className="text-sm text-zinc-400 md:text-base">
              Fill all the details below to create a post
            </p>
          </DialogTitle>

          <DialogDescription className="flex w-full flex-col items-center justify-center gap-4 pt-6">
            <div className="w-full space-y-1">
              <Label>Description</Label>
              <Input className="bg-zinc-900" />
            </div>

            <div className="w-full space-y-1">
              <Label>Code</Label>
              <Textarea className="bg-zinc-900" rows={15} />
            </div>
          </DialogDescription>
        </DialogHeader>

        <Button>Post</Button>
      </DialogContent>
    </Dialog>
  );
};

export default NewPost;
