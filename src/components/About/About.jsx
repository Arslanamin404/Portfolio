import admin from "../../assets/admin.jpg";

export const About = () => {
  return (
    <div id="About" className="text-white md:flex items-center justify-center bg-black shadow-xl mx-0 md:mx-28 bg-opacity-30 rounded-lg p-6 md:p-12">
      <div>
        <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-center uppercase">Who Am I?</h2>
        <div className="flex flex-col md:flex-row items-center md:gap-20">
          <div className="mb-6 md:mb-0">
            <img
              src={admin}
              alt="Arsalan Rather"
              className="w-full md:w-auto md:h-72 rounded-md"
            />
          </div>
          <div className="md:max-w-lg  md:text-left">
            <p className="leading-relaxed md:text-xl">
              I am a BCA student from Srinagar, Jammu & Kashmir, with a focus on
              web development and software engineering. I'm passionate about
              learning new technologies and creating projects that merge
              creativity with functionality. Over the years, I have developed
              skills in front-end and back-end technologies, including ReactJS,
              Redux, Tailwind CSS, and Python. Currently, I'm sharpening my
              skills and exploring technologies like the MERN Stack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
