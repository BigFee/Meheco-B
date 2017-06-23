/**
 * Created by Administrator on 2017/6/22.
 */
import React, { Component } from 'react';
import { Pagination } from 'antd';
import './Government.css';
function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
}
class Government extends Component {
    render(){
        return (
            <div className="box">
                <p><a href="javascript:;">首页</a> > <a href="javascript:;">投资者关系</a> > <a href="javascript:;">公司治理</a></p>
                <div className="gov">公司治理</div>
                <div className="main">
                    <div className="one">
                        中国医药健康产业股份有限公司章程(二0一五年八月)
                        <img src={require('./img/picc.png')} />
                        <span>2015.08</span>
                    </div>
                    <div className="two">
                        公司章程
                        <img src={require('./img/picc.png')} />
                        <span>2014.06</span>
                    </div>
                    <div className="two">
                        2012年内控规范实施工作方案
                        <img src={require('./img/picc.png')} />
                        <span>2012.04</span>
                    </div>
                    <div className="two">
                        对外担保管理制度
                        <img src={require('./img/picc.png')} />
                        <span>2011.04</span>
                    </div>
                    <div className="two">
                        关联方资金往来管理制度
                        <img src={require('./img/picc.png')} />
                        <span>2011.04</span>
                    </div>
                    <div className="two">
                        关联交易管理制度
                        <img src={require('./img/picc.png')} />
                        <span>2011.04</span>
                    </div>
                    <div className="two">
                        2010年年度报告
                        <img src={require('./img/picc.png')} />
                        <span>2011.03</span>
                    </div>
                    <div className="two">
                        总经理工作细则
                        <img src={require('./img/picc.png')} />
                        <span>2010.10</span>
                    </div>
                    <div className="two">
                        信息披露事务管理制度
                        <img src={require('./img/picc.png')} />
                        <span>2015.08</span>
                    </div>
                    <div className="two">
                        中国医药健康产业股份有限公司章程(二0一五年八月)
                        <img src={require('./img/picc.png')} />
                        <span>2010.08</span>
                    </div>
                    <div className="two">
                        内幕信息及知情人管理制度
                        <img src={require('./img/picc.png')} />
                        <span>2010.03</span>
                    </div>
                </div>
                <Pagination className="fy" showQuickJumper defaultCurrent={''} total={500} onChange={onChange} />
            </div>
        )
    }
}
export default Government;
