import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Footer, P } from '../../AbstractElements';
import { useLocation } from 'react-router-dom';

const FooterClass = () => {
  const location = useLocation();

  return (
    <Fragment>
      <Footer attrFooter={{ className: `footer ${location.pathname === '/page-layout/footer-dark' ? 'footer-dark' : location.pathname === '/page-layout/footer-fixed' ? 'footer-fix' : ''}` }} >
        <Container fluid={true}>
          <Row>
            <Col md="12" className="footer-copyright">
              <P attrPara={{ className: 'mb-0' }} >{'Copyright 2021-22 © All rights reserved.'}</P>
            </Col>
          </Row>
        </Container>
      </Footer>
    </Fragment>
  );
};

export default FooterClass;