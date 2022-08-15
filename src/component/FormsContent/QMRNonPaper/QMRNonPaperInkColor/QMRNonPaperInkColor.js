import React from 'react';
import { ColorPicker, useColor } from 'react-color-palette';
import styles from './QMRNonPaperInkColor.module.css';

const QMRNonPaperInkColor = () => {
  const [color, setColor] = useColor("hex", "#121212");

  return (
    <div>
      <ColorPicker width={750} height={228}
        color={color}
        onChange={setColor} hideHSV dark name="color" value={color} />;
    </div>
  )
}
// <div className={styles.QMR_nonpaper_ink_cont + ' mb-3'}>
//   <div className={styles.QMR_nonpaper_ink + ' border border-1'}></div>
//   <div className='d-flex align-items-center'>
//     <div className={styles.QMR_nonpaper_ink_option + ' mb-2 mt-2'}></div>
//     <span className='mx-2 text-light text-decoration-underline'>
//       <h6>Click here to navigate color</h6>
//     </span>
//   </div>
// </div>


export default QMRNonPaperInkColor;
