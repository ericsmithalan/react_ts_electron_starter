import * as React from "react";

import { ControlBase, IControlProps, IControlState } from "@app/components";

import {
    Titlebar,
    IShellDispatchFromProps,
    IShellPropsFromState
} from "@electron/index";
/** PROPS */
export interface IShellProps
    extends IControlProps,
        IShellPropsFromState,
        IShellDispatchFromProps {
    titlebarHeight: number;
}

/** STATE */
export interface IShellState extends IControlState {}

/** SHELL */
export class Shell extends ControlBase<IShellProps, IShellState> {
    __name = "Shell";
    private _titlebar: React.RefObject<Titlebar>;

    public constructor(props: IShellProps) {
        super(props);

        this._titlebar = React.createRef();
    }

    public static defaultProps: Partial<IShellProps> = {
        titlebarHeight: 30
    };

    public get titlebar(): Titlebar {
        return this._titlebar.current as Titlebar;
    }

    protected loaded() {
        super.loaded();
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
