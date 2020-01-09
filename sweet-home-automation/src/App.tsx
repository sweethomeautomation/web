import React from 'react';
import './App.css';
import { Menu, Layout, Typography, List, Divider } from 'antd';
const { Title, Paragraph, Text } = Typography;

const App: React.FC = () => {
    return (
        <Layout style={{ height: "100vh" }}>
            <Layout.Header >
                <div className="logo" style={{ display: "inline" }}>
                    <img src={process.env.PUBLIC_URL + '/swalogo.svg'} />
                </div>
                <span style={{ color: "white", fontSize: 20 }}>Sweet Home Automation</span>
                <Menu mode="horizontal" theme="dark" style={{ lineHeight: '64px', float: "right" }}>
                    <Menu.Item><a href="#/Products">Products</a></Menu.Item>
                    <Menu.Item><a href="#/Pricing">Pricing</a></Menu.Item>
                    <Menu.Item><a href="#/About Us">About Us</a></Menu.Item>
                </Menu>
            </Layout.Header>
            <Layout.Content>
                <Typography>
                    <Title>Why Choose SHA?</Title>
                    <Paragraph>
                        <ul>
                            <li>open source where possible</li>
                            <li>vetted products and technology</li>
                            <li>security first configuration</li>
                        </ul>
                    </Paragraph>
                    <Divider/>
                    <Title>Services</Title>
                    <Paragraph>
                        * lighting
                        * outlets
                        * motion sensors
                        * lighting schedules
                          * dusk/dawn
                          * holidays and special occasions
                        * external access
                          * control your home when you are not home
                    </Paragraph>
                    <Divider/>
                    <Title>Rates</Title>
                    * hourly + product
                </Typography>

            </Layout.Content>
            <Layout.Footer>footer</Layout.Footer>
        </Layout>
    );
}

export default App;
