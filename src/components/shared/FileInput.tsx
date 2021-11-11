import React, { useEffect, useState } from 'react';
import { Grid, Fab, makeStyles } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const FileInput = (props) => {
  const [isPdf, setIsPdf] = useState(false);

  const classes = useStyles();
  const [state, setState] = useState({
    file: props.file,
    preview: props.file || null
  });

  useEffect(() => {
    setState({
      file: props.file,
      preview: props.file || null
    });
    updateFileType(props.file);
  }, [props.file]);

  const handleChange = (e) => {
    const { name, files } = e.target;
    const file = files ? files[0] : null;
    setState({
      file: file,
      preview: URL.createObjectURL(file)
    });
    props.onChange(name, file);
  };

  const updateFileType = async file => {
    if (file) {
      fetch(file)
        .then(response => response.blob())
        .then(blob => {
          setIsPdf(blob.type === 'application/pdf');
        });
    }
  };

  const image = state.preview || props.file;

  return (
    <Grid container justifyContent='center' alignItems='center' className={classes.root}>
      <input
        key={Math.random()}
        id={`file-${props.name}`}
        name={props.name}
        className={classes.fileInput}
        type='file'
        accept={props.acceptPdf ? 'image/*,application/pdf' : 'image/*'}
        onChange={handleChange}
      />

      {image ? (
        isPdf ? (
          <Document file={image} className={classes.previewImage}>
            <Page pageNumber={1} />
          </Document>
        ) : (
          <img className={classes.previewImage} src={image} />
        )
      ) : (
        <label htmlFor={`file-${props.name}`}>
          <Fab
            component='span'
            variant='extended'
            aria-label='Upload picture'
            className={classes.fab}
          >
            <PhotoCameraIcon color='primary' fontSize='large' />
            {props.label}
          </Fab>
        </label>
      )}
    </Grid>
  );
};

export default FileInput;


FileInput.defaultProps = {
  name: '',
  label: '',
  file: null,
  acceptPdf: false
};

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
    border: '1px solid #ccc',
    overflow: 'hidden'
  },
  fab: {
    boxShadow: 'none',
    '&:active': {
      boxShadow: 'none'
    }
  },
  removeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    background: 'rgba(0, 0, 0, 0.8)'
  },
  fileInput: {
    display: 'none'
  },
  previewImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    display: 'flex',

    '& .react-pdf__Page__canvas': {
      maxHeight: '100%',
      maxWidth: '100%'
    }
  }
});