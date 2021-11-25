import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import FileInput from '../../shared/FileInput';
import { CloseOutlined } from '@ant-design/icons';

import ApiService from '../../../services/apiService';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import { UserContext } from '../../context/UserContext';

const UploadCvContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: relative;
`;

const CloseIcon = styled(CloseOutlined)`
  color: red;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 70px;
  z-index: 10;
`;

const UpdateCV = () => {
  const { id } = useContext(UserContext);
  const [cv, setCV] = useState(null);
  const [state, setState] = useState({
    file: null
  });

  const getCV = () => {
    ApiService.getFile(ApiEndpoints.cv(id))
      .then((response) => {
        setCV(URL.createObjectURL(response.data));
      }).catch(() => {
        setCV(null);
      });
  };

  useEffect(() => {
    getCV();
  }, []);

  const handleChange = (name, value) => {
    if (value) {
      setState({ ...state, file: value });
      setCV(URL.createObjectURL(value));
      const url = ApiEndpoints.uploadCv;
      const formData = new FormData();
      formData.append('file', value);
      formData.append('id', id);
      ApiService.uploadFile(url, formData);
    } else {
      // handle remove
    }
  };

  const handleRemove = () => {
    setCV(null);
    setState({ ...state, file: null });
  };


  return (
    <UploadCvContent>
      <h1>Upload CV</h1>

      {
        cv &&
        <CloseIcon onClick={handleRemove} />
      }

      <FileInput
        name='file'
        label='Choose File'
        file={cv}
        onChange={handleChange}
        acceptPdf
      />

    </UploadCvContent>
  );
};

export default UpdateCV;