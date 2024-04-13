import Navbar from '@/components/navbar';

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="pt-16 md:mx-auto md:max-w-screen-xl">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default PlatformLayout;
