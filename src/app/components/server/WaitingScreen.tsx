import Image from "next/image";

export default function WaitingScreen() {
  return (
    <div className="waiting">
      <p className="waiting-text">We Art Your Designer</p>
      <div className="waiting-media">
        <Image src="./logo-mtruck.svg" alt="" width={200} height={100} />
      </div>
    </div>
  );
}