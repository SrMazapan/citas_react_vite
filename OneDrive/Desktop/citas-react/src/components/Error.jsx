const Error = ({children}) => {
  return (
    <div className="bg-red-800 text-white text-center mb-3 uppercase rounded-md font-bold p-3">
        <p>{children}</p>       
    </div>
  )
}

export default Error
