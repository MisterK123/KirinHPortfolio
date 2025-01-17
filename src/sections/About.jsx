import React from 'react'

const About = () => {
    return (
        <section className="c-space my-5">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/kirinpfp5.PNG" alt="Kirin's pfp"
                             className="w-full sm-h-[276] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Hi, I&#39;m Kirin</p>
                            <p className="grid-subtext">A Y13 student currently studying Computer Science, Maths, and
                                Physics</p>
                        </div>
                    </div>

                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2-5.png" alt="Passions img" className="w-full sm-h-[276] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">My Passions</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/" alt="Passions img" className="w-full sm-h-[276] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">My Skills</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/" alt="Passions img" className="w-full sm-h-[276] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">test</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
