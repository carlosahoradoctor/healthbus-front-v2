import { Currentlysale } from '../../Common/Data/ApexChart';
import CardHeaderComponent from '../Common/CardHeader';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import Chart from 'react-apexcharts';

const IncomeChartClass = () => {
    return (
        <Fragment>
            <Col xl="12" className="box-col-12 des-xl-100 dashboard-sec">
                <Card className="income-card">
                    <CardHeader>
                        <CardHeaderComponent title='Requests por hora' subtitle="86% Ultimas 24hs" settingIcon={true} />
                    </CardHeader>
                    <CardBody className="p-0">
                        <div id="chart-timeline-dashbord">
                            <Chart options={Currentlysale.options} series={Currentlysale.series}  height="395" width="100%" type="area" />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default IncomeChartClass;