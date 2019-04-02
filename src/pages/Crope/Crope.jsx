import React, { useCallback, useState, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactCrop from 'react-image-crop';
import { image64toCanvasRef, extractImageFileExtensionFromBase64, base64StringtoFile, downloadBase64File } from 'Utils/cropImage';
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
  const [ crop, setCrope ] = useState(null)

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

  const onCrop = (crop) => {
    setCrope(crop);
  } 

  const imageLoaded = (image) => {
    window.console.log('image', image);
  }

  const onCropComplete = (crop, pixelCrop) => {
    // window.console.log(crop, pixelCrop, );
    // window.console.log('pixelCrope', pixelCrop);

    const canvasRef = imagePreviewCanvasRef.current;
    image64toCanvasRef(canvasRef, imgSrc, pixelCrop);
  }

  const downloadImage = (e) => {
    e.preventDefault();
    const canvasRef = imagePreviewCanvasRef.current;
    const fileExtension = extractImageFileExtensionFromBase64(imgSrc);
    const imageData64 = canvasRef.toDataURL('image/' + fileExtension);

    const myFilename = 'croppedImage.' + fileExtension;

    // file uploaded
    const myNewCroppedFile = base64StringtoFile(imgSrc, myFilename);

    // download file
    downloadBase64File(imgSrc, myFilename);

    window.console.log(imageData64, myNewCroppedFile);
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
              onImageLoaded={imageLoaded}
              onComplete={onCropComplete}
            />
          ) 
          : 
          null
        }
        <canvas ref={imagePreviewCanvasRef} />
        <button type="button" onClick={downloadImage}>Скачать</button>
      </div>
    </div>
  )
}

export default Crope;