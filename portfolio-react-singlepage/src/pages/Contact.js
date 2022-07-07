function Contact() {

   // Contact form with option to provide mandatory fields name, email and message.
   // Includes appropraite validations for the input.

    return (
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w">
      <form className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="form-group mb-6 row-span-1">
          
          <input type="text" required className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="username"
            placeholder="name"/>
        </div>

        <div className="form-group mb-6 row-span-1">
         
          <input type="email" className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
            aria-describedby="emailHelp" required placeholder="Enter email"/>
       
        </div>
        <button type="submit" className="
          row-span-1
          
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">Submit</button>  
       
    
    <textarea
      className=" row-span-3
        col-span-5
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      id="msgbox"
      required
      rows="5"
      placeholder="Your message"></textarea>

       
      </form>
    </div>
  );
}

export default Contact;