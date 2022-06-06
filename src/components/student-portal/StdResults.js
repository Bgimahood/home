import React from 'react';
import { Divider, Row, Col,  } from 'antd';
import Marks from './Marks';


function StdResults() {
    return (
        <div className='tb-wrapper'>
            <Divider dashed/>
           
            <Row gutter={6} style={{width:'70%', float:'right',textAlign:'right'}}>
                <Col span={6}>
                    <h2> Results for :: </h2>
                </Col>
                <Col span={12}>
                    <select style={{width:'100%',backgroundColor:'#fff', padding:'5px 16px', borderRadius:'0.2em'}}>
                        <option>Year I - 2021/2022</option>
                        <option>Year II - 2022/2023</option>
                    </select>
                </Col>
                <Col span={6}>
                   <button className='btn green' > Print Results </button>
                </Col>
            </Row>
            <Divider dashed/>
           
            <Row gutter={6} className='row-header'>
                <Col span={1}>
                    S/N
                </Col>
                <Col span={17}>
                    Course Unit (Entry Code)
                </Col>
                <Col span={2}>
                    CA
                </Col>
                <Col span={2}>
                    EX
                </Col>
                <Col span={2}>
                    TT
                </Col>
            </Row>
            {Marks.map((datas, index) => (
                <Row gutter={6} className='row-body' key={index}>
                <Col span={1}>
                   {index+1}
                </Col>
                <Col span={17}>
                   {datas.subject}
                </Col>
                <Col span={2}>
                    {datas.CA}
                </Col>                     
                <Col span={2}>
                    {datas.EX}
                </Col>
                <Col span={2}>
                     {datas.TOT}
                </Col>
            </Row>
            ))}
            <div className='legend'>
                <Row gutter={6}>
                    <Col>CA</Col> <Col>Continuos Assesment</Col>
                </Row>
                <Row gutter={6}>
                        <Col>EX</Col> <Col>Final Exams</Col>
                </Row>
                <Row gutter={6}>
                        <Col>TT</Col> <Col>Total</Col>
                </Row>
                
            </div>             
            <Divider dashed />
            
        </div>
    );
}

export default StdResults;