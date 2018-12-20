import * as React from "react";
import "./home.scss";

export interface IHomePageProps {}

export interface IHomePageState {}

export class HomePage extends React.Component<IHomePageProps, IHomePageState> {
    public render() {
        return (
            <div className="page-container">
                <div>Home Page</div>
            </div>
        );
    }
}
