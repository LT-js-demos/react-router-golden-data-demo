const App = React.createClass({
    getInitialState: function () {
        return {
            elements: []
        };
    },
    render: function () {
        return (
            <div>{this.props.children && React.cloneElement(this.props.children, {
                elements: this.state.elements
            })}</div>
        );
    }
});


const Editor = React.createClass({
    render: function () {
        return <div>
            <ReactRouter.Link to="/previewer">Previewer</ReactRouter.Link>
            <LeftPanel elements={this.props.elements}/>
            <RightPanel />
        </div>
    }
});
const LeftPanel = React.createClass({
    render: function () {
        const elements = this.props.elements.map((ele, index) => {
            return <div key={index}>
                <input type={ele}/>
            </div>
        });
        return <div>
            {elements}
        </div>
    }
});
const RightPanel = React.createClass({
    render: function () {
        return <div>RightPanel</div>
    }
});
const Previewer = React.createClass({
    render: function () {
        return <div>
            <ReactRouter.Link to="/">Editor</ReactRouter.Link>
            Previewer</div>
    }
});
ReactDOM.render(
    <ReactRouter.Router>
        <ReactRouter.Route path="/" component={App}>
            <ReactRouter.IndexRoute component={Editor}/>
            <ReactRouter.Router path="previewer" component={Previewer}/>
        </ReactRouter.Route>
    </ReactRouter.Router>
    , document.getElementById('content'));
