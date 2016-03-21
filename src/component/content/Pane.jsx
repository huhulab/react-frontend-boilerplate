import React from 'react';
import {Table} from 'antd';

var columns = [{
  title: '姓名',
  dataIndex: 'name',
  render: function(text) {
    return <a href="javascript:;">{text}</a>;
  }
}, {
  title: '年龄',
  dataIndex: 'age'
}, {
  title: '住址',
  dataIndex: 'address'
}];

var data = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}, {
  key: '3',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
}];

// 通过 rowSelection 对象表明需要行选择
var rowSelection = {
  onSelect: function(record, selected, selectedRows) {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: function(selected, selectedRows) {
    console.log(selected, selectedRows);
  }
};


var Pane = React.createClass({
  render() {
    return (
      <div className="pane-wrapper">
        <div className="pane-intro">
          <strong>选项卡说明</strong> 1
        </div>
        <div className="pane">
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} bordered={true} />
        </div>
      </div>
    );
  }
});


export default Pane;
