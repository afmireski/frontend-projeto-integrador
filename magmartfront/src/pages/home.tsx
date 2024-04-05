import Image from "next/image";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
      <div className= "containerHome ">
      <div className="header">
        <h1>helo!!</h1> 
      </div>
        <Image 
        src="/Firepals.png" 
        alt= "background image"
        className="background" 
        // width={1000} 
        // height={700}
        fill={true}
        />
        
      </div>
    </main>
  );
}
