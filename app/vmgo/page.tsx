'use client'
import Ribbon from '../../components/Ribbon';
import { brandAbout, brandMission, brandVision, vmgoGoals, vmgoObjectives } from '../data/brandContent';

const sectionImageClass = 'h-40 w-40 shrink-0 object-contain';

export default function Vmgo() {

  return (
    <div className="min-h-screen ">
      

        <Ribbon name="Vission, Mission, Goals and Objectives" showfont={false}/>

        {/* Into section */}
        <section className='max-w-7xl mx-auto py-8'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-12 place-content-center place-items-center'>
                <div className='flex flex-col justify-center items-center gap-3'>
                  <img
                    src="/vmgo/vision.svg"
                    alt="Vision"
                    className="h-24 w-24 object-contain"
                  />
                  <p>Vision</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                  <img
                    src="/vmgo/mission.svg"
                    alt="Mission"
                    className="h-24 w-24 object-contain"
                  />
                  <p>Mission</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                  <img
                    src="/vmgo/goals.svg"
                    alt="Goals"
                    className="h-24 w-24 object-contain"
                  />
                  <p>Goals</p> 
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                  <img
                    src="/vmgo/objectives.svg"
                    alt="Objectives"
                    className="h-24 w-24 object-contain"
                  /> 
                  <p>Objectives</p>    
                </div> 
            </div>
        </section>



        {/* Vision Section */}
        <section id="vision" className="flex justify-between gap-24 mb-12 py-8 max-w-5xl mx-auto">
          <div className="hidden md:flex items-center mb-6 ">
              <img src="/vmgo/vision.svg" alt="Vision illustration" className={sectionImageClass} />
          </div>
          <div className="p-8 md:p-16 card space-y-4 max-w-3xl rounded-xl">
            <h2 className="text-3xl font-bold text">Vision</h2>
            <p className=" text-md leading-relaxed mb-4">
              {brandVision}
            </p>
            <p className=" text-md leading-relaxed">
              {brandAbout.expansion}
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="flex justify-between gap-24 mb-12  max-w-5xl mx-auto">
          <div className="p-8 md:p-16 bg-teal-700 text-white space-y-4 max-w-3xl rounded-xl ">
            <h2 className="text-3xl font-bold ">Mission</h2>
            <p className="text-md leading-relaxed ">
              {brandMission}
            </p>
            <p className="text-md leading-relaxed pt-2 opacity-95">
              {brandAbout.intro}
            </p>
          </div>
          <div className="hidden md:flex items-center mb-6">
              <img src="/vmgo/mission.svg" alt="Mission illustration" className={sectionImageClass} />
          </div>
        </section>

        {/* Goals Section */}
        <section id="goals" className="flex justify-between gap-24 py-8 max-w-5xl mx-auto">
          <div className="hidden md:flex items-center mb-6">
              <img src="/vmgo/goals.svg" alt="Goals illustration" className={sectionImageClass} />
          </div>
          <div className="p-8 md:p-16 space-y-4 card rounded-xl">
            <h2 className="text-3xl font-bold text">Our Goals</h2>
            {vmgoGoals.map((goal, index) => (
              <div key={index} className="flex  items-center gap-3 pl-4">
                <ul className='list-disc'><li>{goal}</li></ul>
              </div>
            ))}
          </div>
        </section>

        {/* Objectives Section */}
        <section id="objectives" className="flex justify-between gap-24 mb-12 py-8 max-w-5xl mx-auto">
          <div className="p-8 md:p-16 space-y-4 text-white bg-teal-700 max-w-3xl rounded-xl">
            <h2 className="text-3xl font-bold">Objectives</h2>
            {vmgoObjectives.map((objective, index) => (
              <div key={index} className="flex items-center gap-3 pl-4">
                <ul className='list-disc'><li>{objective}</li></ul>
              </div>
            ))}
          </div>
          <div className="hidden md:flex items-center mb-6">
              <img src="/vmgo/objectives.svg" alt="Objectives illustration" className={sectionImageClass} />
          </div>
        </section>
    </div>
  );
}