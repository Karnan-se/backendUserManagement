 export default function NotFound(){


    return(
        <>
        <div className="flex flex-col w-full h-screen justify-center items-center bg-[url('/assets/cartoon-background.jpg')] bg-cover">
  {/* Text Section */}
  <div className="text-center mb-10">
    <p className="text-6xl font-bold text-yellow-500">Oops!</p>
    <p className="text-2xl font-semibold text-white mt-4">We can’t seem to find the page you’re looking for.</p>
    <p className="text-xl text-white mt-2">Let’s head back and find our way!</p>
  </div>

  {/* GIF Section */}
  <div className="mb-10">
    <iframe 
      src="https://giphy.com/embed/h2MouomJFCpMfWVfUj" 
      width="480" 
      height="480" 
      style={{ border: 'none', pointerEvents: 'none' }} 
      className="giphy-embed" 
      allowFullScreen>
    </iframe>
  </div>

  {/* 404 Message */}
  <div className="text-center">
    <p className="text-4xl font-bold text-red-500">404</p>
    <p className="text-2xl font-semibold text-white mt-2">Page Not Found</p>
  </div>

  {/* Link to Home */}
  <div className="mt-8">
    <a 
      href="/" 
      className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300"
    >
      Take me home!
    </a>
  </div>
</div>
</>        
    )
}