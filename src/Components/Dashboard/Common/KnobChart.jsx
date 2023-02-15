import React, { Fragment, useEffect } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { H5, P } from '../../../AbstractElements';
import Knob from 'knob';
import ConfigDB from '../../../Config/ThemeConfig';

const primary = localStorage.getItem('default_color') || ConfigDB.data.color.primary_color;

const KnobChart = () => {
    useEffect(() => {
        var profit = Knob({
            value: 60,
            left: 1,
            angleOffset: 90,
            className: 'review',
            thickness: 0.3,
            fgColor: '#c29873',
            readOnly: true,
            dynamicDraw: true,
            tickColorizeValues: true,
            bgColor: '#eeeeee',
            lineCap: 'round',
            displayPrevious: false
        });
        document.getElementById('profit').appendChild(profit);

        var profit1 = Knob({
            value: 62,
            left: 1,
            angleOffset: 90,
            className: 'review',
            thickness: 0.3,
            fgColor: primary,
            readOnly: true,
            dynamicDraw: true,
            tickColorizeValues: true,
            bgColor: '#eeeeee',
            lineCap: 'round',
            displayPrevious: false
        });
        document.getElementById('profit1').appendChild(profit1);

        return (() => {
            document.getElementById('profit').removeChild(profit);
            document.getElementById('profit1').removeChild(profit1);
        })
    }, []);

    return (
        <Fragment>
            <Col xl="3" sm="6" className="box-col-3 chart_data_right">
                <Card className="income-card card-secondary">
                    <CardBody>
                        <div className="round-progress knob-block text-center">
                            <div className="progress-circle">
                                <div className="knob" id={'profit'} >
                                </div>
                                <H5>{'$9,84,235'}</H5>
                                <P>{'Our Annual Income'}</P>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl="3" sm="6" className="box-col-3 chart_data_right second">
                <Card className="income-card card-secondary">
                    <CardBody>
                        <div className="round-progress knob-block text-center">
                            <div className="progress-circle">
                                <div className="knob" id={'profit1'} >
                                </div>
                                <H5>{'$4,55,462'}</H5>
                                <P>{'Our Annual Income'}</P>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default KnobChart;