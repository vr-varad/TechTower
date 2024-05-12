import { useEffect, useState } from 'react';
import './App.css';
import {Auth} from './components/auth'
import {db, auth, storage} from './config/firebase'
import {getDocs,collection, addDoc, deleteDoc, doc, updateDoc} from 'firebase/firestore'
import { ref, uploadBytes } from 'firebase/storage';
function App() {
  const [movies,setMovies] = useState([]);
  const movieCollectionRef = collection(db,'movies')
  const [newTitle,setNewTitle] = useState('') 
  const [newReleaseYear,setNewReleaseYear] = useState('')
  const [newOscar,setNewOscar] = useState(false)
  const [file, setFile] = useState(null)

  const getMovies = async () => {
    try {
      const movieList = await getDocs(movieCollectionRef)
      const data = movieList.docs.map((doc)=>({...doc.data(), id:doc.id}))
      setMovies(data)
    } catch (error) {
      console.log(error)
    }
  
  }

  useEffect(() => { 
    getMovies();
  },[])
  
  const addMovie = async () => {
    try {
      await addDoc(movieCollectionRef, {title:newTitle, releaseYear:newReleaseYear, oscar:newOscar, userId : auth?.currentUser?.uid})
      setNewTitle('')
      setNewReleaseYear('')
      setNewOscar(false)
      getMovies()
    } catch (error) {
      console.log(error)
    }
  }

  const deleteMovie = async (e)=>{
    const movieId = e.target.id
    const movieDoc = doc(db, 'movies', movieId)
    try {
      await deleteDoc(movieDoc)
      getMovies()
    } catch (error) {
      console.log(error)
    }
  }
  const editTitle= async(e)=>{
    const newTitle = prompt("Enter new title")
    const movieId = e.target.id
    const movieDoc = doc(db, 'movies', movieId)
    try {
      await updateDoc(movieDoc, {title:newTitle})
      getMovies()
    } catch (error) {
      console.log(error)
    }
  }

  const fileUpload = async()=>{
    if(!file) return;
    const fileRef = ref(storage,`projectFirts/${file.name}`);
    try {
      await uploadBytes(fileRef, file)
      alert('File Uploaded')
      setFile(null)

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="App">
      <Auth></Auth>
      <h1>Add Movie</h1>
      <input type="text" placeholder="Enter Title" onChange={(e)=>setNewTitle(e.target.value)} value={newTitle}/>
      <input type="number" placeholder="Enter Release Year" onChange={(e)=>setNewReleaseYear(Number(e.target.value))} value={newReleaseYear}/>
      <div style={{display:"flex", flexDirection:"row", maxWidth:"150px" , margin: "auto", marginBottom:"20px"}}>
        <label>Recieved Oscar</label>
        <input type="checkbox" checked={newOscar} id='oscar' onChange={(e)=>setNewOscar(e.target.checked)} value={newOscar}/>
      </div>
      <button onClick={addMovie}>Add Movie</button>
      <div style={{marginBottom: "30px"}}>
        {movies.map((movie)=>(
          <div key={movie.id}>
            <h1 style={{color: movie.oscar?"blue":"red"}}>{movie.title}</h1>
            <p>Released in Year : {movie.releaseYear}</p>
            <p>Recieved Oscar : {movie.oscar?"Yes":"No"}</p>
            <button id={movie.id} onClick={deleteMovie}>Delete</button>
            <button id={movie.id} onClick={editTitle}>Edit Title</button>
          </div>
        ))}
      </div>
      <div>
        <input type='file' onChange={e=>setFile(e.target.files[0])}/>
        <button onClick={fileUpload}>Upload</button>
      </div>
    </div>
  );
}

export default App;
