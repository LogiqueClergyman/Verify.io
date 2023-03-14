import React from "react";
import Abhi from "../team/Abhi_copy.jpg"


function About() {
  return (
    <div>
      <div className="bg-gradient-to-tl from-green-900  to-black min-h-screen">
        <div className="max-w-7xl">
          <h1 className="text-4xl font-bold">About Us</h1>

          <div className="md:flex md:space-x-8">
            <div className="mx-10 md:w-1/3">
              <img
                src="https://via.placeholder.com/600x600"
                alt="Team member"
                className="rounded-full mx-auto"
              />
            </div>
            <div className="md:w-2/3 mt-16">
              <p className="text-white mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
                nisi in ipsum rutrum vulputate sed eu erat. Integer quis
                convallis est, a blandit justo. Donec rutrum dolor at quam
                elementum bibendum. In ac tincidunt nibh. Duis vitae felis
                neque. Nullam id velit luctus, tempor urna vel, convallis
                turpis. Sed malesuada tincidunt tellus, eu gravida odio
                convallis quis.
              </p>

              <p className="text-white mb-4">
                Aliquam sed diam eu diam placerat facilisis. Sed non neque non
                diam tempus facilisis a at leo. Aliquam ut risus tellus. Integer
                rhoncus, sem ut lobortis bibendum, ex nisi tempor turpis, sit
                amet elementum risus mauris et erat. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas.
              </p>

              <p className="text-white mb-4">
                In vel enim quis velit euismod dignissim. Suspendisse eget
                bibendum justo, vel fringilla augue. Suspendisse eu augue
                turpis. Donec nec dolor varius, imperdiet est vel, blandit
                lectus. Curabitur pellentesque libero id lorem sodales, id
                semper mi rhoncus. Vestibulum quis est vestibulum, dignissim
                libero quis, fringilla justo.
              </p>
            </div>
          </div>
        </div>

        <div className="py-16 sm:py-16">
          <div className="">
            <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Meet our Team
                </h2>
                <p className="mt-6 text-lg leading-8 text-white">
                  Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
                  vitae elementum enim vitae ullamcorper suspendisse.
                </p>
              </div>
              <ul
                role="list"
                className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2 ml-8"
              >
                <li>
                  <div className="flex items-center gap-x-6">
                    <img className="h-16 w-16 rounded-full" src={Abhi} alt="" />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-white">
                        Abhishek Kushwaha
                      </h3>
                      <p className="text-sm font-thin leading-6 text-white">
                        Back-End Dev & DB Management
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-x-6">
                    <img className="h-16 w-16 rounded-full" src={""} alt="" />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-white">
                        Aditya Vishwanathan
                      </h3>
                      <p className="text-sm font-thin leading-6 text-white">
                        Full-Stack Dev & Front-End Management
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-x-6">
                    <img className="h-16 w-16 rounded-full" src={""} alt="" />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-white">
                        Shobhit Upadhyay
                      </h3>
                      <p className="text-sm font-thin leading-6 text-white">
                        God himself is confused AND regretting
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-x-6">
                    <img className="h-16 w-16 rounded-full" src={""} alt="" />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-white">
                        Name here
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-white">
                        Description here
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-x-6">
                    <img className="h-16 w-16 rounded-full" src={""} alt="" />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-white">
                        Name here
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-white">
                        Description here
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-x-6">
                    <img className="h-16 w-16 rounded-full" src={""} alt="" />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-white">
                        Name here
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-white">
                        Description here
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
// <div className="bg-gradient-to-r from-green-800 to-black  min-h-screen">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <h1 className="text-4xl font-bold mb-8">About Us</h1>

//         <div className="md:flex md:space-x-8">
//             <div className="md:w-1/3">
//                 <img src="https://via.placeholder.com/600x600" alt="Team member" className="rounded-full mx-auto mb-4" />

//                 <h2 className="text-2xl font-bold mb-2">ABCD</h2>
//                 <p className="text-gray-700">LOL</p>
//             </div>

//             <div className="md:w-2/3">
//                 <p className="text-white mb-4">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nisi in ipsum rutrum vulputate sed eu erat. Integer quis convallis est, a blandit justo. Donec rutrum dolor at quam elementum bibendum. In ac tincidunt nibh. Duis vitae felis neque. Nullam id velit luctus, tempor urna vel, convallis turpis. Sed malesuada tincidunt tellus, eu gravida odio convallis quis.
//                 </p>

//                 <p className="text-white mb-4">
//                     Aliquam sed diam eu diam placerat facilisis. Sed non neque non diam tempus facilisis a at leo. Aliquam ut risus tellus. Integer rhoncus, sem ut lobortis bibendum, ex nisi tempor turpis, sit amet elementum risus mauris et erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
//                 </p>

//                 <p className="text-white mb-4">
//                     In vel enim quis velit euismod dignissim. Suspendisse eget bibendum justo, vel fringilla augue. Suspendisse eu augue turpis. Donec nec dolor varius, imperdiet est vel, blandit lectus. Curabitur pellentesque libero id lorem sodales, id semper mi rhoncus. Vestibulum quis est vestibulum, dignissim libero quis, fringilla justo.
//                 </p>
//             </div>
//         </div>

//         <div className="mt-12 md:mt-16 lg:mt-20">
//             <h2 className="text-3xl font-bold mb-4">Our Team</h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 <div className="bg-black rounded-lg shadow-md p-8">
//                     <img src="https://via.placeholder.com/400x400" alt="Team member" className="rounded-full mx-auto mb-4" />

//                     <h3 className="text-xl text-gray-400 font-bold mb-2">A</h3>
//                     <p className="text-white">WEB</p>
//                 </div>

//                 <div className="bg-black rounded-lg shadow-md p-8">
//                     <img src="https://via.placeholder.com/400x400" alt="Team member" className="rounded-full mx-auto mb-4" />

//                     <h3 className="text-xl  text-gray-400 font-bold mb-2">B</h3>
//                     <p className="text-white">WEB</p>
//                 </div>
//                 <div className="bg-black rounded-lg shadow-md p-8">
//                     <img src="https://via.placeholder.com/400x400" alt="Team member" className="rounded-full mx-auto mb-4" />

//                     <h3 className="text-xl  text-gray-400 font-bold mb-2">C</h3>
//                     <p className="text-white">WEB</p>
//                 </div>
//                 <div className="bg-black rounded-lg shadow-md p-8">
//                     <img src="https://via.placeholder.com/400x400" alt="Team member" className="rounded-full mx-auto mb-4" />

//                     <h3 className="text-xl text-gray-400 font-bold mb-2">D</h3>
//                     <p className="text-white">WEB</p>
//                 </div>
//                 <div className="bg-black rounded-lg shadow-md p-8">
//                     <img src="https://via.placeholder.com/400x400" alt="Team member" className="rounded-full mx-auto mb-4" />

//                     <h3 className="text-xl text-gray-400 font-bold mb-2">E</h3>
//                     <p className="text-white">WEB</p>
//                 </div>
//                 <div className="bg-black rounded-lg shadow-md p-8">
//                     <img src="https://via.placeholder.com/400x400" alt="Team member" className="rounded-full mx-auto mb-4" />

//                     <h3 className="text-xl text-gray-400 font-bold mb-2">F</h3>
//                     <p className="text-white">WEB</p>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
