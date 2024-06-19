import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      Trang chủ
      <div>
        <Image src="https://i.pravatar.cc?u=1" crossOrigin="anonymous" width={200} height={200} quanlity={75} alt="..."  />
      </div>
      <button className="btn btn-success">Click</button>
      <Image src={'/img/img.jpg'} crossOrigin="anonymous" width={200} height={200} quanlity={75} alt="..." />
      
    </main>
  );
}

