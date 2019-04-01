import React, { useCallback, useState, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import styles from './Crope.scss';

const Crope = () => {
  const multiple = false;
  const accept = 'image/*';

  const acceptStyle = {
    borderColor: '#00e676',
    color: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744',
    color: '#ff1744'
  };

  const activeStyle = {
    borderColor: '#2196f3'
  };

  const [ imgSrc, setImgSrc ] = useState(null); 
  const [ crop, setCrop ] = useState({})

  const onDrop = useCallback(acceptedFiles => {
    if(acceptedFiles.length !== 0) {
      const currentFile = acceptedFiles[ 0 ];
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImgSrc(reader.result);
      }, false);
      reader.readAsDataURL(currentFile);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({ onDrop, multiple, accept });

  const style = useMemo(() => ({
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject
  ]);

  const onCrop = (cropeParam) => {
    window.console.log(cropeParam);
    setCrop({ cropeParam });
  } 

  return (
    <div className={styles.container}>
      <div {...getRootProps({ style })} className={styles.dropzone}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag and drop some files here, or click to select files</p>
        }
      </div>
      <div className={styles.imgContainer}>
        {imgSrc ? <ReactCrop src={imgSrc} crop={crop} onChange={onCrop} /> : null}
      </div>
    </div>
  )
}

export default Crope;