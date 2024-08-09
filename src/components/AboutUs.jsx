import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="container-fluid">
      <Row style={{ backgroundColor: '#333333', padding: '10px 10px' }}>
        <Col
          xs={2}
          style={{
            color: '#FFFFFF',
            textAlign: 'center',
            cursor: 'pointer',
            paddingLeft: '40px',
            fontSize: '24px',
            fontWeight: 'bold'
          }}
          onClick={() => navigate('/home')}
        >
          LOGO
        </Col>
        <Col
          xs={7}
          style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
        >
          <input
            type="text"
            id="search1"
            placeholder="Search"
            style={{
              width: '60%',
              padding: '10px',
              borderRadius: '5px',
              border: 'none'
            }}
          />
        </Col>
        <Col
          xs={3}
          className="headerup"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            color: '#FFFFFF',
            alignItems: 'center',
            paddingRight: '10px'
          }}
        >
          <div style={{ cursor: 'pointer', marginLeft: '-186px' }} onClick={() => navigate('/home')}>
            HOME
          </div>
          <div style={{ cursor: 'pointer', marginLeft: '50px' }} onClick={() => navigate('/companies')}>
            COMPANIES
          </div>
          <div style={{ cursor: 'pointer', marginLeft: '50px' }} onClick={() => navigate('/roles')}>
            ROLES
          </div>
          <div style={{ cursor: 'pointer', marginLeft: '50px' }} onClick={() => navigate('/blogs')}>
            BLOGS
          </div>
          <div style={{ cursor: 'pointer', marginLeft: '50px' }}>
            <i className="fas fa-user" style={{ fontSize: '24px' }}></i>
          </div>
        </Col>
      </Row>

      <Col xs={12} style={{ padding: '20px' }}>
        <Row className="wide-row">
          <Col xs={12} className="roshan">
            <h3 className="card-km">About Us</h3>
            <p style={{ textAlign: 'left' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iusto reiciendis dolor quis quia debitis, dolore omnis provident. Facere laboriosam modi quos reprehenderit neque illum doloribus recusandae consequatur exercitationem dolorum est saepe repudiandae, pariatur nisi corporis, totam assumenda voluptatem perspiciatis hic, sunt minima iure? Nemo eum, ratione nam mollitia neque modi natus perferendis cupiditate amet maiores laborum! Sunt repudiandae quo minima. Inventore harum laborum natus pariatur maiores temporibus id aperiam autem rerum molestias enim rem deserunt, totam maxime dicta excepturi officia neque veniam ducimus. Cupiditate laborum fuga, atque voluptatum voluptas iste iure inventore modi nobis porro vero, doloribus sed delectus distinctio maxime facere nesciunt perspiciatis facilis quasi autem. Est odit quia possimus enim, deleniti, eveniet nulla adipisci vel, eum accusamus earum sit ipsum quibusdam delectus atque eligendi labore architecto incidunt laborum blanditiis doloremque iusto ratione consequuntur modi. Itaque nulla deserunt veritatis necessitatibus nemo nostrum natus corrupti sunt aliquam neque esse quae quaerat illum illo, omnis in eligendi iste cumque corporis sapiente. Nesciunt cumque aut sit nobis quibusdam possimus velit quod eveniet quam soluta, quis, laboriosam voluptatibus dolorem eius quos fugit, ea voluptates temporibus cum ab eaque alias. Architecto rerum molestiae alias sapiente voluptate omnis quas minima tenetur? Fuga, reiciendis soluta?
            </p>
          </Col>
        </Row>
        
        <Row className="wide-row">
          <Col xs={12} className="roshan">
            <h3 className="title">Our Mission</h3>
            <p style={{ textAlign: 'left' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cum, nobis cupiditate obcaecati blanditiis vel veritatis alias nemo, sint fugiat atque magnam provident ullam eligendi libero consectetur architecto quis, dolore unde repudiandae qui ea laborum! Expedita corrupti deserunt aliquam distinctio natus dolorem harum placeat ab aliquid consequuntur enim itaque accusantium maiores, corporis minus hic unde nesciunt velit dicta autem explicabo saepe sequi. Voluptate quas quia accusantium quos aliquam consequatur repellendus tempore vel placeat, quis distinctio pariatur odit commodi minima iure, expedita molestias maiores culpa, cupiditate exercitationem nemo eius velit. Ratione asperiores consequuntur dolores nisi repellat suscipit ex voluptatem voluptatum! Aut odit harum dignissimos ipsam quia excepturi quo mollitia consequuntur magnam unde porro, iure ullam reiciendis aspernatur sed qui ipsum ea in repellat dolorum suscipit saepe dolores eaque. Tenetur cum quis earum reiciendis ab sed eius modi deleniti, enim minus inventore incidunt ullam qui repellat facilis explicabo optio porro exercitationem alias sapiente quibusdam ut vero. Explicabo, eveniet. Iure, rem aut sint et soluta ducimus praesentium necessitatibus fugiat adipisci atque sed natus repudiandae illum magnam error obcaecati dolor quia perspiciatis! Pariatur laboriosam perspiciatis in fugiat beatae odio nisi vero aut tempora quas, culpa corporis hic, debitis maiores aperiam vitae tempore. Culpa, quos.
            </p>
          </Col>
        </Row>
        <Row className="wide-row">
          <Col xs={12} className="roshan">
            <h3 className="title">Our Vision</h3>
            <p style={{ textAlign: 'left' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nobis temporibus? Officia minima voluptatibus, assumenda fugiat ratione perferendis dignissimos illo modi officiis quidem repudiandae soluta rem ex, corrupti corporis cum temporibus laborum omnis facilis. Quidem recusandae vitae cum id delectus. Quaerat necessitatibus obcaecati, officiis libero dolores corrupti eligendi dolor recusandae sed mollitia eaque eveniet numquam, cum, facere veniam architecto non odit suscipit aliquam magni itaque. Molestias fugiat sed beatae eum hic nostrum iusto eaque veritatis est culpa, quis quibusdam provident vitae voluptates magnam optio voluptatum deserunt nisi. Porro dolorum ea atque repudiandae tempora perferendis vel ad optio velit, veniam nemo debitis voluptate architecto molestiae sint assumenda laudantium recusandae magnam cupiditate deleniti! Est voluptatum, exercitationem corporis repellendus eum dicta perferendis iste nulla, ea cum inventore. Rerum, mollitia. Id tempora magni enim, vitae nulla nobis architecto cum repellendus delectus nesciunt distinctio, repudiandae possimus ratione tenetur, at reiciendis dolor aperiam fugit quia itaque! Minima incidunt, molestiae similique omnis eligendi quam voluptates temporibus molestias inventore minus? Perferendis quas praesentium fuga cupiditate. Deserunt, porro a rerum eligendi placeat fuga molestiae delectus obcaecati molestias quasi facere. Aut corporis illum eum voluptatum adipisci ullam labore inventore odio eos laudantium eligendi, nulla iusto, tempore beatae ab quos cum!</p>
          </Col>
        </Row>
        <Row className="wide-row">
          <Col xs={12} className="roshan">
            <h3 className="title">Our Values</h3>
            <p style={{ textAlign: 'left' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, facere. Tempore velit dolores ducimus cumque obcaecati. Odit, molestiae reprehenderit facilis est mollitia debitis quasi dolore nihil incidunt natus, quibusdam quidem. Rerum adipisci sunt autem sint laudantium nostrum tempore sapiente, quod dignissimos, exercitationem reprehenderit culpa officiis temporibus magnam. Doloribus rem deserunt animi quia voluptatem at, ullam a nobis, commodi, adipisci eius debitis hic eligendi minus dolore voluptatibus quidem odio ab recusandae quis nemo officia aliquid repudiandae necessitatibus? Id animi autem dolor ducimus. Possimus, a illum odio veniam iure unde in at aperiam. Est officiis fugiat hic animi iure maxime, labore repellendus tenetur tempora aut voluptatem eos quae obcaecati atque possimus totam quidem. Illo quis autem pariatur assumenda est. Nesciunt illo eius recusandae corporis possimus neque excepturi ut dolorum non nemo facilis ea vero eaque, rem, qui tempore! Optio iure, modi reiciendis, eum veritatis possimus autem error eius harum repellendus voluptatum ipsa iste, omnis minima sunt corporis consequuntur saepe laborum similique repudiandae cupiditate perspiciatis soluta dolores itaque! Rerum, autem, fugiat exercitationem maxime, sint obcaecati animi optio numquam nisi alias perspiciatis incidunt repellat distinctio amet facilis a unde! Fugit quisquam laboriosam blanditiis voluptates molestias excepturi veritatis consequuntur nulla vel? Veniam, explicabo tempore? Saepe? </p>
          </Col>
        </Row>
      </Col>

      <footer className="footer">
        <Row>
          <Col xs={7} style={{ textAlign: 'left' }}>
            <p style={{ margin: 0 }}>
              Copyright 2024 .{' '}
              <a href="/terms-and-conditions" style={{ marginLeft: '10px' }}>Terms and Conditions</a>{' '}
              <a href="/user-agreement" style={{ marginLeft: '25px' }}>User Agreement</a>{' '}
              <a href="/contact-us" style={{ marginLeft: '40px' }}>Contact Us</a>{' '}
              <a href="/about-us" style={{ marginLeft: '50px' }}>About Us</a>{' '}
              <a href="/feedback" style={{ marginLeft: '50px' }}>Feedback</a>
            </p>
          </Col>
          <Col xs={5} style={{ textAlign: 'right' }}>
            <p style={{ margin: '5px' }}>HAVE A QUERY ? <a href="/contact-us" style={{ marginLeft: '40px', marginRight: '50px' }}>CONTACT US</a></p>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};

export default AboutUs;
