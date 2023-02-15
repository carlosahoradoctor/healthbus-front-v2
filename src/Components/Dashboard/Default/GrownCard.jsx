import { Growthchart } from '../../Common/Data/ApexChart';
import CardHeaderComponent from '../Common/CardHeader';
import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import Chart from 'react-apexcharts';

const GrowthOverview = ({ title }) => {
    return (
        <Card>
            <CardHeader>
                <CardHeaderComponent title={title} subtitle="80% Growth" />
            </CardHeader>
            <CardBody className="p-0 growth-overview">
                <div id="chart-dashbord">
                    <Chart options={Growthchart.options} series={Growthchart.series} type="radialBar" height={380} />
                </div>
            </CardBody>
        </Card>
    );
};

export default GrowthOverview;