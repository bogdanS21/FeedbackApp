import React from 'react'
import { motion ,AnimatePresence} from 'framer-motion'
import propTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

export default function FeedbackList({feedback,handleDelete}) {
    if(!feedback ||  feedback.length=== 0){
        return <p>No feedback yet</p>
    }

    return (
        <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map((item)=>(
            <motion.div 
            key = {item.id}
            initial={{opacity:0}}
            animate={{opacity:2}}
            exit={{opacity:0}}

            >
                <FeedbackItem 
                    key={item.id}
                    item={item} 
                    handleDelete={handleDelete}/>
            </motion.div> 
            ))}
        </AnimatePresence>
        </div>
      )


//   return (
//     <div className='feedback-list'>
//         {feedback.map((item)=>(
//             <FeedbackItem 
//             key={item.id}
//             item={item} 
//             handleDelete={handleDelete}/>
//         ))}
//     </div>
//   )
}

FeedbackList.propTypes={
    feedback:propTypes.arrayOf(
        propTypes.shape({
            //id:propTypes.number.isRequired,
            //Fixed :Invalid prop `feedback[0].id` of type `string` supplied to `FeedbackList`, expected `number`.
            text: propTypes.string.isRequired,
            rating:propTypes.number.isRequired
        })
    )
}
