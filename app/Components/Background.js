import Image from 'next/image';

const BackgroundSection = () => {
  return (
    <div className="relative w-full h-full min-h-screen  " >
      <Image
        src="/assets/techcomputer.jpeg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
   
    </div>
  );
};

export default BackgroundSection;
