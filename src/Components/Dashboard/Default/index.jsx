import { Icon1, Icon2 } from '../../Common/Data/SvgIcons';
import IncomeCard from './IncomeCard';
import IncomeChartClass from './IncomechartCard';
import ProfileGreeting from './ProfileGreetingCard';
import GrowthOverview from './GrownCard';
import LatestActivityClass from './LatestActivityCard';
import RecentOrderClass from './RecentOrderCard';
import UserCard from './UserCard';
import TransactionCard from './TransactionCard';
import { Container, Row, Col } from 'reactstrap';
import React from 'react';

const Dashboard = () => {
    return (
        <Container fluid={true} className="dashboard-default-sec">
            <Row>
                <Col xl="12" className="box-col-12 des-xl-100">
                    <Row>
                        {/* <Col xl="12" md="6" className="box-col-6 des-xl-50">
                            <ProfileGreeting />
                        </Col> */}
                        <Col xl="3" md="1" sm="3" className="box-col-3 des-xl-25 rate-sec">
                            <IncomeCard iconClass={<Icon1 />} amount='1.000.000' title='Cantidad de pacientes' percent="95.54%" />
                        </Col>
                        <Col xl="3" md="1" sm="3" className="box-col-3 des-xl-25 rate-sec">
                            <IncomeCard iconClass={<Icon2 />} amount='5' title='Cantidad de nodos' percent="90.13%" />
                        </Col>
                        <Col xl="3" md="1" sm="3" className="box-col-3 des-xl-25 rate-sec">
                            <IncomeCard iconClass={<Icon2 />} amount='19' title='Cantidad de endpoints' percent="80.66%" />
                        </Col>
                        <Col xl="3" md="1" sm="3" className="box-col-3 des-xl-25 rate-sec">
                            <IncomeCard iconClass={<Icon2 />} amount='10.000.000' title='Cantidad de requests' percent="75.45%" />
                        </Col>
                    </Row>
                </Col >
                <IncomeChartClass />
                <Col xl="12" className="box-col-12 des-xl-100">
                    <Row>
                        <Col xl="6" className="col-50 box-col-6 des-xl-50">
                            <GrowthOverview title='Nodos mas utilizados' />
                        </Col>
                        <Col xl="6" className="col-50 box-col-6 des-xl-50">
                            <GrowthOverview  title='Nodos con mas pacientes' />
                        </Col>
                    </Row>
                </Col>
                <Col xl="12" className="box-col-12 des-xl-100">
                    <Row>
                        {/* <Col xl="6" className="col-50 box-col-6 des-xl-50">
                            <LatestActivityClass />
                        </Col> */}
                        <Col xl="6" className="recent-order-sec">
                            <RecentOrderClass title='Endpoints mas utilizados' />
                        </Col>
                        <Col xl="6" className="recent-order-sec">
                            <RecentOrderClass title='Recursos mas utilizados' />
                        </Col>
                    </Row>
                </Col>
                {/* <Col xl="4" className="box-col-12 des-xl-100">
                    <Row>
                        <Col xl="12" className="box-col-6 des-xl-50">
                            <UserCard />
                        </Col>
                        <Col xl="12" className="box-col-6 des-xl-50">
                            <TransactionCard />
                        </Col>
                    </Row>
                </Col> */}
            </Row>
        </Container>
    );
};

export default Dashboard;