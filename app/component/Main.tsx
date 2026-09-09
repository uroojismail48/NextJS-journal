import Image from 'next/image';
import pic from '../assets/pic.png';

function Main() {
  return (
    <div className="w-full h-full flex ">


      <div className="w-full h-153 flex justify-end items-end">
        <Image src={pic} className="object-contain" alt="Main section image" />
      </div>
    </div>
  );
}

export default Main;