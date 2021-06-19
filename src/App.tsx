import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Container } from './styled/shared';

import Homepage from './views/Homepage';
import Show from './views/Show';
import Header from './components/Header';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Container>
                    <Header />
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="/show">
                        <Show />
                    </Route>
                </Container>
            </Switch>
        </Router>
    );
};

export default App;
