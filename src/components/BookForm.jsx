import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuthContext } from '../hooks/useAuthContext'

export default function BookForm() {
  const [newBook, setNewBook] = useState('')

  const { user } = useAuthContext()

  const handleSubmit = async (e) => {
    const ref = collection(db, 'books')
    e.preventDefault()
    // console.log(newBook)
    await addDoc(ref, {
      title: newBook,
      uid: user.uid,
    })

    setNewBook('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input
          required
          type="text"
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <button>Add</button>
    </form>
  )
}
