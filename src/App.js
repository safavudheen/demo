
import {Firebase} from './firebase/config'

function App() {
  return (
    <div className="App">
<h1>hello worldnpmc   </h1>
<button onClick={()=>{
 Firebase.firestore().collection("name").get().then(snapshot=>{
   snapshot.forEach((obj)=>{console.log(obj.data(),obj.id)  
   })
 })

}} > [] click mE]</button>



<button onClick={()=>{
 Firebase.firestore().collection("name").add({
   name:'oneplus',price:2000
  } )} }
 >  [click mE to upload]</button>





<div>
<button onClick={()=>{
 Firebase.firestore().collection("name").doc('Jbmdook3xFcZ9FRvH68y').delete().then(()=>{
   console.log("delete done")
 })
}}>delete done</button>
</div>

<div>
 <button onClick={()=>{
 Firebase.firestore().collection("name").doc('GwvnFukM1KF8hO62UY4k').set({
  name:'updated xiomi'
 }).then(()=>{console.log("updated done")})}}>update done</button>
</div>



<div>
<button onClick={()=>{    
Firebase.auth().createUserWithEmailAndPassword('safavudheen@gmail.com','123456')
.then((userCredential)=> {
  // Signed in
  var user = userCredential.user;
  // ...
  Firebase.firestore().collection('name').get().then((snap)=>
    {console.log(snap) })
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
})
}}
> sighn up </button>



 

</div>
    </div>

    
  );
}

export default App;
