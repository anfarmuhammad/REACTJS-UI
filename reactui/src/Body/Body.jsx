import React from 'react'
import { Button } from 'react-bootstrap';

function Body() {
  return (
    <div>
        <div className="w-full h-auto bg-black flex flex-col md:flex-row text-white">
  <div className="w-full md:w-1/2 h-auto flex flex-col justify-center px-6 md:px-24 py-8">
    <button className="w-[250px] h-[50px] mb-6">Designers for hire</button>
    <h1 className="text-3xl md:text-4xl font-bold mb-4">
      Meet faster <br />
      more secure <br />
      web.
    </h1>
    <p className="text-sm md:text-base mb-6">
      Let us boost your business potential with the <br />
      most recent and inventive advances
    </p>
    <Button className="w-[150px] h-[50px]" variant="primary">
      Work with us!
    </Button>
  </div>
  <div className="w-full md:w-1/2 h-auto">
    <img
      className="w-full h-full object-cover"
      src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKuOZvwpFwKijZjh_tkVRCBuaf0y76O0kwKehqJFZiXwi2Pldd"
      alt=""
    />
  </div>
</div>

      
    </div>
  )
}
export default Body
