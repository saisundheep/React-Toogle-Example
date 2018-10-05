import React from 'react';

import { Tabs, TabLink, TabContent } from '../../../../src';

import './styles.css';

const styles = {
    tabs: {
        width: '400px',
        display: 'inline-block',
        marginRight: '30px',
        verticalAlign: 'top'
    },
    links: {
        margin: 0,
        padding: 0
    },
    tabLink: {
        height: '30px',
        lineHeight: '30px',
        padding: '0 15px',
        cursor: 'pointer',
        borderBottom: '0px solid transparent',
        display: 'inline-block'
    },
    activeLinkStyle: {
        borderBottom: '2px solid #333'
    },
    visibleTabStyle: {
        display: 'inline-block'
    },
    content: {
        padding: '0 15px'
    }
};

const App = (props) => (
    <div>
        <Tabs name="tabs2"
            handleSelect={props.changeSelectedTab}
            selectedTab={props.tabs2}
            activeLinkStyle={styles.activeLinkStyle}
            visibleTabStyle={styles.visibleTabStyle}
            style={styles.tabs}
        >
            <div style={styles.links}>
                <TabLink to="tab1" default style={styles.tabLink}>Statement</TabLink>
                <TabLink to="tab2"  style={styles.tabLink}>Authorization</TabLink>
            </div>

            <div style={styles.content}>
                <TabContent for="tab1">
                    <h2>Statement content</h2>
                    <p>
                       Statement  Tab Content Information Will Display here
                    </p>

                </TabContent>
                <TabContent for="tab2">
                    <h2>Authorization content</h2>
                    <div>Authorization Tab Content Information Will Display here </div>
                </TabContent>

            </div>
        </Tabs>
    </div>
);

export default App;