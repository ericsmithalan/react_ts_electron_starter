"use strict";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Shell } from "@app/shell/Shell";
import { HomePage } from "@app/pages";
import "./app.scss";

export interface IAppProps {}

export interface IAppState {}

export class App extends React.Component<IAppProps, IAppState> {
    private _shellRef: React.RefObject<Shell>;

    public constructor(props: IAppProps) {
        super(props);

        this._shellRef = React.createRef();
    }

    public render() {
        return <Shell ref={this._shellRef}>{this._renderContent()}</Shell>;
    }

    private _renderContent(): JSX.Element {
        return this._renderApp();
    }

    private _renderApp(): JSX.Element {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact={true}
                        path="/"
                        render={(props) => <HomePage {...props} />}
                    />
                    <Route
                        exact={true}
                        path="/home"
                        render={(props) => <HomePage {...props} />}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}
