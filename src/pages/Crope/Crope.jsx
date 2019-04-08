import React, { useCallback, useState, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactCrop from 'react-image-crop';
import { image64toCanvasRef, extractImageFileExtensionFromBase64, downloadBase64File } from 'Utils/cropImage';
import 'react-image-crop/dist/ReactCrop.css';
import styles from './Crope.scss';

const Crope = () => {
  const multiple = false;
  const accept = 'image/*';
  const imagePreviewCanvasRef = React.createRef();

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
  const [ crop, setCrope ] = useState(null);
  const [ activeBtn, setActiveBtn ] = useState(false);

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

  const onCrop = (newCrop) => {
    setCrope(newCrop);
  } 

  const onCropComplete = (newCrop, pixelCrop) => {
    const canvasRef = imagePreviewCanvasRef.current;
    image64toCanvasRef(canvasRef, imgSrc, pixelCrop);
    if(newCrop.width === 0 && newCrop.height === 0) {
      setActiveBtn(false);
    } else {
      setActiveBtn(true);
    }
  }

  const downloadImage = (e) => {
    e.preventDefault()
    if (imgSrc) {
      const canvasRef = imagePreviewCanvasRef.current;
      const imgSrcExt =  extractImageFileExtensionFromBase64(imgSrc);
      const imageData64 = canvasRef.toDataURL('image/' + imgSrcExt);
      const myFilename = 'previewFile.' + imgSrcExt;
      downloadBase64File(imageData64, myFilename);
    }
  }

  const closeImg = () => {
    setImgSrc(null); 
    setCrope(null);
    setActiveBtn(false);
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
        {imgSrc ? 
          (
            <ReactCrop 
              src={imgSrc} 
              crop={crop} 
              onChange={onCrop} 
              onComplete={onCropComplete}
            >
              <button onClick={closeImg} className={styles.close} type="button">x</button>
            </ReactCrop>
          ) 
          : 
          null
        }
        <canvas className={styles.dspln} ref={imagePreviewCanvasRef} />
      </div>
      {
        activeBtn ? <button className={styles.btn} type="button" onClick={downloadImage}>Скачать</button> : null
      }
    </div>
  )
}

export default Crope;