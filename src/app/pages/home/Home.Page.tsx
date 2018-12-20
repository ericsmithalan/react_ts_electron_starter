import * as React from "react";

import { IPageProps, IPageState, PageBase } from "@app/components";

export interface IHomePageProps extends IPageProps {}

export interface IHomePageState extends IPageState {}

export class HomePage extends PageBase<IPageProps, IPageState> {
    protected loaded() {
        super.loaded();
    }

    public render() {
        return (
            <div className="page-container">
                <div>Home Page</div>
            </div>
        );
    }
}
