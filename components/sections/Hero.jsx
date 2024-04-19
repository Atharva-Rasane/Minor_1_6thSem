import React from 'react';
import heroimg from "../../public/img/curved-images/curved6.jpg";

const Hero = () => {
  return (
    <main className="mt-0 transition-all duration-200 ease-soft-in-out">
      <section>
        <div className="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen shadow-lg">
          <div className="container z-10">
            <div className="flex flex-wrap mt-0 -mx-3">
              <div className="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-full lg:w-1/2">
                <div className="relative flex flex-col min-w-0 mt-32 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                  <div className="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
                    <h2 className="relative z-10 font-bold text-white text-6xl md:text-5xl lg:text-6xl text-center md:text-left lg:text-center">Welcome to FoodConnect, where kindness meets action</h2>
                    <h3 className="relative z-10 text-gray-300 text-lg md:text-xl lg:text-2xl text-center md:text-left lg:text-center">Empowering Communities, Nourishing Lives</h3>
                  </div>
                  <div className="flex-auto p-6">
                    <div className="flex justify-center">
                      <button className="relative z-10 px-8 py-3 bg-lime-500 text-white font-semibold rounded-lg hover:bg-lime-600">Sign In</button>
                    </div>
                  </div>
                  <div className="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
                    <p className="relative z-10 mx-auto mb-6 leading-normal text-sm text-gray-300">
                      Don't have an account?
                      <a href="../pages/sign-up.html" className="font-semibold text-lime-500 hover:text-lime-600">Sign up</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-0 lg:w-1/2">
                <div className=" top-0 w-full h-full -mr-16  rounded-bl-xl md:block">
                  <div className="absolute inset-0 z-0 h-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.3)), url('/images/kids-having-fun-as-boy-scouts.jpg')`}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
