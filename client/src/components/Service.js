

import React, { Component } from 'react';
import { IconName } from "react-icons/fc";
import Title from './Title';
import {FcBusinessman,FcLike,FcHome,FcGraduationCap} from "react-icons/fc";

export default class Service extends Component {
    state={
        service:[
            {
                icon:<FcBusinessman/>,
                title:"Wedding Parties",
                info:'Special offfers in the Wedding Parties'

            },
            {
                icon:<FcLike/>,
                title:"Birthday parties",
                info:'Provides Bithday cake & flower gift'

            },
            {
                icon:<FcGraduationCap/>,
                title:"Graduation paties",
                info:'Our crew helps for Graduation'

            },
            {
                icon:<FcHome/>,
                title:"All House parties",
                info:'Special authentic cake and flower decoration'

            }
        ]
    }
    
    render() {
        return (
            <section className="services">
               <Title title="Services"/>
               <div className="services-center">
                {this.state.service.map((item,index)=>
                {
                    return(<article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    </article>
                    );
                })}
            </div>
            </section>
        )
    }
}

