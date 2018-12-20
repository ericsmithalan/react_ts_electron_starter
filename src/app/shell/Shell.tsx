import * as React from "react";

import { Titlebar } from "@app/shell/Shell.Titlebar";
import "./shell.scss";

/** PROPS */
export interface IShellProps {
    titlebarHeight: number;
    isTitlebarVisible: boolean;
    title: string;
}

/** STATE */
export interface IShellState {}

/** SHELL */
export class Shell extends React.Component<IShellProps, IShellState> {
    __name = "Shell";
    private _titlebar: React.RefObject<Titlebar>;

    public constructor(props: IShellProps) {
        super(props);

        this._titlebar = React.createRef();
    }

    public static defaultProps: Partial<IShellProps> = {
        titlebarHeight: 30,
        isTitlebarVisible: true
    };

    public get titlebar(): Titlebar {
        return this._titlebar.current as Titlebar;
    }

    public render() {
        const styles = {
            fontColor: "black",
            backgroundColor: "white",
            titlebarHeight: 30
        };

        return (
            <div
                style={{
                    color: styles.fontColor,
                    backgroundColor: styles.backgroundColor
                }}
                className="shell"
            >
                <div
                    style={{
                        height: styles.titlebarHeight,
                        display: this.props.isTitlebarVisible
                            ? "block"
                            : "hidden"
                    }}
                    className="shell-titlebar"
                >
                    <Titlebar
                        title={this.props.title}
                        height={styles.titlebarHeight}
                        ref={this._titlebar}
                    />
                </div>
                <div className="shell-content">{this.props.children}</div>
            </div>
        );
    }
}
