import Navbar from '@/components/navbar';

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="pt-24">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default PlatformLayout;
