import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import apiService from '../../../services/apiService';

const Profile = styled.div`
  height: 50px;
  color: #fff;
  font-size: 1rem;
  margin-right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
    padding: 0;
  }
`;

const CustomUserIcon = styled(UserOutlined)`
  font-size: 2rem;
  margin: 3px;
`;

const ProfileSection = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const { setToken, setId, setType, id, type } = useContext(UserContext);

  useEffect(() => {
    if (id && type) {
      if (type === 'student') {
        apiService.get<any>(ApiEndpoints.students(id))
          .then(({ data }) => {
            setName(`${data.firstName} ${data.lastName}`);
          });
      } else {
        apiService.get<any>(ApiEndpoints.companies(id))
          .then(({ data }) => {
            setName(data.name);
          });
      }
    }
  }, [id, type]);

  const handleButtonLogout = () => {
    setToken('');
    setId('');
    setType('');
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('type');
  };

  const menu = (
    <Menu onClick={() => history.push('/profile')}>
      <Menu.Item onClick={() => history.push('/profile')}>
        Profile
      </Menu.Item>
      <Menu.Item onClick={handleButtonLogout}>
        Sign out
      </Menu.Item>
    </Menu>
  );

  return (


    <Dropdown overlay={menu}>
      <a className='ant-dropdown-link' onClick={e => e.preventDefault()}>
        <Profile>
          <CustomUserIcon />
          <p>{name}</p>
          <DownOutlined style={{ marginLeft: '3px' }} />
        </Profile>
      </a>
    </Dropdown>

  );
};

export default ProfileSection;