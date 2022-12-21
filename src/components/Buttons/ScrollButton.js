import React, {useState} from 'react';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {Button} from './Button';

const ScrollButton = () =>{

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    }
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button buttonStyle='btn--back-to-top'  onClick={scrollToTop}>
      <ArrowUpwardIcon className='arrow-btn-icon' />
    </Button>
  );
}

export default ScrollButton;