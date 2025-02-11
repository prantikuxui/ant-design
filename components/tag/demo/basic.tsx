import React from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Flex, Tag } from 'antd';

const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
};

const App: React.FC = () => (
  <Flex gap="small" wrap="wrap">
    <Tag>Tag 1</Tag>
    <Tag>
      <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
    </Tag>
    <Tag closeIcon onClose={preventDefault}>
      Prevent Default
    </Tag>
    <Tag closeIcon={<CloseCircleOutlined />} onClose={console.log}>
      Tag 2
    </Tag>
  </Flex>
);

export default App;
