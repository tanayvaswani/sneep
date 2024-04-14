'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LoaderIcon } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
  description: z.string().min(1).max(200),
  code: z.string().min(3, {
    message: 'Instructions required atleast 3 characters!',
  }),
});

// TODO: SHIFT THIS LOGIC TO SERVER SIDE
const NewPost = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      description: '',
      code: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    try {
      await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify(values),
      }).then(() => setOpen(false));

      // TODO: close dialog after submission

      router.refresh();
    } catch (error) {
      console.log('client side error', error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>New Post</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className="flex w-full flex-col items-center justify-center">
          <DialogTitle className="space-y-1 text-center">
            <div className="text-base text-zinc-200 md:text-xl">
              Create New Post
            </div>
            <div className="text-sm text-zinc-400 md:text-base">
              Fill all the details below to create a post
            </div>
          </DialogTitle>
        </DialogHeader>

        <DialogDescription className="flex w-full flex-col items-center justify-center pt-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-4"
            >
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>

                    <FormControl>
                      <Input className="bg-zinc-900" {...field} />
                    </FormControl>

                    <FormDescription>
                      Enter a description for your next post.
                    </FormDescription>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Code</FormLabel>

                    <FormControl>
                      <Textarea rows={15} className="bg-zinc-900" {...field} />
                    </FormControl>

                    <FormDescription>
                      Write/paste your code here.
                    </FormDescription>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                {isLoading ? (
                  <LoaderIcon className="h-5 w-5 animate-spin" />
                ) : (
                  'Post'
                )}
              </Button>
            </form>
          </Form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default NewPost;
