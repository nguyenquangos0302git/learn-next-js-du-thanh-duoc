import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-[700px] h-[700px] bg-red-300">
        {/* <Image
          src={'/next.svg'}
          alt="test"
          width={500}
          height={500}
        /> */}
        <Image
          src={'https://images.pexels.com/photos/31237847/pexels-photo-31237847/free-photo-of-vintage-tea-setting-with-book-and-flowers.jpeg'}
          alt="test"
          width={200}
          height={200}
          quality={75}
        />
      </div>
    </div>
  );
}
