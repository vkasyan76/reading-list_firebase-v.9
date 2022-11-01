// import { useState, useEffect } from 'react'
// import { collection, getDocs } from 'firebase/firestore'
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import { useCollection } from '../hooks/useCollection'

// import { db } from '../firebase/config'

export default function Home() {
  const { documents: books } = useCollection('books')
  // const [books, setBooks] = useState(null)
  // // const [books, setBooks] = useState([
  // //   // { title: 'the name of the wind', id: 1 },
  // //   // { title: 'the dragon reborn', id: 2 },
  // //   // { title: 'the final empire', id: 3 },
  // //   // { title: 'the way of kings', id: 4 }])

  // useEffect(() => {
  //   const ref = collection(db, 'books')
  //   getDocs(ref).then((snapshot) => {
  //     let results = []
  //     snapshot.docs.forEach((doc) => {
  //       results.push({ id: doc.id, ...doc.data() })
  //     })
  //     setBooks(results)
  //   })
  // }, [])

  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  )
}
