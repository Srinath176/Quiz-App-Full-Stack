import { motion } from 'framer-motion';  

const AnimatedSection = ({ children }) => {  
  const variants = {  
    hidden: { opacity: 0, y: 50 },  
    visible: { opacity: 1, y: 0 },  
  };  

  return (  
    <motion.div  
      initial="hidden"  
      whileInView="visible"  
      variants={variants}  
      transition={{ duration: 0.8 }}  
      style={{ marginBottom: '50px' }} // Adjust the margin as needed  
    >  
      {children}  
    </motion.div>  
  );  
};  

export default AnimatedSection