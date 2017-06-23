import React, { Component } from 'react';
import './Culture.css';

class Culture extends Component {

    render(){
        return(
            <div className="Culture">
                <p className="cultur"><a href="#">首页</a>><a href="#">关于我们</a>><a href="#">企业文化</a></p>
             <h2 className="hr">企业文化</h2>
                <div className="left">
                    <img src={require('./img/pic.jpg')}/>
                </div>
                <div className="right">
                    <span>
                        <h2>言必信、行必果</h2>
                        <a>诚信文化：诚信是做人的根基、做事的准则，工作中要切实做到以诚待人、以信服人。</a>

                    </span>
                    <p>
                        <h2>事事有人管、人人都负责</h2>
                        <a>责任文化：决定了的事，就要快办、办成、办好；瞄准的目标，就要全力以赴、志在必得；遇到困难和障碍，要千方百计、之治不愈。</a>

                    </p>
                    <p>
                        <h2>兼容并蓄、协调统一和团结发展</h2>
                        <a>协同文化：协同增业绩、协同促发展，打破疆界，实现人与人之间、部门与部门之间的协作与共享。</a>

                    </p>
                    <p>
                        <h2>务实高效、雷厉风行</h2>
                        <a>效率文化：“少环节、快节奏、高效率、管的住”是公司各项工作发展的基本要求，凡是实事求是、凡事将求实效。</a>

                    </p>
                </div>
            </div>
    );
    }
    }
    export default Culture;
