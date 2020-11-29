import {useState} from 'react';

import {Button} from 'reactstrap';

export function NewPostPage(props) {

   const [text, setText] = useState('')
   const [date, setDate] = useState('2020-11-27')

   //control input handler
   const handleChange = (event) => {
      if (event.target.type === "text") {
         setText(event.target.value)
      } else {
         setDate(event.target.value)
      }
   }

   //click event handler
   const handleClick = (event) => {
      event.preventDefault();
      props.postCallback(text, date); //call the passed in function
   }

   return (
      <form>
         <input type="date"
            className="form-control"
            onChange={handleChange}
            value={date}
         />
         <input
            className="form-control mb-3"
            placeholder="What did you do today?"
            onChange={handleChange}
            value={text}
         />
         <Button color="danger" className="mb-3" onClick={handleClick}>
            Post!
        </Button>
      </form>
   );
}

export function AboutPage() {
   return (
      <div>
         <h2>About</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, amet cumque. Quasi esse facilis quisquam recusandae quam deleniti suscipit, libero dolore tenetur dignissimos expedita neque repellendus accusantium mollitia, dicta id.</p>
      </div>
   );
}

export function WelcomePage() {
   return <h2>Welcome to my blog!</h2>
}
export function ErrorPage() {
   return <p className="alert alert-danger">No such page found</p>
}