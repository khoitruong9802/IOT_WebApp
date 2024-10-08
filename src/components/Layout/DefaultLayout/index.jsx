import Navbar from "../components/Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex justify-start">
      <Navbar />
      <div className="ml-44 w-full">
        {children}
      </div>
    </div>
  )
}

export default DefaultLayout;