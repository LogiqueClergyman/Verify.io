import React from 'react';

function About() {
    return (


        <div className="bg-gradient-to-r from-green-800 to-black  min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold mb-8">About </h1>

                <div className="md:flex md:space-x-8">
                    <div className="md:w-1/3">
                        <img src="https://i.pinimg.com/originals/84/28/be/8428bebccf202f8abd9548ab23c2132a.jpg" alt="Team member" className=" object-cover h-100 w-300 rounded-lg mx-auto mb-12" />

                        <h2 className="text-4xl font-bold mb-2 ">SPAM VALIDATOR</h2>
                        <p className="text-gray-700"></p>
                    </div>

                    <div className="md:w-2/3">
                        <p className="text-gray-300 mb-4 text-xl">
                        Spam validators are essential in today's digital landscape, where the prevalence of spam has increased significantly. By using these tools, individuals and organizations can protect themselves from the negative effects of spam, such as identity theft, financial loss, or data breaches. Additionally, spam validators can help improve the overall user experience by ensuring that users only receive relevant and valuable content.
                        </p>

                        <p className="text-gray-300 mb-4 text-xl">
                        Spam validators use various algorithms and criteria to identify spam content, such as analyzing the sender's reputation, the message's content, and the frequency of similar messages being sent. These validators can be used in various contexts, such as email, social media, or website comments, to help filter out unwanted messages and prevent them from reaching the intended audience.
                        </p>

                        <p className="text-gray-300 mb-4 text-xl">
                        Overall, spam validators play an important role in keeping our digital communication channels safe and free from unwanted messages. By using these tools, individuals and organizations can protect themselves from the negative effects of spam and improve their online experience.
                        </p>
                    </div>
                </div>

                <div className="mt-12 md:mt-16 lg:mt-20">
                    <h2 className="text-3xl font-bold mb-4">DETACTION</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        <div className=" rounded-lg shadow-md p-8">
                            <img src="https://th.bing.com/th/id/OIP.FtO8VpLXXomiTyaiiYn1mwHaDt?w=299&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Team member" className=" object-cover h-60 w-200 rounded-lg mx-auto mb-4" />

                            <h3 className="text-xl text-gray-400 font-bold mb-2">Phone Spams</h3>
                            <p className="text-white">Phone spam has become increasingly prevalent in recent years, with many people receiving multiple robocalls each day. These calls are often made using spoofed phone numbers, which can make it difficult to identify the source of the call and block future calls from the same number.</p>
                        </div>


                        <div className=" rounded-lg shadow-md p-8">
                            <img src="https://www.secure-od.com/wp-content/uploads/2021/02/Tecniche-spammer-email.jpg" alt="Team member" className=" object-cover h-60 w-200 rounded-lg mx-auto mb-4" />

                            <h3 className="text-xl  text-gray-400 font-bold mb-2">Email-Spams</h3>
                            <p className="text-white">Email spam refers to unsolicited and unwanted emails that are sent to a large number of recipients. These emails are typically sent for commercial or malicious purposes, such as selling fake products, phishing for personal information, or spreading malware.</p>
                        </div>
                        <div className=" rounded-lg shadow-md p-8">
                            <img src="https://th.bing.com/th/id/R.543c5c0b1d4e4d14bb14eb1a5aa03a45?rik=gF7xzx78t8g0Eg&riu=http%3a%2f%2fwww.dailynews.lk%2fsites%2fdefault%2ffiles%2fstyles%2fnode-detail%2fpublic%2fnews%2f2018%2f12%2f11%2fwebsites.jpg%3fitok%3dHkPiSQKA&ehk=seaxt8AiO76mD8ibA%2fQLT4ZskY1PSpm1immFgyVSYnE%3d&risl=&pid=ImgRaw&r=0" alt="Team member" className="object-cover h-60 w-200 rounded-lg mx-auto mb-4" />

                            <h3 className="text-xl  text-gray-400 font-bold mb-2">URL</h3>
                            <p className="text-white">URL spam refers to the practice of using deceptive or misleading URLs in order to trick users into clicking on them, often for the purpose of phishing or spreading malware.</p>
                        </div>
                        <div className=" rounded-lg shadow-md p-8">
                            <img src="https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy8zNzk1M2Q4ZTFjNTRkZTNlOGI0YWQ3MWY4MjdiMDk5ZC5qcGc=.jpg" alt="Team member" className="object-cover h-60 w-200 rounded-lg mx-auto mb-4" />

                            <h3 className="text-xl text-gray-400 font-bold mb-2">Bitcoin</h3>
                            <p className="text-white">Bitcoin spam can take a number of different forms, including phishing emails that trick users into giving away their private keys or personal information, fake ICO (Initial Coin Offering) scams, and Ponzi schemes that promise high returns on investment but ultimately collapse and leave investors with nothing.</p>
                        </div>
                      
                    </div>
                </div>
            </div>
            <footer className="bg-black py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="text-gray-600 font-medium">
            <p>About Us</p>
            <p className="mt-2">[Company Name] is a [brief description of the company's mission or purpose]. Our team is dedicated to [brief description of what the company does]. We strive to [brief description of the company's values or goals].</p>
          </div>
          <div className="text-gray-600 font-medium">
            <p>Contact Us</p>
            <p className="mt-2">[Company Address]</p>
            <p>[Phone Number]</p>
            <p>[Email Address]</p>
            <p>[Social Media Handles]</p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-gray-500 text-sm">Copyright © [Year] [Company Name]. All rights reserved.</p>
        </div>
      </div>
    </footer>
        </div>
    );
}
export default About;