import React, { useState } from 'react'
import CountUp from 'react-countup'
import './Counterup.css'
import ScrollTrigger from 'react-scroll-trigger'


const Counterup = () => {
    const [counterStart, setCounterStart] = useState(false)

    return (
        <ScrollTrigger onEnter={() => setCounterStart(true)} onExit={() => setCounterStart(false)} >
                <div className='counter'>
                <div className='h1'>
                    <h1 className="h1">
                        + {counterStart && <CountUp start={0} end={3000} duration={3} delay={0} />}
                    </h1>
                    < h3 className='h3'>Client Responses</h3>
                </div>
                <div className='resp'>
                    <h1 className="h1">
                      + {counterStart && <CountUp start={0} end={1000} duration={3} delay={0} />}
                    </h1>
                    < h3 className='h3'>Employees</h3>                   
                </div>
                <div>
                    <h1 className="h1">
                        + {counterStart && <CountUp start={2000} end={6000} duration={3} delay={0} />}
                    </h1>
                    < h3 className='h3'>Total Employees</h3>
                </div>
                <div className='resp'>
                    <h1 className="h1">
                        + {counterStart && <CountUp start={0} end={4000} duration={3} delay={0} />}
                    </h1>
                    < h3 className='h3'>Client Responses</h3>
                </div>
        </div>
            </ScrollTrigger>
    )
}

export default Counterup
