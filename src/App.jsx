import { Quiz } from "./Quiz"
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div style={{ backgroundImage: `url(https://cdn.dribbble.com/users/70529/screenshots/2377867/media/ce428c8300290c1e067b24619fb06f9f.png)`, backgroundSize: 'cover', backgroundPosition: '' }}
    className="  overflow-hidden h-screen  sticky" >
<Toaster/>
     <Quiz/>
    </div>
  )
}

export default App
