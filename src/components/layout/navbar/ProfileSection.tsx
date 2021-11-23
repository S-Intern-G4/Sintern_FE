import React, { useContext } from 'react';
import styled from 'styled-components';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

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
  const { setToken } = useContext(UserContext);

  const handleButtonLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
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
          <p>Nume Prenume</p>
          <DownOutlined style={{ marginLeft: '3px' }} />
        </Profile>
      </a>
    </Dropdown>

  );
};

export default ProfileSection;