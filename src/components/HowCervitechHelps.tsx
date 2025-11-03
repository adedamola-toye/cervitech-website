import Progress from '../assets/How Cervitech Helps Pics/Progress.png'
import Exercise from '../assets/How Cervitech Helps Pics/Exercise.png'
import Goals from '../assets/How Cervitech Helps Pics/Goals.png'
import Response from '../assets/How Cervitech Helps Pics/Response.png'
import "../styles/HowCervitechHelps.css"

function HowCervitechHelps(){
    return(
        <div className='how-helps'>
            <div className="heading">
                <h1><span>How</span> does Cervitech help you?</h1>
                <p>Cervitech offers cutting-edge digital technology to help you prevent, correct, and manage abnormal posture and spinal pain</p>
            </div>
            <div className='features'>
                <div className="feature progress">
                    <img src={Progress} alt="" />
                    <div className="feature-text">
                        <h1>Progress Charts</h1>
                        <p>Helps you show how far you have come and how to achieve your set goal</p>
                    </div>
                </div>

                <div className="feature exercise">
                    <div className="feature-text">
                        <h1>Exercises</h1>
                        <p>Provides step by step guides with animations to help prevent and correct neck posture</p>
                    </div>
                    <img src={Exercise} alt="" />
                </div>

                 <div className="feature goals">
                    <img src={Goals} alt="" />
                    <div className="feature-text">
                        <h1>Set Goals</h1>
                        <p>Allows you to plan ahead and set achievable goals that can work with your daily schedule</p>
                    </div>
                </div>

                <div className="feature response">
                    <div className="feature-text">
                        <h1>Response Rate</h1>
                        <p>Helps you to know how well you adjust to a better neck posture overtime</p>
                    </div>
                    <img src={Response} alt="" />
                </div>
            </div>
        </div>
    )
}


export default HowCervitechHelps