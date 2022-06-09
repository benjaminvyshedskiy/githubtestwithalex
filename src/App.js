//import Mytable from "./components/table"
import Header from "./components/Header"
import Table from "react-bootstrap/Table"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react"


function App() {
  const [firstnum, setCounter] = useState(0);
  console.log(firstnum)
  const next = () => setCounter(firstnum + 50);
  let previous = () => setCounter(firstnum - 50);
  if(firstnum<=0) {
    previous = () => setCounter(0);
  }
  var nums1 = []
  var nums2 = []
  var nums3 = []
  var rows = [];
  
  for (var i=0; i<500;i++){
    nums1.push(i+1)
    nums2.push(Math.floor(Math.random()*500))
    nums3.push(Math.floor(Math.random()*500))

    
  }

  const Mytable = ({firstnum, lastnum}) => {

    for (var i = firstnum; i < lastnum; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      rows.push(<tr><td>{nums1[i]}</td><td>{nums2[i]}</td><td>{nums3[i]}</td></tr>);
    }
    return (
      <Table striped bordered hover >
    <thead>
      <tr>
        <th>row 1</th>
        <th>row 2</th>
        <th>row 3</th>

      </tr>
    </thead>
    <tbody>
    {rows}
    </tbody>
  </Table>
    )
  }

  return (

    <div className="App">

     <Header next={next} previous={previous}/>
     <Mytable firstnum = {firstnum} lastnum = {firstnum+50}/>
     
     

    </div>
  );
}

export default App;
