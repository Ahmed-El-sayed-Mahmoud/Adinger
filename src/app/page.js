export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      <div className="text-center p-8 bg-white bg-opacity-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">NOTHING TO SEE HERE</h1>
        <p className="text-lg mb-6">Please proceed to our views section</p>
        <a
          href="/views"
          className="bg-white text-purple-500 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-100 transition-all"
        >
          CLICK ME TO GO TO /views
        </a>
      </div>
    </div>
  );
}
