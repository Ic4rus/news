import { Col, Divider, Row, Image, Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;

const Box = (props) => {
  return (
    <div className='box'>
      <Image className='news-img' src={props.img} />
      <span className='brief'>{props.brief}</span>
      <span className='news-time'>{props.time}</span>
    </div>
  );
};

const rss = [
  {
    key: 0,
    label: 'Trang chủ',
    url: 'https://vnexpress.net/rss/tin-moi-nhat.rss',
  },
  {
    key: 1,
    label: 'general',
    url: 'https://vnexpress.net/rss/tin-moi-nhat.rss',
  },
  {
    key: 2,
    label: 'Thời sự',
    url: 'https://vnexpress.net/rss/tin-moi-nhat.rss',
  },
];

const items1 = [
  {
    key: 0,
    label: 'item-1',
    icon: <UserOutlined />,
  },
  {
    label: 'item-2',
    icon: <UserOutlined />,
  },
];

const data = [{}, {}, {}, {}, {}, {}];

const App = () => {
  const [selectedSubKey, setSelectedSubKey] = useState(1);

  const test = async () => {
    // var xhr = new XMLHttpRequest();
    // xhr.open(
    //   'GET',
    //   'https://cors-anywhere.herokuapp.com/https://vnexpress.net/rss/tin-moi-nhat.rss',
    //   true
    // );
    // xhr.onload = function (e) {
    //   if (xhr.readyState === 4) {
    //     if (xhr.status === 200) {
    //       // var json_obj = JSON.parse(xhr.responseText);
    //       console.log(xhr.responseText);
    //     } else {
    //       console.error(xhr.statusText);
    //     }
    //   }
    // }.bind(this);
    // xhr.onerror = function (e) {
    //   console.error(xhr.statusText);
    // };
    // xhr.send(null);
    fetch('https://vnexpress.net/rss/tin-moi-nhat.rss')
      .then((response) => response.text())
      .then((str) => new window.DOMParser().parseFromString(str, 'text/xml'))
      .then((data) => console.log(data));
  };

  const onClickSubMenuItem = (e) => {
    console.log('click ', e.key);
    setSelectedSubKey(e.key);
    test();
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsedWidth={72}
        collapsed
        style={{
          backgroundColor:
            'hsl(216,calc(var(--saturation-factor, 1)*9.8%),90%)',
        }}
      >
        <Menu
          style={{
            backgroundColor:
              'hsl(216,calc(var(--saturation-factor, 1)*9.8%),90%)',
          }}
          defaultSelectedKeys={['1']}
          mode='inline'
          items={items1}
        />
      </Sider>
      <Sider
        width={240}
        style={{
          backgroundColor:
            'hsl(220,calc(var(--saturation-factor, 1)*13%),95.5%)',
        }}
      >
        <Menu
          style={{
            height: '100%',
            backgroundColor:
              'hsl(220,calc(var(--saturation-factor, 1)*13%),95.5%)',
          }}
          defaultSelectedKeys={['1']}
          mode='inline'
          items={rss}
          onClick={onClickSubMenuItem}
        />
      </Sider>

      <Layout className='site-layout' style={{ backgroundColor: 'white' }}>
        <Header
          style={{
            height: '48px',
            borderBottom: '1px solid #caccce',
            backgroundColor: 'white',
          }}
          className='header-content'
        >
          {rss[selectedSubKey].label}
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Row className='line'>
            {data.map((i) => (
              <Col className='gutter-row' span={4}>
                <Box
                  img='https://i1-vnexpress.vnecdn.net/2022/11/02/thiet-ke-chua-co-ten-2022-11-0-7435-7225-1667365352.png?w=1200&h=0&q=100&dpr=1&fit=crop&s=HIpiDic2lZHzMLExpMQydw'
                  brief='Hồ sơ xây dựng cho thấy khách sạn Hamilton cạnh hẻm xảy ra vụ giẫm đạp ở
                Itaewon đã cơi nới trái phép, khiến con ngõ trở nên hẹp hơn.'
                  time='Wed, 02 Nov 2022 14:28:54 +0700'
                />
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
