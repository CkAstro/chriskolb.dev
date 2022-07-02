import { useState, useEffect } from "react";

const useIsVisible = (ref, onlyOnce, rootMargin='0px') => {
   const [ isVisible, setIsVisible ] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([ entry ]) => {
            if (onlyOnce && entry.isIntersecting) observer.unobserve(ref.current);
            setIsVisible(entry.isIntersecting);
         }, {rootMargin} 
      );
      
      ref.current && observer.observe(ref.current);
      return () => observer.unobserve(ref.current);
   }, []);

   return isVisible;
}

export default useIsVisible;