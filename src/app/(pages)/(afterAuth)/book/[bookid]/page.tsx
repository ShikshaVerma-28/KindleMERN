"use client";
import React from 'react'
import Navbar from '@/components/Navbar'
import styles from './Book.module.css'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
const page = () => {
  const { bookid } = useParams();
  const router = useRouter()
  const book = {
    id: bookid,
    image: "https://picsum.photos/600/400",
    title: "The GFG Book",
    author: "Harshal Jain",
    description: "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus facilis rem corporis, quasi vitae id illo nam cupiditate corrupti adipisci reprehenderit, vel eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae blanditiis explicabo temporibus sint nostrum dignissimos ipsam repellendus. Vel fugiat, recusandae voluptatem repellendus omnis culpa quidem iure quos fugit expedita eius eum maxime neque ipsa repudiandae. Veniam saepe voluptas laboriosam, quaerat impedit ad. Eum, nisi veritatis? Aliquam iure deleniti.</p> <br> <p>Pariatur architecto reiciendis ex eveniet dolor deserunt dolore, libero id quam necessitatibus provident inventore, delectus saepe ipsam, cum rerum laborum quia cumque. . Eligendi asperiores blanditiis dolor ratione nobis nostrum magnam ad dolorum repudiandae possimus amet reprehenderit, odio vitae minus, quam dolore nisi sint praesentium excepturi recusandae quod, porro fugiat. Minus animi rem, aspernatur sequi dignissimos suscipit id quo laboriosam in eveniet, deserunt est perspiciatis laudantium vitae soluta tenetur praesentium facilis?</p>",
    price: "$29.99",
    amazonLink: "https://www.amazon.com/dp/B09XYZ1234",
  }

  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={book.image} alt={book.title} className={styles.bookImage} />
        </div>
        <div className={styles.details}>
          <h1 className={styles.bookTitle}>{book.title}</h1>
          <p className={styles.bookAuthor}>by {book.author}</p>
          <div className={styles.bookDescription} dangerouslySetInnerHTML={{ __html: book.description }}>

          </div>
          <p className={styles.bookPrice}>{book.price}</p>
          <button className={styles.purchaseButton} onClick={() => {
            router.push(`/read/${bookid}`)
          }}
          >Start Reading</button>
          {/* <button className={styles.purchaseButton}>Buy on Amazon</button> */}
        </div>
      </div>

    </div>
  )
}

export default page